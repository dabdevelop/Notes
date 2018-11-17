### windows运行命令大全

        winver 检查Windows版本
    　　 wmimgmt.msc 打开Windows管理体系结构(wmi)
    　　 wupdmgr Windows更新程序
    　　 w脚本 Windows脚本宿主设置
    　　 write 写字板
    　　 winmsd 系统信息
    　　 wiaacmgr 扫描仪和照相机向导
    　　 winchat xp自带局域网聊天
    　　 mem.exe 显示内存使用情况
    　　 msconfig.exe 系统配置实用程序
    　　 mplayer2 简易widnows media player
    　　 mspaint 画图板
    　　 mstsc 远程桌面连接
    　　 mplayer2 媒体播放机
    　　 magnify 放大镜实用程序
    　　 mmc 打开控制台
    　　 mobsync 同步命令
    　　 dxdiag 检查directx信息
    　　 drwtsn32 系统医生
    　　 devmgmt.msc 设备管理器
    　　 dfrg.msc 磁盘碎片整理程序
    　　 diskmgmt.msc 磁盘管理实用程序
    　　 dcomcnfg 打开系统组件服务
    　　 ddeshare 打开dde共享设置
    　　 dvdplay dvd播放器
    　　 net stop messenger 停止信使服务
    　　 net start messenger 开始信使服务
    　　 notepad 打开记事本
    　　 nslookup 网络管理的工具向导
    　　 ntbackup 系统备份和还原
    　　 narrator 屏幕“讲述人”
    　　 ntmsmgr.msc 移动存储管理器
    　　 ntmsoprq.msc 移动存储管理员操作请求
    　　 netstat -an （tc）命令检查接口
    　　 syncapp 创建一个公文包
    　　 sysedit 系统配置编辑器
    　　 sigverif 文件签名验证程序
    　　 sndrec32 录音机
    　　 shrpubw 创建共享文件夹
    　　 secpol.msc 本地安全策略
    　　 syskey 系统加密，一旦加密就不能解开，保护Windows xp系统的双重密码
    　　 services.msc 本地服务设置
    　　 sndvol32 音量控制程序
    　　 sfc.exe 系统文件检查器
    　　 sfc /scannow windows文件保护
    tsshutdn 60秒倒计时关机命令
    　　 tourstart xp简介（安装完成后出现的漫游xp程序）
    　　 taskmgr 任务管理器
    　　 eventvwr 事件查看器
    　　 eudcedit 造字程序
    　　 explorer 打开资源管理器
    　　 packager 对象包装程序
    　　 perfmon.msc 计算机性能监测程序
    　　 progman 程序管理器
    　　 regedit.exe 注册表
    　　 rsop.msc 组策略结果集
    　　 regedt32 注册表编辑器
    　　 rononce -p 15秒关机
    　　 regsvr32 /u *.dll 停止dll文件运行
    　　 regsvr32 /u zipfldr.dll 取消zip支持
    　　 cmd.exe cmd命令提示符
    　　 chkdsk.exe chkdsk磁盘检查
    　　 certmgr.msc 证书管理实用程序
    　　 calc 启动计算器
    　　 charmap 启动字符映射表
    　　 cliconfg sql server 客户端网络实用程序
    　　 clipbrd 剪贴板查看器
    　　 conf 启动netmeeting
    　　 compmgmt.msc 计算机管理
    　　 cleanmgr 垃圾整理
    　　 ciadv.msc 索引服务程序
    　　 osk 打开屏幕键盘
    　　 odbcad32 odbc数据源管理器
    　　 oobe/msoobe /a 检查xp是否激活
    　　 lusrmgr.msc 本机用户和组
    　　 logoff 注销命令
    　　 iexpress 木马捆绑工具，系统自带
    　　 nslookup ip地址侦测器
    　　 fsmgmt.msc 共享文件夹管理器
    　　 utilman 辅助工具管理器
    　　 gpedit.msc 组策略

### 常用网络检测命令

1.最基本，最常用的，测试物理网络的

    ping 192.168.0.8 －t ，参数－t是等待用户去中断测试
    
2.查看DNS、IP、Mac等

    A.Win98：winipcfg
    B.Win2000以上：Ipconfig/all
    C.NSLOOKUP：如查看河北的DNS
    C:\>nslookup
    Default Server: ns.hesjptt.net.cn
    Address: 202.99.160.68
    >server 202.99.41.2 则将DNS改为了41.2
    > pop.pcpop.com
    Server: ns.hesjptt.net.cn
    Address: 202.99.160.68
    Non-authoritative answer:
    Name: pop.pcpop.com
    Address: 202.99.160.212

3.网络信使 （经常有人问的~）

    Net send 计算机名/IP|* (广播) 传送内容，注意不能跨网段
    net stop messenger 停止信使服务，也可以在面板－服务修改
    net start messenger 开始信使服务

4.探测对方对方计算机名，所在的组、域及当前用户名 （追捕的工作原理）

    ping －a IP －t ，只显示NetBios名
    nbtstat -a 192.168.10.146 比较全的

5.netstat -a 显示出你的计算机当前所开放的所有端口

    netstat -s -e 比较详细的显示你的网络资料，包括TCP、UDP、ICMP 和 IP的统计等

6.探测arp绑定（动态和静态）列表，显示所有连接了我的计算机，显示对方IP和MAC地址

    arp -a

7.在代理服务器端
    捆绑IP和MAC地址，解决局域网内盗用IP！：

    ARP －s 192.168.10.59 00 －50－ff－6c－08－75
    
    解除网卡的IP与MAC地址的绑定：
    
    arp -d 网卡IP

8.在网络邻居上隐藏你的计算机 （让人家看不见你！）
    
    net config server /hidden:yes
    net config server /hidden:no 则为开启

9.几个net命令

    A.显示当前工作组服务器列表 net view，当不带选项使用本命令时，它就会显示当前域或网络上的计算机上的列表。
    比如：查看这个IP上的共享资源，就可以
    C:\>net view 192.168.10.8
    在 192.168.10.8 的共享资源
    资源共享名 类型 用途 注释
    --------------------------------------
    网站服务 Disk
    命令成功完成。
    B.查看计算机上的用户帐号列表 net user
    C.查看网络链接 net use
    例如：net use z: \\192.168.10.8\movie 将这个IP的movie共享目录映射为本地的Z盘
    D.记录链接 net session
    例如：
    C:\>net session
    计算机 用户名 客户类型 打开空闲时间
    -------------------------------------------------------------------------------
    \\192.168.10.110 ROME Windows 2000 2195 0 00:03:12
    \\192.168.10.51 ROME Windows 2000 2195 0 00:00:39
    命令成功完成。

10.路由跟踪命令

    A.tracert pop.pcpop.com
    B.pathping pop.pcpop.com 除了显示路由外，还提供325S的分析，计算丢失包的％

11.关于共享安全的几个命令

    A.查看你机器的共享资源 net share
    B.手工删除共享（可以编个bat文件，开机自运行，把共享都删了！）
    net share c$ /d
    net share d$ /d
    net share ipc$ /d
    net share admin$ /d
    注意$后有空格。

C.增加一个共享：

    c:\net share mymovie=e:\downloads\movie /users:1
    mymovie 共享成功。
    同时限制链接用户数为1人。

12.在DOS行下设置静态IP

A.设置静态IP
    
    CMD
    netsh
    netsh>int
    interface>ip
    interface ip>set add "本地链接" static IP地址 mask gateway
    
B.查看IP设置
    
    interface ip>show address
    
### arp
    
显示和修改“地址解析协议 (ARP)”缓存中的项目。ARP 缓存中包含一个或多个表，它们用于存储 IP 地址及其经过解析的以太网或令牌环物理地址。计算机上安装的每一个以太网或令牌环网络适配器都有自己单独的表。如果在没有参数的情况下使用，则 arp 命令将显示帮助信息。
    
#### 语法
    
    arp [-a [InetAddr] [-N IfaceAddr]] [-g [InetAddr] [-N IfaceAddr]] [-d InetAddr [IfaceAddr]] [-s InetAddr EtherAddr [IfaceAddr]]

#### 参数
    
##### -a [InetAddr] [-N IfaceAddr]
    
显示所有接口的当前 ARP 缓存表。要显示指定 IP 地址的 ARP 缓存项，请使用带有 InetAddr 参数的 arp -a，此处的 InetAddr 代表指定的 IP 地址。要显示指定接口的 ARP 缓存表，请使用 -N IfaceAddr 参数，此处的 IfaceAddr 代表分配给指定接口的 IP 地址。-N 参数区分大小写。

##### -g [InetAddr] [-N IfaceAddr]

与 -a 相同。

##### -d InetAddr [IfaceAddr]

删除指定的 IP 地址项，此处的 InetAddr 代表 IP 地址。对于指定的接口，要删除表中的某项，请使用 IfaceAddr 参数，此处的 IfaceAddr 代表分配给该接口的 IP 地址。要删除所有项，请使用星号 (*) 通配符代替 InetAddr。

##### -s InetAddr EtherAddr [IfaceAddr]
    向 ARP 缓存添加可将 IP 地址 InetAddr 解析成物理地址 EtherAddr 的静态项。要向指定接口的表添加静态 ARP 缓存项，请使用 IfaceAddr 参数，此处的 IfaceAddr 代表分配给该接口的 IP 地址。
##### /?
    在命令提示符显示帮助。
#### 注释
InetAddr 和 IfaceAddr 的 IP 地址用带圆点的十进制记数法表示。
物理地址 EtherAddr 由六个字节组成，这些字节用十六进制记数法表示并且用连字符隔开（比如，00-AA-00-4F-2A-9C）。

通过 -s 参数添加的项属于静态项，它们不会 ARP 缓存中超时。如果终止 TCP/IP 协议后再启动，这些项会被删除。要创建永久的静态 ARP 缓存项，请在批处理文件中使用适当的 arp 命令并通过“计划任务程序”在启动时运行该批处理文件。

只有当网际协议 (TCP/IP) 协议在 网络连接中安装为网络适配器属性的组件时，该命令才可用。

#### 范例
要显示所有接口的 ARP 缓存表，可键入：

    arp -a

对于指派的 IP 地址为 10.0.0.99 的接口，要显示其 ARP 缓存表，可键入：

    arp -a -N 10.0.0.99

要添加将 IP 地址 10.0.0.80 解析成物理地址 00-AA-00-4F-2A-9C 的静态 ARP 缓存项，可键入：

    arp -s 10.0.0.80 00-AA-00-4F-2A-9C

### at

计划在指定时间和日期在计算机上运行命令和程序。at 命令只能在“计划”服务运行时使用。如果在没有参数的情况下使用，则 at 列出已计划的命令。
语法

    at [\\ComputerName] [{[ID] [/delete]|/delete [/yes]}]
    at [[\\ComputerName] hours:minutes [/interactive] [{/every:date[,...]|/next:date[,...]}] command]

