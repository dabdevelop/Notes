
### /etc/shadow文件

登录Linux时会要求输入用户名和密码。

通常本地文件中会存储一份用户密码，并与用户输入对比，如果相同就允许用户登录。起初用户密码存储于/etc/passwd中，但由于/etc/passwd必须供所有用户读取，因此为避免密码破译，Unix系统将加密后的密码存储于/etc/shadow中，仅供超级用户可读（大型站点中使用NIS、LDAP、NIS+等方式存储）。

/etc/shadow中的密码格式：

    $id$salt$encrypted

id表示hash算法。起初密码用DES算法加密，但因随DES加密破解难度的降低，已用其他加密算法替代DES。在shadow文件中，密码字段如果以"$"打头，则表示非DES加密，如：

    $1$2eWq10AC$NaQqalCk3InEPBrIxjaJQ1

即表示非DES加密密码。而$1$表示使用了基于MD5的加密算法。

    $2a$04$NZJWn7W2skvQRC5lW3H7q.ZTE8bz4xbCAtU1ttzUOy63si3phphUu

$2a$表示Blowfish算法。常见的标识与算法：

    ID	算法
    $1$	MD5
    $2a$	Blowfish
    $5$	SHA-256
    $6$	SHA-512

### /etc/passwd文件

/etc/passwd文件的格式：

    username:passwd:UID:GID:full_name:directory:shell

/etc/shadow文件

首先从shadow文件中摘录数行：

    root:$1$TCVDVaiT$JC7TbKjvIZpIprdehWFH/1:15157:0:99999:7:::
    bin:*:15157:0:99999:7:::
    daemon:*:15157:0:99999:7:::

/etc/shadow文件的每行由9个字段组成，以":"作为字段分隔符。每个字段的说明：

1. 用户名（login name）。
2. 加密后的密码（形如：$1$2eWq10AC$NaQqalCk3InEPBrIxjaJQ1）。如果密码是"*"或"!"，则表示这个不会用这个帐号来登录（通常是一些后台进程）。
3. 密码最后修改时间，从1970年1月1日起计算的天数。
4. 不可修改密码的天数。如果是0，表示随时可修改密码。如果是N，表示N天后才能修改密码。
5. 密码可以维系的天数。如果设置为N，则表示N天后必须更新密码。设置为99999通常表示无需更新密码。
6. 在密码必须修改前的N天，就开始提示用户需要修改密码。
7. 密码过期的宽限时间。
8. 帐号失效时间。也是UNIX时间戳格式。
9. 最后一个字段是保留字段。

### pwconv系列命令

pwconv命令从/etc/passwd生成/etc/shadow。它将密码从passwd文件中抽取出来放到shadow文件中。运行pwunconv命令则会关闭shadow功能，并把加密密码转移到passwd中。
系统启动时，就默认开启了pwconv。

    $ ls -l /etc/passwd /etc/shadow

    -rw-r--r-- 1 root root 1132 8月  29 20:00 /etc/passwd
    -r-------- 1 root root  855 8月  29 20:00 /etc/shadow

取root用户对比2个文件的记录：

    $ cat /etc/passwd|grep ^root

    root:x:0:0:root:/root:/bin/bash

    # cat /etc/shadow|grep ^root

    root:$6$0fa52kBa$5rQfmjjrmvVmepfQylZINajIUp/cTWi9GjdgONbYVRPlstFbjD54DXUgA2yE5QxdWm0ZX4.z238E/IPv0yAxY0:15946:0:99999:7:::

接下来关闭shadow：

    # pwunconv

此时shadow文件消失：

    $ ls /etc/shadow
    
    ls: 无法访问/etc/shadow: 没有那个文件或目录

再次查看passwd文件：

    # cat /etc/passwd|grep ^root

    root:$6$0fa52kBa$5rQfmjjrmvVmepfQylZINajIUp/cTWi9GjdgONbYVRPlstFbjD54DXUgA2yE5QxdWm0ZX4.z238E/IPv0yAxY0:0:0:root:/root:/bin/bash

可见shadow中的加密密码被转移到了passwd中。
运行pwconv，恢复shadow文件（注意看时间戳已改变）。

    # pwconv
    $ ls -l /etc/shadow

    -r-------- 1 root root 855 8月  29 20:12 /etc/shadow

### 编程实践

验证用户输入密码，使用getspnam()获取shadow数据：

    #include <shadow.h>

    struct spwd *getspnam(char *name);
    struct spwd的定义（正好对应shadow的9个字段）：
    struct spwd {
        char          *sp_namp; /* user login name */
        char          *sp_pwdp; /* encrypted password */
        long int      sp_lstchg; /* last password change */
        long int      sp_min; /* days until change allowed. */
        long int      sp_max; /* days before change required */
        long int      sp_warn; /* days warning for expiration */
        long int      sp_inact; /* days before account inactive */
        long int      sp_expire; /* date when account expires */
        unsigned long int  sp_flag; /* reserved for future use */
    }

使用crypt()加密密码：

    #define _XOPEN_SOURCE
    #include <unistd.h>

    char *crypt(const char *key, const char *salt);
    代码：
    #define _XOPEN_SOURCE
    #include <stdio.h>
    #include <errno.h>
    #include <string.h>
    #include <unistd.h>
    #include <shadow.h>

    int login(const char* user, const char* pwd)
    {
        struct spwd* sp;
        char* cpwd;

        if((sp = getspnam(user)) == (struct spwd*)0){
            fprintf(stderr, "getspnam: unknown %s, err: %d, %s\n", user, errno, strerror(errno));
            return -1;
        }

        cpwd = crypt(pwd, sp->sp_pwdp);
        if(strcmp(cpwd, sp->sp_pwdp) == 0) {
            printf("Login OK!\n");
        }

        return 0;
    }

    int main()
    {
        const char* user = "MYNAME";
        const char* pwd = "MYPASSWD";

        login(user, pwd);

        return 0;
    }

编译、运行（注意编译时添加-lcrypt，使用root运行程序）：

    $ gcc auth.c -lcrypt
    # ./a.out 

    Login OK!
