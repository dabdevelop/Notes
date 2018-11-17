# sed
删除：d命令

    $ sed '2d' example
    // 删除example文件的第二行。

    $ sed '2,$d' example
    // 删除example文件的第二行到末尾所有行。
    
    $ sed '$d' example
    // 删除example文件的最后一行。
    
    $ sed '/test/'d example
    // 删除example文件所有包含test的行。

替换：s命令

    $ sed 's/test/mytest/g' example
    // 在整行范围内把test替换为mytest。如果没有g标记，则只有每行第一个匹配的test被替换成mytest。

    $ sed -n 's/^test/mytest/p' example
    // (-n）选项和p标志一起使用表示只打印那些发生替换的行。也就是说，如果某一行开头的test被替换成mytest，就打印它。
    
    $ sed 's/^192.168.0.1/&localhost/' example
    // &；符号表示替换换字符串中被找到的部份。所有以192.168.0.1开头的行都会被替换成它自已加localhost，变成192.168.0.1localhost。
    
    $ sed -n 's/\(love\)able/\1rs/p' example
    // love被标记为1，所有loveable会被替换成lovers，而且替换的行会被打印出来。
    
    $ sed 's#10#100#g' example
    // 不论什么字符，紧跟着s命令的都被认为是新的分隔符，所以，“#”在这里是分隔符，代替了默认的“/”分隔符。表示把所有10替换成100。

选定行的范围：逗号

    $ sed -n '/test/,/check/p' example
    // 所有在模板test和check所确定的范围内的行都被打印。

    $ sed -n '5,/^test/p' example
    // 打印从第五行开始到第一个包含以test开始的行之间的所有行。
    
    $ sed '/test/,/check/s/$/sed test/' example
    // 对于模板test和west之间的行，每行的末尾用字符串sed test替换。

多点编辑：e命令

    $ sed -e '1,5d' -e 's/test/check/' example
    // (-e）选项允许在同一行里执行多条命令。如例子所示，第一条命令删除1至5行，第二条命令用check替换test。命令的执行顺序对结果有影响。如果两个命令都是替换命令，那么第一个替换命令将影响第二个替换命令的结果。

    $ sed --expression='s/test/check/' --expression='/love/d' example
    // 一个比-e更好的命令是--expression。它能给sed表达式赋值。

从文件读入：r命令

    $ sed '/test/r file' example
    // file里的内容被读进来，显示在与test匹配的行后面，如果匹配多行，则file的内容将显示在所有匹配行的下面。

写入文件：w命令

    $ sed -n '/test/w file' example
    // 在example中所有包含test的行都被写入file里。

追加命令：a命令

    $ sed '/^test/a\\this is a example' example
    // 'this is a example'被追加到以test开头的行后面，sed要求命令a后面有一个反斜杠。

插入：i命令

    $ sed '/test/i\\ new line -------------------------' example
    // 如果test被匹配，则把反斜杠后面的文本插入到匹配行的前面。

下一个：n命令 

    $sed '/test/{ n; s/aa/bb/; }' example
    // 如果test被匹配，则移动到匹配行的下一行，替换这一行的aa，变为bb，并打印该行，然后继续。

变形：y命令

    $ sed '1,10y/abcde/ABCDE/' example
    // 把1--10行内所有abcde转变为大写，注意，正则表达式元字符不能使用这个命令。

退出：q命令

    $ sed '10q' example
    // 打印完第10行后，退出sed。

保持和获取：h命令和G命令

    $ sed -e '/test/h' -e '$G' example
    // 在sed处理文件的时候，每一行都被保存在一个叫模式空间的临时缓冲区中，除非行被删除或者输出被取消，否则所有被处理的行都将打印在屏幕上。接着模式空间被清空，并存入新的一行等待处理。在这个例子里，匹配test的行被找到后，将存入模式空间，h命令将其复制并存入一个称为保持缓存区的特殊缓冲区内。第二条语句的意思是，当到达最后一行后，G命令取出保持缓冲区的行，然后把它放回模式空间中，且追加到现 在已经存在于模式空间中的行的末尾。在这个例子中就是追加到最后一行。简单来说，任何包含test的行都被复制并追加到该文件的末尾。

保持和互换：h命令和x命令

    $ sed -e '/test/h' -e '/check/x' example 
    //互换模式空间和保持缓冲区的内容。也就是把包含test与check的行互换。