#### 参数
##### \\computername
指定远程计算机。如果省略该参数，则 at 计划本地计算机上的命令和程序。
##### ID
指定指派给已计划命令的识别码。
##### /delete
取消已计划的命令。如果省略了 ID，则计算机中所有已计划的命令将被取消。
##### /yes
删除已计划的事件时，对来自系统的所有询问都回答“是”。
##### hours:minutes
指定命令运行的时间。该时间用 24 小时制（即从 00:00 [午夜] 到 23:59）的 小时: 分钟格式表示。
##### /interactive
对于在运行 command 时登录的用户,允许 command 与该用户的桌面进行交互。
##### /every:
在每个星期或月的指定日期（例如，每个星期四，或每月的第三天）运行 command 命令。
##### date
指定运行命令的日期。可以指定一周的某日或多日（即，键入 M、T、W、Th、F、S、Su）或一个月中的某日或多日（即，键入从 1 到31 之间的数字）。用逗号分隔多个日期项。如果省略了 date，则 at 使用该月的当前日。
##### /next:
在下一个指定日期（比如，下一个星期四）到来时运行 command。
##### command
指定要运行的 Windows 命令、程序（.exe 或 .com 文件）或批处理程序（.bat 或 .cmd 文件）。当命令需要路径作为参数时，请使用绝对路径，也就是从驱动器号开始的整个路径。如果命令在远程计算机上，请指定服务器和共享名的通用命名协定 (UNC) 符号，而不是远程驱动器号。
##### /?
在命令提示符显示帮助。

#### 注释

### schtasks 
是功能更为强大的超集命令行计划工具，它含有 at 命令行工具中的所有功能。对于所有的命令行计划任务，都可以使用 schtasks 来替代 at。有关 schtasks 的详细信息，请参阅“相关主题”。
#### 使用 at
使用 at 命令时，要求您必须是本地 Administrators 组的成员。
加载 Cmd.exe
在运行命令之前，At 不会自动加载 Cmd.exe （命令解释器）。如果没有运行可执行文件 (.exe)，则在命令开头必须使用如下所示的方法专门加载 Cmd.exe：

    cmd /c dir > c:\test.out。

#### 查看已计划的命令
当不带命令行选项使用 at 时，计划任务会出现在类似于以下格式的表中：

    Status ID Day Time Command Line
    OK 1 Each F 4:30 PM net send group leads status due
    OK 2 Each M 12:00 AM chkstor > check.file
    OK 3 Each F 11:59 PM backup2.bat

包含标识号 (ID)
当在命令提示下使用带有标识号 (ID) 的 at 命令时，单个任务项的信息会显示在类似于下面的格式中：

    Task ID： 1
    Status:OK
    Schedule:Each F
    Time of Day:4:30 PM
    Command:net send group leads status due
    
当计划带有 at 的命令（尤其是带有命令行选项的命令）后，要通过键入不带命令行选项的 at 来检查该命令语法是否输入正确。如果显示在“命令行”列中的信息不正确，请删除该命令，然后重新键入它。如果还不正确，则可以在重新键入该命令时让它少带些命令行选项。

#### 查看结果
使用 at 的已经计划的命令作为后台程序运行。运行结果不会显示在计算机上。要将输出重定向到文件，请使用重定向符号 (> )。如果将输出重定向到文件，则不论是在命令行还是在批处理文件中使用 at，都需要在重定向符号之前使用转义符 (^)。例如，要重定向输出到 Output.text 文件，则要键入：

    at 14:45 c:\test.bat ^>c:\output.txt

执行命令的当前目录为 systemroot 文件夹。
更改系统时间

#### 在使用 at 命令计划
了要运行的命令之后，如果更改了计算机的系统时间，则通过键入不带命令行选项的 at 可使 at 计划程序与修改后的系统时间同步。
存储命令
已计划的命令存储在注册表中。这样，如果重新启动“计划”服务，则不会丢失计划任务。
连接到网络驱动器
对于需要访问网络的计划作业，请不要使用已重新定向的驱动器。“计划”服务可能无法访问这些重定向的驱动器，或者，在该计划任务运行时如果有其他用户登录，则这些重定向的驱动器可能不会出现。因此，对于计划作业，请使用 UNC 路径。例如：

    at 1:00pm my_backup \\server\share

请不要使用下述语法（其中 x: ?表示由用户建立的连接）：

    at 1:00pm my_backup x:

如果计划了一个使用驱动器号的 at 命令来连接共享目录，则应包含一个 at 命令以使在完成该驱动器的使用时断开与驱动器的连接。如果不能断开与驱动器的连接，则在命令提示下，所指派的驱动器号将不可用。
范例
要显示 Marketing 服务器上已计划的命令列表，请键入：

    at \\marketing

要了解服务器 Corp 上标识号为 3 的命令的详细信息，请键入：

    at \\corp 3

要计划在上午 8:00 于 Corp 服务器上运行网络共享命令，并将该列表重定向到 Maintenance 服务器的 Corp.txt 文件（位于 Reports 共享目录下）中，请键入：
    
    at \\corp 08:00 cmd /c "net share reports=d:\marketing\reports >> \\maintenance\reports\corp.txt"

为了在每五天后的午夜将 Marketing 服务器的硬盘驱动器备份到磁带驱动器，首先创建名为 Archive.cmd 的批处理程序（它含有备份命令），然后计划该批处理程序的运行，为此请键入：

    at \\marketing 00:00 /every:5,10,15,20,25,30 archive

要取消当前服务器上已计划的所有命令，请按下述方法清除 at 计划信息：

    at /delete

如果要运行的命令不是可执行 (.exe) 文件，请按如下所示的方法在该命令之前使用 cmd /c 来加载 Cmd.exe：

    cmd /c dir > c:\test.out。

### Rsh
在运行 RSH 服务的远程计算机上运行命令。Windows XP 和 Windows 2000 不提供 RSH 服务。Windows 2000 Server Resource Kit 提供名为 Rshsvc.exe 的 RSH 服务。使用不带参数的 rsh 显示帮助。
语法
    rsh [Host] [-l UserName] [-n] [Command]
#### 参数
`Host` 指定运行 command 的远程计算机。
    -l UserName
指定远程计算机上使用的用户名。在省略情况下，使用当前登录用户的名称。
    -n
将 rsh 的输入重定向到 NULL 设备。这防止本地计算机命令结果的显示。
`Command` 指定要运行的命令。
`/?` 在命令提示符显示帮助。
注释

### 标准操作
rsh 命令将标准输入复制到远程 command，将远程 command 的标准输出复制到其标准输出，将远程 command 的标准错误复制到其标准错误。Rsh 通常在远程命令终止时终止。

#### 使用重定向符号

为了使重定向在远程计算机上发生，要以引号引住重定向符号（例如 ">>"）。如果不使用引号，重定向会在本地计算机发生。例如，以下命令将远程文件“RemoteFile”附加到本地文件“LocalFile”中：

    rsh othercomputer cat remotefile >> localfile

以下命令将远程文件 Remotefile 附加到远程文件 otherremotefile 中：

    rsh othercomputer cat remotefile ">>" otherremotefile

#### 使用 rsh
在使用已登录到某个域并且运行 Windows XP Professional 的计算机时，该域的主域控制器必须可用于确认用户名或 rsh 命令失败。
.rhosts 文件

.rhosts 文件通常许可 UNIX 系统的网络访问权限。.rhosts 文件列出可以访问远程计算机的计算机名及关联的登录名。在正确配置了 .rhosts 文件的远程计算机上运行 rcp、rexec 或 rsh 命令时，您不必提供远程计算机的登录和密码信息。

