# bash

## 条件判断
```bash
    if [ -f "success.txt" ];then
        echo true1
    elif [ -f "s.txt" ]
        echo true2
    else
        echo false
    fi
```
通常用" [ ] "来表示条件测试。注意这里的空格很重要。要确保方括号的空格。 

    [ -f "somefile" ] ：判断是否是一个文件 
    [ -x "/bin/ls" ] ：判断/bin/ls是否存在并有可执行权限 
    [ -n "$var" ] ：判断$var变量是否有值 
    [ "$a" = "$b" ] ：判断$a和$b是否相等 

    -e 文件已经存在 
    -f 文件是普通文件 
    -s 文件大小不为零 
    -d 文件是一个目录 
    -r 文件对当前用户可以读取 
    -w 文件对当前用户可以写入 
    -x 文件对当前用户可以执行 
    -g 文件的 GID 标志被设置 
    -u 文件的 UID 标志被设置 
    -O 文件是属于当前用户的 
    -G 文件的组 ID 和当前用户相同 

    file1 -nt file2 
    # 文件 file1 比 file2 更新 

    file1 -ot file2 
    # 文件 file1 比 file2 更老 

如 if [ -x /root ] 可以用于判断 /root 目录是否可以被当前用户进入 

执行man test可以查看所有测试表达式可以比较和判断的类型。
对应的操作 整数操作 字符串操作 

    相同 -eq = 
    不同 -ne != 
    大于 -gt > 
    小于 -lt < 
    大于或等于 -ge 
    小于或等于 -le 
    为空 -z 
    不为空 -n 

比如： 

    比较整数 a 和 b 是否相等就写做 if [ $a = $b ] 
    判断整数 a 是否大于整数 b 就写做 if [ $a -gt $b ] 
    比较字符串 a 和 b 是否相等就写作：if [ $a = $b ] 
    判断字符串 a 是否为空就写作： if [ -z $a ] 
    判断整数变量 a 是否大于 b 就写作：if [ $a -gt $b ] 

注意：在“[”和“]”符号的左右都留有空格。 

```bash
    sh -c "echo $SHELL"
    [ -f "/etc/shadow" ] && echo "This computer uses shadow passwors" 

    [ -f "/etc/shadow" ] || echo "This computer uses not shadow passwors" 
```

## case
表达式可以用来匹配一个给定的字符串，而不是数字。 

    case "$var" in condition1 ) condition2 ) * ) default statments;; 

```bash
    #!/bin/bash 
    echo "Hit a key, then hit return." 
    read Keypress 

    case "$Keypress" in 
    [a-z] ) echo "Lowercase letter";; 
    [A-Z] ) echo "Uppercase letter";; 
    [0-9] ) echo "Digit";; 
    * ) echo "Punctuation, whitespace, or other";; 
    esac 

    exit 0 
```

```bash
    #!/bin/sh 

    ftype=`file "$1"` 

    case "$ftype" in 

    "$1: Zip archive"*) 

        unzip "$1" ;; 

    "$1: gzip compressed"*) 

        gunzip "$1" ;; 

    "$1: bzip2 compressed"*) 

        bunzip2 "$1" ;; 

    *) echo "File $1 can not be uncompressed with smartzip";; 

    esac 
```

```bash
    #!/bin/sh 

    echo "What is your favourite OS?" 

    select var in "Linux" "Gnu Hurd" "Free BSD" "Other"; do 

        break 

    done 

    echo "You have selected $var" 

```

## 循环

```bash
    #!/bin/bash 

    for day in Sun Mon Tue Wed Thu Fri Sat 
    do 
    echo $day 
    done 

    while [ condition ] 
    do 
    #code block 
    done 


    until [ condition is TRUE ] 
    do 
    #code block 
    done 
```

单引号更严格一些。它可以防止任何变量扩展。双引号可以防止通配符扩展但允许变量扩展。 
还有一种防止这种扩展的方法，那就是使用转义字符——反斜杆

```bash
    #!/bin/sh 

    echo $SHELL 

    echo "$SHELL" 

    echo '$SHELL' 
```
运行结果为： 

    /bin/bash 

    /bin/bash 

    $SHELL 