.rhosts 文件是一个文本文件，该文件中每一行为一个条目。条目由本地计算机名、本地用户名和有关该条目的所有注释组成。每个条目均由制表符或空格分开，注释用符号 (#) 打头。例如：

    host7 #This computer is in room 31A

.rhosts 文件必须在远程计算机的用户主目录中。有关远程计算机 .rhosts 文件特定执行的详细信息，请参阅远程系统的文档。
只有当网际协议 (TCP/IP) 协议在 网络连接中安装为网络适配器属性的组件时，该命令才可用。

#### 范例
要以名称 admin1 在远程计算机 vax1 上执行 telcon 命令，请键入：

    rsh vax1 -l admin1 telcon

### tftp
向运行平凡文件传输协议 (TFTP) 服务或 daemon 的远程计算机（尤其是运行 UNIX 的计算机）传输文件或从运行平凡文件传输协议 (TFTP) 服务或 daemon 的远程计算机（尤其是运行 UNIX 的计算机）传输文件。

#### 语法

    tftp [-i] [Host] [{get | put}] [Source] [Destination]

#### 参数

`-i` 指定二进制图像传送模式（也称为八进制模式）。在二进制图像模式下，文件以一个字节为单位进行传输。在传送二进制文件时使用该模式。如果省略了 `-i`，文件将以 `ASCII` 模式传送。这是默认的传送模式。该模式将行尾 `(EOL)` 字符转换为指定计算机的适当格式。传送文本文件时使用该模式。如果文件传送成功，将显示数据传输率。
`Host` 指定本地或远程计算机。
`put` 将本地计算机上的 `Destination` 文件传送到远程计算机上的 `Source 文件`。因为 `TFTP` 协议不支持用户身份验证，所以用户必须登录到远程计算机，同时文件在远程计算机上必须可写。
`get` 将远程计算机上的 Destination 文件传送到本地计算机上的 `Source` 文件。
`Source` 指定要传送的文件。
`Destination` 指定将文件传送到的位置。如果省略了 Destination，将假定它与 Source 同名。
`/?` 在命令提示符显示帮助。

#### 注释

#### 使用 get 参数

如果将本地计算机上的文件 FileTwo 传送到远程计算机上的文件 FileOne，则指定 put。如果将远程计算机上的文件 FileTwo 传送到远程计算机上的文件 FileOne，则指定 get。

Windows XP 或 Windows 2000 不提供一般用途的 TFTP 服务器。Windows 2000 提供的 TFTP 服务器服务只为 Windows XP 和 Windows 2000 客户端计算机提供远程引导功能。

只有当网际协议 (TCP/IP) 协议在 网络连接中安装为网络适配器属性的组件时，该命令才可用。

#### 范例

要从本地计算机将文件 Users.txt 传送到远程计算机 vax1 上的 Users19.txt，请键入：
    
    tftp vax1 put users.txt users19.txt

### nbtstat

显示本地计算机和远程计算机的基于 TCP/IP (NetBT) 协议的 NetBIOS 统计资料、NetBIOS 名称表和 NetBIOS 名称缓存。Nbtstat 可以刷新 NetBIOS 名称缓存和注册的 Windows Internet 名称服务 (WINS) 名称。使用不带参数的 nbtstat 显示帮助。

#### 语法

    nbtstat [-a RemoteName] [-A IPAddress] [-c] [-n] [-r] [-R] [-RR] [-s] [-S] [Interval]

#### 参数

##### -a remotename

显示远程计算机的 NetBIOS 名称表，其中，RemoteName 是远程计算机的 NetBIOS 计算机名称。NetBIOS 名称表是运行在该计算机上的应用程序使用的 NetBIOS 名称列表。

##### -A IPAddress
    
显示远程计算机的 NetBIOS 名称表，其名称由远程计算机的 IP 地址指定（以小数点分隔）。
    
##### -c

显示 NetBIOS 名称缓存内容、NetBIOS 名称表及其解析的各个地址。

##### -n

显示本地计算机的 NetBIOS 名称表。Registered 中的状态表明该名称是通过广播或 WINS 服务器注册的。
    
##### -r

显示 NetBIOS 名称解析统计资料。在配置为使用 WINS 的 Windows XP 计算机上，该参数将返回已通过广播和 WINS 解析和注册的名称号码。

##### -R

清除 NetBIOS 名称缓存的内容并从 Lmhosts 文件中重新加载带有 #PRE 标记的项目。
    
##### -RR

重新释放并刷新通过 WINS 注册的本地计算机的 NetBIOS 名称。
    
##### -s

显示 NetBIOS 客户和服务器会话，并试图将目标 IP 地址转化为名称。
    
##### -S

显示 NetBIOS 客户和服务器会话，只通过 IP 地址列出远程计算机。
    
##### Interval

重新显示选择的统计资料，可以中断每个显示之间的 Interval 中指定的秒数。按 CTRL+C 停止重新显示统计信息。如果省略该参数， netstat 将只显示一次当前的配置信息。
    
##### /?

在命令提示符显示帮助。

注释
#### nbtstat 命令行参数区分大小写。
下表列出了由 Nbtstat 生成的列标题。 

    标题 说明
    Input 接收的字节数。
    Output 发送的字节数。
    In/Out 该连接是否从计算机（传出）或者其他计算机到本地计算机（传入）。
    Lift 名称表缓存项在被清除之前所存留的时间。
    Local Name 本地 NetBIOS 名称与连接相关联。
    Remote Host 与远程计算机相关的名称或 IP 地址。
    <03> 转化为十六进制的 NetBIOS 名称的最后一个字节。每个 NetBIOS 名称长度均为 16 个字符。由于最后一个字节通常有特殊的意义，因为相同的名称（只有最后一个字节不同）可能在一台计算机上出现几次。例如，<20> 在 ASCII 文本中是一个空格。
    Type 名称类型。名称可以是单个名称，也可以是组名称。
    Status 远程计算机上是否在运行 NetBIOS 服务（“已注册”），或同一计算机名是否已注册了相同的服务（“冲突”）。
    State NetBIOS 连接的状态。

下表列出了可能的 NetBIOS 连接状态。 

    状态 说明
    已连接 会话已建立。
    关联 连接的终结点已经被创建并与 IP 地址关联。
    正接听 该终结点对内向连接可用。
    空闲 该结束点已被打开单不能接收连接。
    正在连接 会话处于连接阶段。在此阶段正在解析所选目标的由名称到 IP 地址的映射。
    接受 入站会话当前正在被接受，将在短期内连接。
    重新连接 会话将试图重新连接（如果第一次连接失败）。
    出站 会话正处于连接阶段。此阶段正在创建 TCP 连接。
    入站 入站会话在连接期。
    正在断开 会话正在断开连接。
    已中断连接 本地计算机已断开连接，并正等待远程系统的确认。
    只有当网际协议 (TCP/IP) 协议在 网络连接中安装为网络适配器属性的组件时，该命令才可用。

#### 范例
要显示 NetBIOS 计算机名为 CORP07 的远程计算机的 NetBIOS 名称表，请键入：

##### nbtstat -a CORP07

要显示所分配 IP 地址为 10.0.0.99 的远程计算机的 NetBIOS 名称表，请键入：

##### nbtstat -A 10.0.0.99

要显示本地计算机的 NetBIOS 名称表，请键入：

##### nbtstat -n

要显示本地计算机 NetBIOS 名称缓存的内容，请键入：

##### nbtstat -c

要清除 NetBIOS 名称缓存并重新装载本地 Lmhosts 文件中带标记 #PRE 的项目，请键入：

##### nbtstat -R

放通过 WINS 服务器注册的 NetBIOS 名称并对其重新注册，请键入：

##### nbtstat -RR

要每隔 5 秒以 IP 地址显示 NetBIOS 会话统计资料，请键入：

##### nbtstat -S 5

### netstat

显示活动的 TCP 连接、计算机侦听的端口、以太网统计信息、IP 路由表、IPv4 统计信息（对于 IP、ICMP、TCP 和 UDP 协议）以及 IPv6 统计信息（对于 IPv6、ICMPv6、通过 IPv6 的 TCP 以及通过 IPv6 的 UDP 协议）。使用时如果不带参数，netstat 显示活动的 TCP 连接。

#### 语法
    
    netstat [-a] [-e] [-n] [-o] [-p Protocol] [-r] [-s] [Interval]

#### 参数
    
##### -a

显示所有活动的 TCP 连接以及计算机侦听的 TCP 和 UDP 端口。

##### -e

显示以太网统计信息，如发送和接收的字节数、数据包数。该参数可以与 -s 结合使用。

##### -n

显示活动的 TCP 连接，不过，只以数字形式表现地址和端口号，却不尝试确定名称。

##### -o

显示活动的 TCP 连接并包括每个连接的进程 ID (PID)。可以在 Windows 任务管理器中的“进程”选项卡上找到基于 PID 的应用程序。该参数可以与 -a、-n 和 -p 结合使用。

##### -p Protocol

显示 Protocol 所指定的协议的连接。在这种情况下，Protocol 可以是 tcp、udp、tcpv6 或 udpv6。如果该参数与 -s 一起使用按协议显示统计信息，则 Protocol 可以是 tcp、udp、icmp、ip、tcpv6、udpv6、icmpv6 或 ipv6。

##### -s

按协议显示统计信息。默认情况下，显示 TCP、UDP、ICMP 和 IP 协议的统计信息。如果安装了 Windows XP 的 IPv6 协议，就会显示有关 IPv6 上的 TCP、IPv6 上的 UDP、ICMPv6 和 IPv6 协议的统计信息。可以使用 -p 参数指定协议集。

##### -r

显示 IP 路由表的内容。该参数与 route print 命令等价。

##### Interval

每隔 Interval 秒重新显示一次选定的信息。按 CTRL+C 停止重新显示统计信息。如果省略该参数，netstat 将只打印一次选定的信息。
    
##### /?

在命令提示符显示帮助。

#### 注释

与该命令一起使用的参数必须以连字符 (-) 而不是以短斜线 (/) 作为前缀。
Netstat 提供下列统计信息：
`Proto`
协议的名称（TCP 或 UDP）。
`Local Address`
本地计算机的 IP 地址和正在使用的端口号。如果不指定 -n 参数，就显示与 IP 地址和端口的名称对应的本地计算机名称。如果端口尚未建立，端口以星号（*）显示。
`Foreign Address`
连接该插槽的远程计算机的 IP 地址和端口号码。如果不指定 -n 参数，就显示与 IP 地址和端口对应的名称。如果端口尚未建立，端口以星号（*）显示。
`(state)`
表明 TCP 连接的状态。可能的状态如下：

    CLOSE_WAIT
    CLOSED
    ESTABLISHED
    FIN_WAIT_1
    FIN_WAIT_2
    LAST_ACK
    LISTEN
    SYN_RECEIVED
    SYN_SEND
    TIMED_WAIT

有关 TCP 连接状态的信息，请参阅 RFC 793。
只有当网际协议 (TCP/IP) 协议在 网络连接中安装为网络适配器属性的组件时，该命令才可用。

#### 范例

要想显示以太网统计信息和所有协议的统计信息，请键入下列命令：

    netstat -e -s

要想仅显示 TCP 和 UDP 协议的统计信息，请键入下列命令：

    netstat -s -p tcp udp

要想每 5 秒钟显示一次活动的 TCP 连接和进程 ID，请键入下列命令：

    nbtstat -o 5

要想以数字形式显示活动的 TCP 连接和进程 ID，请键入下列命令：

    nbtstat -n –o

### runas

允许用户用其他权限运行指定的工具和程序，而不是用户当前登录提供的权限。

#### 语法

    runas [{/profile|/noprofile}] [/env] [/netonly] [/smartcard] [/showtrustlevels] [/trustlevel] /user:UserAccountName program

#### 参数

###### /profile

加载用户的配置文件。/profile 是默认值。

###### /no profile
###### /noprofile 

指定不加载用户的配置文件。这使应用程序载入的更加快速，但是在一些应用程序中也会引起错误。

###### /env

指定当前使用的网络环境，而不是用户的本地环境。

###### /netonly

指明指定的用户信息只用于远程访问。

###### /smartcard

###### /smartcard 

表示凭据是否是由智能卡提供的。

###### /showtrustlevels

列出 /trustlevel 开关项。

###### /trustlevel

指定应用程序运行所在的授权级别。使用 /showtrustlevels 查看可用的信任级别。

###### /user:UserAccountName

指定在其下运行程序的用户帐户的名称。用户帐户的格式应是 user@domain 或 domain\user。

###### program

指定要用在 /user 中指定的帐户运行的程序或命令。

###### /?

在命令提示符显示帮助。

#### 注释

管理员可以使用一个权限受限制的帐户执行日常、非管理性的任务，只有在执行特定管理任务时，才使用一个权限更大的帐户。要不经过注销再重新登录就完成这样的任务，可以用一般帐户登录，然后使用 runas 命令来运行需要更大权限的工具。

有关 runas 命令的使用范例，请参阅“相关主题”。

尽管 runas 通常由 Administrator 帐户使用，但并非仅限于 Administrator 帐户。任何拥有多个帐户的用户均可以利用备用凭据，使用 runas 运行程序、MMC 控制台或“控制面板”项。

如果要在计算机上使用 Administrator 帐户，对于 /user:，键入下列参数之一：

    /user:AdministratorAccountName@ComputerName
    /user:ComputerName\AdministratorAccountName

如果想以域管理员身份使用这个命令，键入下列参数之一：

    /user:AdministratorAccountName@DomainName
    /useromainName\AdministratorAccountName

runas 命令允许您运行程序 (*.exe)、保存的 MMC 控制台 (*.msc)、程序和保存的 MMC 控制台的快捷方式及“控制面板”项。作为另一组（例如“Users”或“Power Users”组）的成员登录到计算机时，可以以管理员的身份运行。

可以使用 runas 命令来启动任何程序、MMC 控制器或“控制面板”项。只要提供适当的用户帐户和密码信息，用户帐户就具有登录到计算机的能力，并且程序、MMC 控制台、“控制面板”项在系统中及对该用户帐户均可用。

runas 命令允许您管理其他域的服务器（运行工具的计算机和要管理的服务器在不同的域中）。

如果尝试使用 runas 从网络位置启动程序、MMC 控制台或“控制面板”项，可能会因为用来连接网络共享的凭据与用来启动程序的凭据不同而失败。后者的凭据可能无法访问同一网络共享。

有些项，例如“打印机”文件夹和桌面项，间接由 Windows 2000 打开，而不能使用 runas 命令启动。

如果 runas 命令失败，则可能是没有运行 RunAs 服务或使用的用户帐户无效。要检查 RunAs 服务的状态，请在“计算机管理”中单击“服务和应用程序”，然后单击“服务”。要测试用户帐户，请尝试使用该帐户登录合适的域。

#### 范例

要在本地计算机上以管理员身份启动 Windows 2000 命令提示行实例，请键入：

    runas /user:localmachinename\administrator cmd

系统提示时，键入管理员密码。
要使用名为 `companydomain\domainadmin` 的域管理员帐户启动“计算机管理”管理单元实例，请键入：

    runas /user:companydomain\domainadmin "mmc %windir%\system32\compmgmt.msc"

当提示时，键入帐户密码。
要使用名为 domain.microsoft.com 的域中的域管理员帐户 user 启动“记事本”实例，请键入：

    runas /user:user@domain.microsoft.com "notepad my_file.txt"

当提示时，键入帐户密码。
要启动命令提示符行窗口、保存的 MMC 控制台、控制面板项或管理其他地点服务器的程序的一个实例，请键入：

    runas /netonly /user:domain\username "command"

`domain\username` 必须是有足够权限管理服务器的用户。当提示时，键入帐户密码。

### Route

在本地 IP 路由表中显示和修改条目。使用不带参数的 route 可以显示帮助。
#### 语法

    route [-f] [-p] [Command [Destination] [mask Netmask] [Gateway] [metric Metric]] [if Interface]]

#### 参数

##### -f

清除所有不是主路由（网掩码为 255.255.255.255 的路由）、环回网络路由（目标为 127.0.0.0，网掩码为 255.255.255.0 的路由）或多播路由（目标为 224.0.0.0，网掩码为 240.0.0.0 的路由）的条目的路由表。如果它与命令之一（例如 add、change 或 delete）结合使用，表会在运行命令之前清除。

##### -p

与 add 命令共同使用时，指定路由被添加到注册表并在启动 TCP/IP 协议的时候初始化 IP 路由表。默认情况下，启动 TCP/IP 协议时不会保存添加的路由。与 print 命令一起使用时，则显示永久路由列表。所有其它的命令都忽略此参数。永久路由存储在注册表中的位置是 

    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\PersistentRoutes。

##### Command

指定要运行的命令。下表列出了有效的命令。 命令 目的

    add 添加路由
    change 更改现存路由
    delete 删除路由
    print 打印路由
    Destination

指定路由的网络目标地址。目标地址可以是一个 IP 网络地址（其中网络地址的主机地址位设置为 0），对于主机路由是 IP 地址，对于默认路由是 0.0.0.0。

##### mask subnetmask

指定与网络目标地址相关联的网掩码（又称之为子网掩码）。子网掩码对于 IP 网络地址可以是一适当的子网掩码，对于主机路由是 255.255.255.255 ，对于默认路由是 0.0.0.0。如果忽略，则使用子网掩码 255.255.255.255。定义路由时由于目标地址和子网掩码之间的关系，目标地址不能比它对应的子网掩码更为详细。换句话说，如果子网掩码的一位是 0，则目标地址中的对应位就不能设置为 1。

##### Gateway

指定超过由网络目标和子网掩码定义的可达到的地址集的前一个或下一个跃点 IP 地址。对于本地连接的子网路由，网关地址是分配给连接子网接口的 IP 地址。对于要经过一个或多个路由器才可用到的远程路由，网关地址是一个分配给相邻路由器的、可直接达到的 IP 地址。

##### metric Metric

为路由指定所需跃点数的整数值（范围是 1 ~ 9999），它用来在路由表里的多个路由中选择与转发包中的目标地址最为匹配的路由。所选的路由具有最少的跃点数。跃点数能够反映跃点的数量、路径的速度、路径可靠性、路径吞吐量以及管理属性。

##### if Interface

指定目标可以到达的接口的接口索引。使用 route print 命令可以显示接口及其对应接口索引的列表。对于接口索引可以使用十进制或十六进制的值。对于十六进制值，要在十六进制数的前面加上 0x。忽略 if 参数时，接口由网关地址确定。

##### /?

在命令提示符显示帮助。

#### 注释

路由表中 跃点数 一列的值较大是由于允许 `TCP/IP` 根据每个 `LAN`接口的 `IP` 地址、子网掩码和默认网关的配置自动确定路由表中路由的跃点数造成的。默认启动的自动确定接口跃点数确定了每个接口的速度，调整了每个接口的路由跃点数，因此最快接口所创建的路由具有最低的跃点数。要删除大跃点数，请在每个 `LAN` 连接的 `TCP/IP` 协议的高级属性中禁用自动确定接口跃点数。

如果在 `systemroot\System32\Drivers\Etc` 文件夹的本地网络文件中存在适当的条目，名称可以用于 `Destination`。只要名称可以通过“域名系统” `(DNS)` 查询这样的标准主机名解析技术分解为 `IP` 地址，就可以将其用于 `Gateway`，`DNS` 查询使用存储在 `systemroot\System32\Drivers\Etc` 文件夹下的本地主机文件和 `NetBIOS` 名称解析。
如果是 `print` 或 `delete` 命令，可以忽略 `Gateway` 参数，使用通配符来表示目标和网关。`Destination` 的值可以是由星号 `(*)` 指定的通配符。如果指定目标含有一个星号 `(*)`或问号 `(?)`，它被看作是通配符，只打印或删除匹配的目标路由。星号代表任意一字符序列，问号代表任一字符。例如， `10.*.1`, `192.168.*`、 `127.*` 和 `*224*` 都是星号通配符的有效使用。
使用了无效的目标和子网掩码（网掩码）值的组合，会显示`“Route:bad gateway address netmask”`错误消息。目标中有一位或多位设置为 1，而其在子网掩码中的对应位设置为 0 时会发生这个错误。可以通过二进制表示法表示目标和子网掩码来检查这种情况。以二进制表示的子网掩码包括表示目标网络地址部分的一连串的 1 和表示目标主机地址部分的一连串的 0 两个部分。查看目标以确定目标的主机地址部分（由子网掩码所定义）是否有些位设置成了 1。
只有 Windows NT 4.0、Windows 2000、Windows Millennium Edition 和 Windows XP 的 `route` 命令支持 `-p` 参数。Windows 95 或 Windows 98 的 `route` 命令不支持该参数。
只有当网际协议 `(TCP/IP)` 协议在 网络连接中安装为网络适配器属性的组件时，该命令才可用。

#### 范例

要显示 IP 路由表的完整内容，请键入：

    route print

要显示 IP 路由表中以 10. 开始的路由，请键入：

    route print 10.*

要添加默认网关地址为 192.168.12.1 的默认路由，请键入：

    route add 0.0.0.0 mask 0.0.0.0 192.168.12.1

要添加目标为 10.41.0.0，子网掩码为 255.255.0.0，下一个跃点地址为 10.27.0.1 的路由，请键入：

    route add 10.41.0.0 mask 255.255.0.0 10.27.0.1

要添加目标为 10.41.0.0，子网掩码为 255.255.0.0，下一个跃点地址为 10.27.0.1 的永久路由，请键入：

    route -p add 10.41.0.0 mask 255.255.0.0 10.27.0.1

要添加目标为 10.41.0.0，子网掩码为 255.255.0.0，下一个跃点地址为 10.27.0.1，跃点数为 7 的路由，请键入：

    route add 10.41.0.0 mask 255.255.0.0 10.27.0.1 metric 7

要添加目标为 10.41.0.0，子网掩码为 255.255.0.0，下一个跃点地址为 10.27.0.1，接口索引为 0x3 的路由，请键入：

    route add 10.41.0.0 mask 255.255.0.0 10.27.0.1 if 0x3

要删除目标为 10.41.0.0，子网掩码为 255.255.0.0 的路由，请键入：

    route delete 10.41.0.0 mask 255.255.0.0

要删除 IP 路由表中以 10. 开始的所有路由，请键入：

    route delete 10.*

要将目标为 10.41.0.0，子网掩码为 255.255.0.0 的路由的下一个跃点地址由 10.27.0.1 更改为 10.27.0.25，请键入：

    route change 10.41.0.0 mask 255.255.0.0 10.27.0.25

怎样在windowsserver的cmd下更改ip地址-> Windows 2k/2003 Server

在命令行下更改ip地址

Windows2000是现在比较流行的操作系统，它的功能是很强大的，它甚至可以象Unix一样在命令行下做很多的工作。下面一种在命令行下更改ip地
址的方法，现介绍给大家（括号里是一些注释，黑体字是人工录入的）：

    C:\>ipconfig (首先用ipconfig这个命令看一下更改之前的ip地址)

    Windows 2000 IP Configuration
    Ethernet adapter 本地连接:
    Connection-specific DNS Suffix . :
    IP Address. . . . . . . . . . . . : 10.1.1.94 （本地连接更改之前的ip）
    Subnet Mask . . . . . . . . . . . : 255.255.255.0
    Default Gateway . . . . . . . . . : 10.1.1.254
    
    C:\>netsh （进入设置模式）
    netsh>interface
    interface>ip
    interface ip>set address "本地连接" static 10.1.1.111 255.255.255.0 10.1.1.254
    interface ip>exit
    
上文中的set命令具体解释如下:
    
    set address - 设置指定的接口的 IP 地址和默认网关。
    set dns - 设置 DNS 服务器模式和地址。
    set wins - 设置 WINS 服务器模式和地址。
    
    C:\>ipconfig （更改后再用ipconfig命令看一下,确认一下是否更改成功）
    
    Windows 2000 IP Configuration
    Ethernet adapter 本地连接:
    Connection-specific DNS Suffix . :
    IP Address. . . . . . . . . . . . : 10.1.1.111
    Subnet Mask . . . . . . . . . . . : 255.255.255.0
    Default Gateway . . . . . . . . . : 10.1.1.254
命令一览

    .. - 移到上一层上下文级。
    ? - 显示命令列表。
    aaaa - 更改到 `aaaa' 上下文。
    abort - 丢弃在脱机模式下所做的更改。
    add - 将一个配置项添加到项目列表中。
    alias - 添加一个别名
    bye - 退出程序。
    commit - 提交在脱机模式中所做的更改。
    delete - 在项目列表上删除一个配置项目。
    dhcp - 更改到 `dhcp' 上下文。
    dump - 显示一个配置脚本。
    exec - 运行一个脚本文件。
    exit - 退出程序。
    help - 显示命令列表。
    interface - 更改到 `interface' 上下文。
    offline - 将当前模式设置成脱机。
    online - 将当前模式设置成联机。
    popd - 从堆栈上打开一个上下文。
    pushd - 将当前上下文放推入堆栈。
    quit - 退出程序。
    ras - 更改到 `ras' 上下文。
    routing - 更改到 `routing' 上下文。
    set - 更新配置设置。
    show - 显示信息
    unalias - 删除一个别名。
    wins - 更改到 `wins' 上下文。

### route 的命令

    routing ip add/delete/set/show interface 在指定接口上添加、删除、配置或显示常规 IP 路由设置。
    routing ip add/delete/set/show filter 在指定接口上添加、删除、配置或显示 IP 数据包筛选器。
    routing ip add/delete/show boundary 在指定接口上添加、删除或显示多播边界设置。
    routing ip add/set ipiptunnel 添加或配置 IP 中的 IP 接口。
    routing ip add/delete/set/show rtmroute 添加、配置或显示不持续的路由表管理器路由。
    routing ip add/delete/set/show persistentroute 添加、删除、配置或显示持续路由。
    routing ip add/delete/set/show preferenceforprotocol 添加、删除、配置或显示路由协议的优先级。
    routing ip add/delete/set/show scope 添加、删除或显示多播作用域。
    routing ip set/show loglevel 配置或显示全局 IP 记录等级。
    routing ip show helper 显示 IP 的所有 Netsh 实用程序子环境。
    routing ip show protocol 显示所有正在运行的 IP 路由协议。
    routing ip show mfe 显示多播转发项。
    routing ip show mfestats 显示多播转发项统计。

nterface 在指定接口上添加、删除、配置或显示 OSPF。

    routing ip ospf add/delete/set/show area 添加、删除、配置或显示 OSPF 区域。
    routing ip ospf add/delete/show range 在指定的 OSPF 区域上添加、删除、配置或显示范围。
    routing ip ospf add/delete/set/show virtif 添加、删除、配置或显示 OSPF 虚拟接口。
    routing ip ospf add/delete/show neighbor 添加、删除、配置或显示 OSPF 邻居。
    routing ip ospf add/delete/show protofilter 添加、删除、配置或显示 OSPF 外部路由的路由信息源。
    routing ip ospf add/delete/show routefilter 添加、删除、配置或显示 OSPF 外部路由的路由筛选。
    routing ip ospf show areastats 显示 OSPF 区域统计。
    routing ip ospf show lsdb 显示 OSPF 链接状态数据库。
    routing ip ospf show virtifstats 显示 OSPF 虚拟链接统计。
    routing ip relay set global 配置“DHCP 中继代理程序”的全局设置。
    routing ip relay add/delete/set interface 在指定接口上添加、删除或配置“DHCP 中继代理程序”设置。
    routing ip relay add/delete dhcpserver 在 DHCP 服务器地址列表中添加或删除 DHCP 服务器的 IP 地址。
    routing ip relay show ifbinding 显示接口的 IP 地址绑定。
    routing ip relay show ifconfig 显示每个接口的“DHCP 中继代理程序”配置。
    routing ip relay show ifstats 显示每个接口的 DHCP 统计。
    routing ip rip set/show global 配置 IP 的 RIP 全局设置。
    routing ip rip add/delete/set/show interface 在指定接口上添加或配置 IP 的 RIP 设置。
    routing ip rip add/delete peerfilter 添加或删除 RIP 对等筛选器。
    routing ip rip add/delete acceptfilter 在接受的路由列表中添加或删除 RIP 路由筛选器。
    routing ip rip add/delete announcefilter 在公布的路由列表中添加或删除 RIP 路由筛选器。
    routing ip rip add/delete/show neighbor 添加或删除 RIP 邻居。
    routing ip rip set/show flags 在指定接口上配置 IP RIP 高级设置。
    routing ip rip show globalstats 显示全局 RIP 参数。
    routing ip rip show ifbinding 显示接口的 IP 地址绑定。
    routing ip rip show ifstats 显示每个接口的 RIP 统计。

#### IPX netsh 路由命令

    routing ipx add/set staticroute 在 IPX 路由表中添加或配置静态 IPX 路由。
    routing ipx add/set staticservice 在 SAP 服务表中添加或配置静态 SAP 服务。
    routing ipx add/set filter 在指定的接口上添加或配置 IPX 数据包筛选器。
    routing ipx add/set interface 在请求拨号接口上启用 IPX 路由，或在指定的接口上配置 IPX 设置。
    routing ipx set global 配置全局 IPX 路由设置。
    routing ipx rip add/set filter 添加和配置 RIP 路由筛选器。
    routing ipx rip set global 配置全局 IPX 的 RIP 设置。
    routing ipx rip set interface 在指定接口上配置 IPX 的 RIP 设置。
    routing ipx sap add/set filter 添加或配置 SAP 服务筛选器。
    routing ipx sap set global 配置全局 IPX 的 SAP 设置。
    routing ipx sap set interface 在指定接口上配置 IPX 的 SAP 设置。
    routing ipx netbios add nbname 将静态 NETBIOS 名称添加到 IPX NetBIOS 名称表中。
    routing ipx netbios set interface 在指定接口上配置基于 IPX 的 NetBIOS 设置。

### WINS NetSh 命令

    list 列出所有可用的 WINS 命令。
    dump 将 WINS 服务器配置转储到命令输出。
    add name 在服务器上注册名称。详细信息，请输入 add name /?
    add partner 向服务器添加复制伙伴。详细信息，请输入 add partner /?
    add pngserver 添加当前服务器的 Persona Non Grata 服务器列表。详细信息，请输入 add pngserver /?
    check database 检查数据库的一致性。详细信息，请输入 check database /?
    check name 检查一组 WINS 服务器的名称记录列表。详细信息，请输入 check name /?
    check version 检查版本号的一致性。详细信息，请输入 check version /?
    delete name 从服务器数据库中删除已注册的名称。详细信息，请输入 delete name /?
    delete partner 从复制伙伴列表中删除复制伙伴。详细信息，请输入 delete partner /?
    delete records 从服务器删除或逻辑删除所有记录或一组记录。详细信息，请输入 delete records /?
    delete owners 删除所有者列表及其记录。详细信息，请输入 delete owners /?
    delete pngserver 从列表中删除所有的或选定的 Persona Non Grata 服务器。详细信息，请输入 delete pngserver /?
    init backup 备份 WINS 数据库。详细信息，请输入 init backup /?
    init import 从 Lmhosts 文件导入数据。详细信息，请输入 init import /?
    init pull 启动“拉”触发器，并发送给另一台 WINS 服务器。详细信息，请输入 init pull /?
    init pullrange 开始另一台 WINS 服务器的一组记录，并读取该记录。详细信息，请输入 init pullrange /?
    init push 启动“推”触发器，并发送给另一台 WINS 服务器。详细信息，请输入 init push /?
    init replicate 用复制伙伴复制数据库。详细信息，请输入 init replicate /?
    init restore 从文件还原数据库。详细信息，请输入 init restore /?
    init scavenge 清除服务器的 WINS 数据库。详细信息，请输入 init scavenge /?
    init search 搜索服务器的 WINS 数据库。详细信息，请输入 init search /?
    reset statistics 重置服务器的统计信息。详细信息，请输入 reset statistics /?
    set autopartnerconfig 设置服务器的自动复制伙伴配置信息。详细信息，请输入 set autopartnerconfig /?
    set backuppath 设置服务器的备份参数。详细信息，请输入 set backuppath /?
    set burstparam 设置服务器的突发处理参数。详细信息，请输入 set autopartnerconfig /?
    set logparam 设置数据库和事件日志记录选项。详细信息，请输入 set logparam /?
    set migrateflag 设置服务器的迁移标志。详细信息，请输入 set migrateflag /?
    set namerecord 设置服务器的间隔和超时值。详细信息，请输入 set namerecord /?
    set periodicdbchecking 设置服务器的定期数据库检查参数。详细信息，请输入 set periodicdbchecking /?
    set pullpartnerconfig 设置指定的“拉”伙伴的配置参数。详细信息，请输入 set pullpartnerconfig /?
    set pushpartnerconfig 设置指定的“推”伙伴的配置参数。详细信息，请输入 set pushpartnerconfig /?
    set pullparam 设置服务器的默认“拉”参数。详细信息，请输入 set pullparam /?
    set pushparam 设置服务器的默认“推”参数。详细信息，请输入 set pushparam /?
    set replicateflag 设置服务器的复制标志。详细信息，请输入 set replicateflag /?
    set startversion 设置数据库的开始版本 ID。详细信息，请输入 set startversion /?
    show browser 显示所有活动域主浏览器的 [1Bh] 记录。详细信息，请输入 show browser /?
    show database 显示指定服务器的数据库和记录。详细信息，请输入 show database /?
    show info 显示配置信息。详细信息，请输入 show info /?
    show name 显示服务器中特定记录的详细信息。详细信息，请输入 show name /?
    show partner 显示服务器的“拉”或“推”（或“推拉”）伙伴。详细信息，请输入 show partner /?
    show partnerproperties 显示默认伙伴配置。详细信息，请输入 show partnerproperties /?
    show pullpartnerconfig 显示“拉”伙伴的配置信息。详细信息，请输入 show pullpartnerconfig /?
    show pushpartnerconfig 显示“推”伙伴的配置信息。详细信息，请输入 show pushpartnerconfig /?
    show reccount 显示指定服务器所拥有的记录数量。详细信息，请输入 show reccount /?
    show recbyversion 显示指定服务器所拥有的记录。详细信息，请输入 show recbyversion /?
    show server 显示当前选定的服务器。详细信息，请输入 show server /?
    show statistics 显示 WINS 服务器的统计信息。详细信息，请输入 show statistics /?
    show version 显示 WINS 服务器的当前版本计数器值。详细信息，请输入 show version /?
    show versionmap 显示所有者 ID 到“最大版本数”的映射。详细信息，请输入 show versionmap /?

### Interface 命令
    interface set/show interface 启用、禁用、连接、断开连接以及显示请求拨号接口的配置。
    interface set/show credentials 在请求拨号接口上配置或显示用户名、密码和域名。

### Win2000命令全集

    accwiz.exe > Accessibility Wizard for walking you through setting up your machine for your mobility needs. 辅助工具向导
    acsetups.exe > ACS setup DCOM server executable
    actmovie.exe > Direct Show setup tool 直接显示安装工具
    append.exe > Allows programs to open data in specified directories as if they were in the current directory. 允许程序打开制定目录中的数据
    arp.exe > NETWORK Display and modify IP - Hardware addresses 显示和更 改计算机的IP与硬件物理地址的对应列表
    at.exe > AT is a scheduling utility also included with UNIX 计划运行任务
    atmadm.exe > Displays statistics for ATM call manager. ATM调用管理器统计
    attrib.exe > Display and modify attributes for files and folders 显示和更改文件和文件夹属性
    autochk.exe > Used to check and repair Windows File Systems 检测修复文件系统
    autoconv.exe > Automates the file system conversion during reboots 在启动过程中自动转化系统
    autofmt.exe > Automates the file format process during reboots 在启动过程中格式化进程
    autolfn.exe > Used for formatting long file names 使用长文件名格式
    bootok.exe > Boot acceptance application for registry
    bootvrfy.exe > Bootvrfy.exe, a program included in Windows 2000 that notifies the system that startup was successful. Bootvrfy.exe can be run on a local or remote computer. 通报启动成功
    cacls.exe > Displays or modifies access control lists (ACLs) of files. 显示和编辑ACL
    calc.exe > Windows Calculators 计算器
    cdplayer.exe > Windows CD Player CD播放器
    change.exe > Change { User | Port | Logon } 与终端服务器相关的查询
    charmap.exe > Character Map 字符映射表
    chglogon.exe > Same as using "Change Logon" 启动或停用会话记录
    chgport.exe > Same as using "Change Port" 改变端口（终端服务）
    chgusr.exe > Same as using "Change User" 改变用户（终端服务）
    chkdsk.exe > Check the hard disk for errors similar to Scandisk 3 Stages must specify a Drive Letter 磁盘检测程序
    chkntfs.exe > Same as using chkdsk but for NTFS NTFS磁盘检测程序
    cidaemon.exe > Component of Ci Filer Service 组成Ci文档服务
    cipher.exe > Displays or alters the encryption of directories [files] on NTFS partitions. 在NTFS上显示或改变加密的文件或目录
    cisvc.exe > Content Index -- It's the content indexing service for I 索引内容
    ckcnv.exe > Cookie Convertor 变换Cookie
    cleanmgr.exe > Disk Cleanup, popular with Windows 98 磁盘清理
    cliconfg.exe > SQL Server Client Network Utility SQL客户网络工具
    clipbrd.exe > Clipboard viewer for Local will allow you to connect to other clipboards 剪贴簿查看器
    clipsrv.exe > Start the clipboard Server 运行Clipboard服务
    clspack.exe > CLSPACK used to create a file listing of system packages 建立系统文件列表清单
    cluster.exe > Display a cluster in a domain 显示域的集群
    _cmd_.exe > Famous command prompt 没什么好说的！
    cmdl32.exe > Connection Manager Auto-Download 自动下载连接管理
    cmmgr32.exe > Connection Manager 连接管理器
    cmmon32.exe > Connection Manager Monitor 连接管理器监视
    cmstp.exe > Connection Manager Profile Manager 连接管理器配置文件安装程序
    comclust.exe > about cluster server 集群
    comp.exe > ComClust Add, Remove, or Join a cluster. 比较两个文件和文件集的内容＊
    compact.exe > Displays or alters the compression of files on NTFS partitions. 显示或改变NTFS分区上文件的压缩状态
    conime.exe > Console IME IME控制台
    control.exe > Starts the control panel 控制面板
    convert.exe > Convert File System to NTFS 转换文件系统到NTFS
    convlog.exe > Converts MS IIS log files 转换IIS日志文件格式到NCSA格式
    cprofile.exe > Copy profiles 转换显示模式
    cscript.exe > MS Windows Scripts Host Version 5.1 较本宿主版本
    csrss.exe > Client Server Runtime Process 客户服务器Runtime进程
    csvde.exe > Comma Separated Variable Import/Export Utility 日至格式转换程序
    dbgtrace.exe > 和Terminal Server相关
    dcomcnfg.exe > Display the current DCOM configuration. DCOM配置属性
    dcphelp.exe > ?
    dcpromo.exe > Promote a domain controller to ADSI AD安装向导
    ddeshare.exe > Display DDE shares on local or remote computer DDE共享
    ddmprxy.exe >
    debug.exe > Runs Debug, a program testing and editing tool. 就是DEBUG啦！
    dfrgfat.exe > Defrag FAT file system FAT分区磁盘碎片整理程序
    dfrgntfs.exe > Defrag NTFS file system NTFS分区磁盘碎片整理程序
    dfs_cmd_.exe > configures a Dfs tree 配置一个DFS树
    dfsinit.exe > Distributed File System Initialization 分布式文件系统初始化
    dfssvc.exe > Distributed File System Server
     
    routing ip show boundarystats 显示 IP 多播边界。
    routing ip show rtmdestinations 显示路由表管理器路由表中的目标。
    routing ip show rtmroutes 显示路由表管理器路由表中的路由。
    routing ip nat set/show global 配置或显示全局网络地址转换 (NAT) 设置。
    routing ip nat add/delete/set/show interface 添加、删除、配置或显示指定接口的 NAT 设置。
    routing ip nat add/delete addressrange 在 NAT 接口公用地址池中添加或删除一个地址范围。
    routing ip nat add/delete addressmapping 添加或删除 NAT 地址映射。
    routing ip nat add/delete portmapping 添加或删除 NAT 端口映射。
    routing ip autodhcp set/show global 配置或显示全局 DHCP 分配器参数。
    routing ip autodhcp set/show interface 配置或显示指定接口的 DHCP 分配器设置。
    routing ip autodhcp add/delete exclusion 在 DHCP 分配器地址范围中添加或删除一个排除范围。
    routing ip dnsproxy set/show global 配置或显示全局 DNS 代理参数。
    routing ip dnsproxy set/show interface 配置或显示指定接口的 DNS 代理参数。
    routing ip igmp set/show global 配置或显示 IGMP 全局设置。
    routing ip igmp add/delete/set/show interface 在指定接口上添加、删除、配置或显示 IGMP。
    routing ip igmp add/delete staticgroup 添加或删除指定接口的静态多播组。
    routing ip igmp show grouptable 显示 IGMP 主机组表。
    routing ip igmp show ifstats 显示每个接口的 IGMP 统计。
    routing ip igmp show iftable 显示每个接口的 IGMP 主机组。
    routing ip igmp show proxygrouptable 显示 IGMP 代理接口的 IGMP 组表。
    routing ip igmp show rasgrouptable 显示远程访问服务器所使用的 Internet 接口的组表。
    routing ip ospf set/show global 配置或显示全局 OSPF 设置。
    routing ip ospf add/delete/set/show i

### DOS命令

    dir 列文件名 deltree 删除目录树 cls 清屏 cd 改变当前目录
    copy 拷贝文件 diskcopy 复制磁盘 del 删除文件 format 格式化磁盘
    edit 文本编辑 mem 查看内存状况 md 建立子目录 move 移动文件、改目录名
    more 分屏显示 type 显示文件内容 rd 删除目录
    sys 制作DOS系统盘
    ren 改变文件名 xcopy 拷贝目录与文件 chkdsk 检查磁盘 attrib 设置文件属性
    fdisk 硬盘分区 date 显示及修改曰期 label 设置卷标号 defrag 磁盘碎片整理
    msd 系统检测 path 设置搜寻目录 share 文件共享 memmaker内存优化管理
    help 帮助 restore 恢复备份文件 set 设置环境变量 time 显示及修改时间
    tree 列目录树 debug 随机调试程序 doskey 重新调用DOS命令 prempt 设置提示符 undelete恢复被删的文件 scandisk检测、修理磁盘
    不常用DOS命令
    diskcomp磁盘比较 append 设置非执行文件路径
    expand 还原DOS文件 fasthelp快速显示帮助信息
    fc 文件比较 interink启动服务器
    setver 设置版本 intersvr启动客户机
    subst 路径替换 qbasic Basic集成环境
    vsafe 防病毒 unformat恢复已格式化的磁盘
    ver 显示DOS版本号 smartdrv设置磁盘加速器
    vol 显示磁盘卷标号 lh 将程序装入高端内存
    ctty 改变控制设备 emm386 扩展内存管理

### 常用命令具体介绍:

#### dir

显示目录文件和子目录列表，呵呵，这个当然是人人要知道的。
可以使用通配符（? 和 *），？表通配一个字符，*表通配任意字符

##### *.后缀

指定要查看后缀的文件。 上面其实也可以为“ . 后缀”,例如dir *.exe 等于dir .exe

##### /p
每次显示一个列表屏幕。要查看下一屏，请按键盘上的任意键。

##### /w

以宽格式显示列表，在每一行上最多显示 5 个文件名或目录名。

##### /s

列出指定目录及所有子目录中出现的每个指定的文件名。比win环境下的查找快多了

    dir *.* -> a.txt 把当前目录文件列表写入a.txt
    dir *.* /s -> a.txt 把当前目录文件列表写入a.txt，包括子目录下文件。

#### attrib

显示、设置或删除指派给文件或目录的只读、存档、系统以及隐藏属性。如果在不含参数的情况下使用，则 attrib 会显示当前目录中所有文件的属性。

##### +r

设置只读属性。

##### -r

清除只读属性。

##### +a

设置存档文件属性。

##### -a

清除存档文件属性。

##### +s

设置系统属性。

##### -s

清除系统属性。

##### +h

设置隐藏属性。

##### -h

清除隐藏属性。

#### cls

清除显示在命令提示符窗口中的所有信息，并返回空窗口，即“清屏”

#### exit
 
 退出当前命令解释程序并返回到系统。

#### format

格式化

##### /q

执行快速格式化。删除以前已格式化卷的文件表和根目录，但不在扇区之间扫描损坏区域。使用 /q 命令行选项应该仅格式化以前已格式化的完好的卷。

#### Ipconfig

显示所有当前的 TCP/IP 网络配置值、刷新动态主机配置协议 (DHCP) 和域名系统 (DNS) 设置。使用不带参数的 ipconfig 可以显示所有适配器的 IP 地址、子网掩码、默认网关。

##### /all

显示所有适配器的完整 TCP/IP 配置信息。
ipconfig 等价于 winipcfg，后者在ME、98 和 95 上可用。尽管 Windows XP 没有提供象 winipcfg 命令一样的图形化界面，但可以使用“网络连接”查看和更新 IP 地址。要做到这一点，请打开网络连接，右键单击某一网络连接，单击“状态”，然后单击“支持”选项卡。
该命令最适用于配置为自动获取 IP 地址的计算机。它使用户可以确定哪些 TCP/IP 配置值是由 DHCP、自动专用 IP 地址 (APIPA) 和其他配置配置的。
#### md

创建目录或子目录

#### move

将一个或多个文件从一个目录移动到指定的目录。

#### nbtstat

显示本地计算机和远程计算机的基于 TCP/IP (NetBT) 协议的 NetBIOS 统计资料、NetBIOS 名称表和 NetBIOS 名称缓存。Nbtstat 可以刷新 NetBIOS 名称缓存和注册的 Windows Internet 名称服务 (WINS) 名称。使用不带参数的 nbtstat 显示帮助。Nbtstat 命令行参数区分大小写。

##### -a remotename

显示远程计算机的 NetBIOS 名称表，其中，RemoteName 是远程计算机的 NetBIOS 计算机名称。

##### -A IPAddress

显示远程计算机的 NetBIOS 名称表，其名称由远程计算机的 IP 地址指定（以小数点分隔）。

#### netstat

显示活动的 TCP 连接、计算机侦听的端口、以太网统计信息、IP 路由表、IPv4 统计信息（对于 IP、ICMP、TCP 和 UDP 协议）以及 IPv6 统计信息（对于 IPv6、ICMPv6、通过 IPv6 的 TCP 以及通过 IPv6 的 UDP 协议）。使用时如果不带参数，netstat 显示活动的 TCP 连接。

##### -a

显示所有活动的 TCP 连接以及计算机侦听的 TCP 和 UDP 端口。

#### ping

通过发送“网际消息控制协议 (ICMP)”回响请求消息来验证与另一台 TCP/IP 计算机的 IP 级连接。回响应答消息的接收情况将和往返过程的次数一起显示出来。Ping 是用于检测网络连接性、可到达性和名称解析的疑难问题的主要 TCP/IP 命令。如果不带参数，ping 将显示帮助。名称和Ip地址解析是它的最简单应用也是用的最多的。

##### -t

指定在中断前 ping 可以持续发送回响请求信息到目的地。要中断并显示统计信息，请按 CTRL-BREAK。要中断并退出 ping，请按 CTRL-C。

##### -lSize

指定发送的回响请求消息中“数据”字段的长度（以字节表示）。默认值为 32。size 的最大值是 65,527。

#### rename (ren)

更改文件的名称。

例如 
    
    ren *.abc *.cba

#### set

显示、设置或删除环境变量。如果没有任何参数，set 命令将显示当前环境设置。

#### shutdown

允许您关闭或重新启动本地或远程计算机。如果没有使用参数，shutdown 将注销当前用户。

##### -m ComputerName

指定要关闭的计算机。

##### -t xx

将用于系统关闭的定时器设置为 xx 秒。默认值是 20 秒。

##### -l

注销当前用户，这是默认设置。-m ComputerName 优先。

##### -s

关闭本地计算机。

##### -r

关闭之后重新启动。

##### -a

中止关闭。除了 -l 和 ComputerName 外，系统将忽略其它参数。在超时期间，您只可以使用 -a。

##### System File Checker (sfc)

win下才有，在重新启动计算机后扫描和验证所有受保护的系统文件。

##### /scannow

立即扫描所有受保护的系统文件。
##### /scanonce

一次扫描所有受保护的系统文件。

##### /purgecache

立即清除“Windows 文件保护”文件高速缓存，并扫描所有受保护的系统文件。

##### /cachesize=x

设置“Windows 文件保护”文件高速缓存的大小，以 MB 为单位。
#### type

显示文本文件的内容。使用 type 命令查看文本文件或者是bat文件而不修改文件

#### tree

图像化显示路径或驱动器中磁盘的目录结构。

#### xcopy

复制文件和目录，包括子目录。

##### /s

复制非空的目录和子目录。如果省略 /s，xcopy 将在一个目录中工作。

##### /e

复制所有子目录，包括空目录。
#### copy

将一个或多个文件从一个位置复制到其他位置

#### del

删除指定文件。

#### arp

显示和修改“地址解析协议”(ARP) 所使用的到以太网的 IP 或令牌环物理地址翻译表。该命令只有在安装了 TCP/IP 协议之后才可用。

    arp -a [inet_addr] [-N [if_addr]
    arp -d inet_addr [if_addr]
    arp -s inet_addr ether_addr [if_addr]

##### 参数

###### -a

通过询问 TCP/IP 显示当前 ARP 项。如果指定了 inet_addr，则只显示指定计算机的 IP 和物理地址。

###### -g

与 -a 相同。

###### inet_addr

以加点的十进制标记指定 IP 地址。

###### -N

显示由 if_addr 指定的网络界面 ARP 项。

###### if_addr

指定需要修改其地址转换表接口的 IP 地址（如果有的话）。如果不存在，将使用第一个可适用的接口。

###### -d

删除由 inet_addr 指定的项。

###### -s

在 ARP 缓存中添加项，将 IP 地址 inet_addr 和物理地址 ether_addr 关联。物理地址由以连字符分隔的6 个十六进制字节给定。使用带点的十进制标记指定 IP 地址。项是永久性的，即在超时到期后项自动从缓存删除。

###### ether_addr

指定物理地址。

#### Finger

在运行 Finger 服务的指定系统上显示有关用户的信息。根据远程系统输出不同的变量。该命令只有在安装了 TCP/IP 协议之后才可用。

    finger [-l] [user]@computer[...]

##### 参数

###### -l

以长列表格式显示信息。

###### user

指定要获得相关信息的用户。省略用户参数以显示指定计算机上所有用户的信息：

###### @computer

#### ftp
将文件传送到正在运行 FTP 服务的远程计算机或从正在运行 FTP 服务的远程计算机传送文件（有时称作 daemon）。Ftp可以交互使用。单击“相关主题”列表中的“ftp 命令”以获得可用的“ftp”子命令描述。该命令只有在安装了 TCP/IP 协议之后才可用。Ftp 是一种服务，一旦启动，将创建在其中可以使用ftp 命令的子环境，通过键入 quit 子命令可以从子环境返回到 Windows 2000 命令提示符。当 ftp 子环境运行时，它由 ftp 命令提示符代表。

    ftp [-v] [-n] [-i] [-d] [-g] [-s:filename] [-a] [-w:windowsize] [computer]

##### 参数

###### -v

禁止显示远程服务器响应。

###### -n

禁止自动登录到初始连接。

###### -i

多个文件传送时关闭交互提示。

###### -d

启用调试、显示在客户端和服务器之间传递的所有 ftp 命令。

###### -g

禁用文件名组，它允许在本地文件和路径名中使用通配符字符（* 和 ?）。（请参阅联机“命令参考”中的 glob 命令。）

###### -s: filename

指定包含 ftp 命令的文本文件；当 ftp 启动后，这些命令将自动运行。该参数中不允许有空格。使用该开关而不是重定向(> )。

###### -a

在捆绑数据连接时使用任何本地接口。

###### -w:windowsize

替代默认大小为 4096 的传送缓冲区。

###### computer

指定要连接到远程计算机的计算机名或 IP 地址。如果指定，计算机必须是行的最后一个参数。

#### nbtstat

该诊断命令使用 NBT（TCP/IP 上的 NetBIOS）显示协议统计和当前 TCP/IP 连接。该命令只有在安装了TCP/IP 协议之后才可用。

    nbtstat [-a remotename] [-A IP address] [-c] [-n] [-R] [-r] [-S] [-s] [interval]

##### 参数

###### -a remotename

使用远程计算机的名称列出其名称表。

###### -A IP address

使用远程计算机的 IP 地址并列出名称表。

###### -c

给定每个名称的 IP 地址并列出 NetBIOS 名称缓存的内容。

###### -n

列出本地 NetBIOS 名称。“已注册”表明该名称已被广播 (Bnode) 或者 WINS（其他节点类型）注册。

###### -R

清除 NetBIOS 名称缓存中的所有名称后，重新装入 Lmhosts 文件。

###### -r

列出 Windows 网络名称解析的名称解析统计。在配置使用 WINS 的 Windows 2000 计算机上，此选项返回要通过广播或WINS 来解析和注册的名称数。

###### -S

显示客户端和服务器会话，只通过 IP 地址列出远程计算机。

###### -s

显示客户端和服务器会话。尝试将远程计算机 IP 地址转换成使用主机文件的名称。

###### interval

重新显示选中的统计，在每个显示之间暂停 interval 秒。按 CTRL+C 停止重新显示统计信息。如果省略该参数，nbtstat 打印一次当前的配置信息。

#### netstat

显示协议统计和当前的 TCP/IP 网络连接。该命令只有在安装了 TCP/IP 协议后才可以使用。

    netstat [-a] [-e] [-n] [-s] [-p protocol] [-r] [interval]

##### 参数

###### -a

显示所有连接和侦听端口。服务器连接通常不显示。

###### -e

显示以太网统计。该参数可以与 -s 选项结合使用。

###### -n

以数字格式显示地址和端口号（而不是尝试查找名称）。

###### -s

显示每个协议的统计。默认情况下，显示 TCP、UDP、ICMP 和 IP 的统计。-p 选项可以用来指定默认的子集。

###### -p protocol

显示由 protocol 指定的协议的连接；protocol 可以是 tcp 或 udp。如果与 -s 选项一同使用显示每个协议的统计，protocol 可以是 tcp、udp、icmp 或 ip。

###### -r

显示路由表的内容。

###### interval

重新显示所选的统计，在每次显示之间暂停 interval 秒。按 CTRL+B 停止重新显示统计。如果省略该参数，netstat 将打印一次当前的配置信息。

#### ping

验证与远程计算机的连接。该命令只有在安装了 TCP/IP 协议后才可以使用。
    
    ping [-t] [-a] [-n count] [-l length] [-f] [-i ttl] [-v tos] [-r count] [-s count] [-j computer-list] | [-k computer-list] [-w timeout] destination-list

##### 参数

###### -t

Ping 指定的计算机直到中断。

###### -a

将地址解析为计算机名。

###### -n count

发送 count 指定的 ECHO 数据包数。默认值为 4。

###### -l length

发送包含由 length 指定的数据量的 ECHO 数据包。默认为 32 字节；最大值是 65,527。

###### -f

在数据包中发送“不要分段”标志。数据包就不会被路由上的网关分段。

###### -i ttl

将“生存时间”字段设置为 ttl 指定的值。

###### -v tos

将“服务类型”字段设置为 tos 指定的值。

###### -r count

在“记录路由”字段中记录传出和返回数据包的路由。count 可以指定最少 1 台，最多 9 台计算机。

###### -s count

指定 count 指定的跃点数的时间戳。

###### -j computer-list

利用 computer-list 指定的计算机列表路由数据包。连续计算机可以被中间网关分隔（路由稀疏源）IP 允许的最大数量为9。

###### -k computer-list

利用 computer-list 指定的计算机列表路由数据包。连续计算机不能被中间网关分隔（路由严格源）IP 允许的最大数量为9。

###### -w timeout

指定超时间隔，单位为毫秒。

###### destination-list

指定要 ping 的远程计算机。

#### rcp

在 Windows 2000 计算机和运行远程外壳端口监控程序 rshd 的系统之间复制文件。rcp 命令是一个连接命令，从Windows 2000 计算机发出该命令时，也可以用于其他传输在两台运行 rshd 的计算机之间复制文件。rshd 端口监控程序可以在 UNIX 计算机上使用，而在Windows 2000 上不能使用，所以 Windows 2000 计算机仅可以作为发出命令的系统参与。远程计算机必须也通过运行 rshd 提供 rcp 实用程序。

    rcp [-a | -b] [-h] [-r] source1 source2 ... sourceN destination

##### 参数

###### -a

指定 ASCII 传输模式。此模式在传出文件上将回车/换行符转换为回车符，在传入文件中将换行符转换为回车/换行符。该模式为默认的传输模式。

###### -b

指定二进制图像传输模式。没有执行回车/换行符转换。

###### -h

传输 Windows 2000 计算机上标记为隐藏属性的源文件。如果没有该选项，在 rcp 命令行上指定隐藏文件的效果与文件不存在一样。

###### -r

将源的所有子目录内容递归复制到目标。source 和 destination 都必须是目录，虽然即使源不是目录，使用-r 也能够工作。但将没有递归。

###### source 和 destination

格式必须为 [computer[.user]:]filename。如果忽略了 [computer[.user]:] 部分，计算机将假定为本地计算机。如果省略了 [.user] 部分，将使用当前登录的 Windows 2000 用户名。如果使用了完全合格的计算机名，其中包含句点(.) 分隔符，则必须包含 [.user]。否则，计算机名的最后部分将解释为用户名。如果指定了多个源文件，则destination 必须是目录。

如果文件名不是以 UNIX 的正斜杠 (/) 或 Windows 2000 系统的反斜杠 (\) 打头，则假定相对于当前的工作目录。在Windows 2000 中，这是发出命令的目录。在远程系统中，这是远程用户的登录目录。句点 (.) 表示当前的目录。在远程路径中使用转义字符（\、" 或 '），以便在远程计算机中使用通配符。

#### rexec

在运行 REXEC 服务的远程计算机上运行命令。rexec 命令在执行指定命令前，验证远程计算机上的用户名，只有安装了TCP/IP 协议后才可以使用该命令。

    rexec computer [-l username] [-n] command

参数

###### computer

指定要运行 command 的远程计算机。

###### -l username

指定远程计算机上的用户名。

###### -n

将 rexec 的输入重定向到 NULL。

###### command

指定要运行的命令。

#### route
控制网络路由表。该命令只有在安装了 TCP/IP 协议后才可以使用。

    route [-f] [-p] [command [destination] [mask subnetmask] [gateway] [metric costmetric]

##### 参数

###### -f

清除所有网关入口的路由表。如果该参数与某个命令组合使用，路由表将在运行命令前清除。

###### -p

该参数与 add 命令一起使用时，将使路由在系统引导程序之间持久存在。默认情况下，系统重新启动时不保留路由。与 print 命令一起使用时，显示已注册的持久路由列表。忽略其他所有总是影响相应持久路由的命令。

###### command

指定下列的一个命令。

命令 目的

    print 打印路由
    add 添加路由
    delete 删除路由
    change 更改现存路由

###### destination

指定发送 command 的计算机。

###### mask subnetmask

指定与该路由条目关联的子网掩码。如果没有指定，将使用 255.255.255.255。

###### gateway

指定网关。

名为 Networks 的网络数据库文件和名为 Hosts 的计算机名数据库文件中均引用全部 destination 或 gateway 使用的符号名称。如果命令是 print 或 delete，目标和网关还可以使用通配符，也可以省略网关参数。

###### metric costmetric

指派整数跃点数（从 1 到 9999）在计算最快速、最可靠和（或）最便宜的路由时使用。

#### rsh

在运行 RSH 服务的远程计算机上运行命令。该命令只有在安装了 TCP/IP 协议后才可以使用。

    rsh computer [-l username] [-n] command

参数

###### computer

指定运行 command 的远程计算机。

###### -l username

指定远程计算机上使用的用户名。如果省略，则使用登录的用户名。

###### -n

将 rsh 的输入重定向到 NULL。

###### command

指定要运行的命令。

#### tftp

将文件传输到正在运行 TFTP 服务的远程计算机或从正在运行 TFTP 服务的远程计算机传输文件。该命令只有在安装了TCP/IP 协议后才可以使用。
    
    tftp [-i] computer [get | put] source [destination]

##### 参数

###### -i

指定二进制图像传送模式（也称为“八位字节”）。在二进制图像模式中，文件一个字节接一个字节地逐字移动。在传送二进制文件时使用该模式。
如果省略了 -i，文件将以 ASCII 模式传送。这是默认的传送模式。此模式将 EOL 字符转换为 UNIX 的回车符和个人计算机的回车符/换行符。在传送文本文件时应使用此模式。如果文件传送成功，将显示数据传输率。

###### computer

指定本地或远程计算机。

###### put

将本地计算机上的文件 destination 传送到远程计算机上的文件 source。

###### get

将远程计算机上的文件 destination 传送到本地计算机上的文件 source。
如果将本地计算机上的文件 file-two 传送到远程计算机上的文件 file-one，请指定 put。如果将远程计算机上的文件file-two 传送到远程计算机上的文件 file-one，请指定 get。
因为 tftp 协议不支持用户身份验证，所以用户必须登录，并且文件在远程计算机上必须可以写入。

###### source

指定要传送的文件。如果本地文件指定为 -，则远程文件在 stdout 上打印出来（如果获取），或从 stdin（如果放置）读取。

###### destination

指定将文件传送到的位置。如果省略了 destination，将假定与 source 同名。

#### tracert

该诊断实用程序将包含不同生存时间 (TTL) 值的 Internet 控制消息协议 (ICMP) 回显数据包发送到目标，以决定到达目标采用的路由。要在转发数据包上的TTL 之前至少递减 1，必需路径上的每个路由器，所以 TTL 是有效的跃点计数。数据包上的 TTL 到达 0 时，路由器应该将“ICMP 已超时”的消息发送回源系统。Tracert 先发送 TTL 为 1 的回显数据包,并在随后的每次发送过程将 TTL 递增 1，直到目标响应或 TTL 达到最大值，从而确定路由。路由通过检查中级路由器发送回的“ICMP 已超时”的消息来确定路由。不过，有些路由器悄悄地下传包含过期 TTL 值的数据包，而 tracert 看不到。

    tracert [-d] [-h maximum_hops] [-j computer-list] [-w timeout]target_name

##### 参数

###### /d

指定不将地址解析为计算机名。

###### -h maximum_hops

指定搜索目标的最大跃点数。

###### -j computer-list

指定沿 computer-list 的稀疏源路由。

###### -w timeout

每次应答等待 timeout 指定的微秒数。

###### target_name

目标计算机的名称。 NET命令的基本用法

### NET

以下综合了WINDOWS 98，WINDOWS WORKSTATION和WINDOWS SERVER 三个操作系统关于NET命令的解释，希望可以更全面一些。
先说一些：

1. NET命令是一个命令行命令。
2. 管理网络环境、服务、用户、登陆...等本地信息
3. WIN 98，WIN WORKSTATION和WIN NT都内置了NET命令。
4. 但WIN 98的NET命令和WORKSTATION、NT的NET命令不同。
5. WORKSTATION和SERVER中的NET命令基本相同。
6. 获得HELP
    1. 在NT下可以用图形的方式，开始-》帮助-》索引-》输入NET
    2. 在COMMAND下可以用字符方式，NET /?或NET或NET HELP得到一些方法 相应的方法的帮助NETCOMMAND /HELP或NET HELP COMMAND 或NET COMMAND /? 另对于错误NET HELPMSG MESSAGE#是4位数

7. 强制参数 所有net命令接受选项/yes和/no(可缩写为/y和/n)。[简单的说就是预先给系统的 提问一个答案]
8. 有一些命令是马上产生作用并永久保存的，使用的时候要慎重
9. 对于NET命令的功能都可以找到相应的图形工具的解决方案
10. 命令的组成 命令 参数 选项 | 参数 选项 | 参数 选项 |...罗里罗嗦说了一大堆，其实就是6和7有用，呵呵。另有两件事：
    1. 在NT的NET命令中有一些参数是只有在SERVER环境中才能使用的
    2. 在WIN98的NET命令中有一些参数不能在DOS-WIN中使用，只能在DOS环境中使用

下面对NET命令的不同参数的基本用法做一些初步的介绍：

#### NET VIEW
作 用：显示域列表、计算机列表或指定计算机的共享资源列表。
命令格式：
    
    net view [\\computername | /domain[:domainname]

参数介绍：

1. 键入不带参数的net view显示当前域的计算机列表。
2. \\\\computername 指定要查看其共享资源的计算机。
3. /domain[:domainname]指定要查看其可用计算机的域。

简单示例：

    net view \\YFANG查看YFANG的共享资源列表。
    net view /domain:LOVE \\查看LOVE域中的机器列表。

#### NET USER

作 用：添加或更改用户帐号或显示用户帐号信息。该命令也可以写为 net users。

命令格式：

    net user [username [password | *] [options] [/domain]

参数介绍：

1. 键入不带参数的net user查看计算机上的用户帐号列表。
2. username添加、删除、更改或查看用户帐号名。
3. password为用户帐号分配或更改密码。
4. *提示输入密码。
5. /domain在计算机主域的主域控制器中执行操作。

简单示例：

    net user yfang \\查看用户YFANG的信息

#### NET USE

作 用：连接计算机或断开计算机与共享资源的连接，或显示计算机的连接信息。

##### 命令格式：

    net use [devicename | *] [\\computername\sharename[\volume] [password | *] [/user:[domainname\]username] [/delete] | [/persistent:{yes | no]}

##### 参数介绍：

键入不带参数的net use列出网络连接。

###### devicename

指定要连接到的资源名称或要断开的设备名称。

###### \\computername\sharename

服务器及共享资源的名称。

###### password

访问共享资源的密码。

###### \*

提示键入密码。

###### /user

指定进行连接的另外一个用户。

###### domainname

指定另一个域。

###### username

指定登录的用户名。