# cisco

## set up ip address

    enable
    conf t
    int f0/0
    ip add 10.1.1.0 255.255.255.0
    no sh
    end
    sh ip int br (level 3)
    sh int (level 2)

## set up clock

    set clock 12:12:12 12 august 2016

## set console password

    enable
    conf t
    line console 0
    password ***
    login

## set aux password

    enable
    conf t
    line aux 0
    password ***
    login

## save conf

    sh run
    copy run start
    sh start
    copy running-config tftp

## set password

    enable
    conf t
    enable password ***

## set secret

    enable
    conf t
    enable secret ***

## remove password

    enable
    conf t
    no enable password

## set up banner

    enable
    conf t
    banner motd # hello #

## remove secret 

    enable
    conf t
    no enable secret

## enable telnet

    conf t
    line vty 0 4
    password 123456
    login

## enable ssh server

    enable
    conf t
    ip domain-name r2
    username taofeng secret  123456
    crypto key generate rsa modulus 2048
    line vty 0 4
    login local
    transparent input ssh
    exit
    ip ssh version 2

## ssh client login

    ssh -l username 10.1.1.2

## serial 

    int s0/0/0
    bandwidth 1000   (kbits)
    speed 1000
    clock rate 2000000

    copy run start
    erase start
    reload

    sh flash
    copy filename tftp
    copy flash tftp

## reset password

    reboot and ctrl + break
    confreg 0x2142
    reset
    enable
    copy start run
    enable secret xxxxx
    confreg 0x2102
    copy run start
    end

## boot from flash

    sh version
    boot system flash xxxx.bin
    boot system tftp xxxx.bin x.x.x.x
    boot system rom
    end
    copy run start
    reload

## recover via tftp

### tftp server

    tftp-server flash:xxxx.bin

### client

    set IP_Address:1.1.1.1
    set IP_SUBNET_MASK:255.0.0.0
    set DEFAULT_GATEWAY:1.1.1.2
    set TFTP_SERVER:1.1.1.2
    set TFTP_FILE:xxxx.bin
    tftpdnld

    sh license udi

    enable
    show cdp neighbors
    show cdp neighbors detail
    show cdp traffic

    conf t
    show cdp
    cdp time 10
    cdp holdtime 40
    no cdp run 

    sh cdp entry * pro

    clear counters s0/0/0

## dhcp
### dhcp server

    enable
    conf t
    int f0/0
    ip add 192.168.0.1 255.255.255.224
    no sh
    exit
    ip dhcp excluded-address 192.168.0.1
    ip dhcp pool Local
    network 192.168.0.0 255.255.255.224
    default-router 192.168.0.1
    dns-server 192.1168.0.1
    lease 1 1 1  //(天，时，分)
    exit

### dhcp client

    enable
    conf t
    int f0/0
    ip add dhcp
    no sh
    exit
    ip default-gateway 192.168.0.1

## duplex 

    duplex auto
    duplex full
    duplex half

## ntp

    ntp master 1
    ntp server 172.16.10.1 version 4
    sh ntp status
    sh ntp statistics

## log

    logging host 172.16.10.1
    service timestamps log datetime msec
    logging sync

## cdp 

    sh cdp
    sh cdp neighbors
    sh cdp neighbors detail
    sh cdp entry  * 
    cdp run
    no cdp run
    cdp timer ?
    cdp holdtime ?

    ctrl+shift+6, X
    sh sessions
    sh users
    sh session
    disconnect ?

## host table

    conf t
    ip host host_name ip_address
    sh hosts

## debug

    debug all
    no debug all
    debug ip icmp 
    un all
    sh processes
    sh processes cpu

## domain

    ip domain-lookup
    no ip domain-lookup
    ip name-server     (up to 6 name servers)
    ip domain-name


# dhcp relay

    ip helper-address x.x.x.x 


## dhcp

    sh users
    clear line 2

## route

    sh ip route
    sh int
    sh processes
    ping
    traceroute

## route

    ip route 192.168.10.0 255.255.255.0 172.16.10.2 150
    ip route 192.168.10.0 255.255.255.0 s0/0 150

    ip route 0.0.0.0 0.0.0.0 s0/0
    ip default-network 171.16.10.1


    conf t
    router rip
    network x.x.x.x
    version 2
    no auto-summary

    passive-interface f0/0 

    ip route 0.0.0.0 0.0.0.0 f0/0 
    router rip 
    default-information originate

    no router rip

### ospf

    conf t
    router ospf 1
    network 192.168.10.64 0.0.0.0 area 0

    sh ip ospf 
    sh ip ospf database
    sh ip ospf int f0/0
    sh ip ospf neighbor
    sh ip protocols

    conf t
    int loopback 0
    ip add 172.31.1.1 255.255.255.255

    conf t
    router ospf 1
    router-id 223.255.255.254
    do clear ospf process

## security

    conf t
    int f0/0
    switchport mode access
    switchport port-security
    switchport port-security maximum 1
    switchport port-security violation shutdown (restrict)
    switchport port-security mac-address aa.bb.cc.dd.ee.ff (sticky)

    show port-security int f0/0 
    show mac address-table

    mac address-table static aaa.bbb.ccc vlan 1 int f0/0

    int range f0/3-4

## vlan

    sh vlan-switch
    sh int trunk
    sh int f1/3 switchport

    conf t
    vtp mode [ server | client | transparent ]
    vtp domain <domain-name>
    vtp password <password>
    vtp pruning
    end

    sh vtp status

    switchport mode { access | dynamic { auto | desirable } | trunk}
    
    sh int f0/0 [ switchport | trunk ]
    sh vlan [ brief | id <vlan-id> | name <vlan-name> ]

## SW

    cont t
    vlan 2
    name vlan2
    vlan 10
    name vlan10
    exit
    int f1/0
    switchport mode access
    switchport access vlan 2
    int f1/1
    switchport mode access
    switchport access vlan 2
    int f1/2
    switchport mode access
    switchport access vlan 10
    int f1/3
    switchport mode trunk
    switchport trunk allowed vlan 1-2,10,1002-1005

## router

    conf t
    int f0/0
    ip add 192.168.0.1 255.255.255.0
    no sh
    int f0/0.2
    encapsulation dot1q 2
    ip add 192.168.1.65 255.255.255.192
    int f0/0.10
    encapsulation dot1q 10
    ip add 192.168.1.129 255.255.255.224


## vlan 11.8
### pc1 pc2 pc3 pc4

    en
    conf t
    hostname pc1
    line con 0
    logg sy
    exit
    no ip routing
    no ip domain name lookup
    ip default-gateway 192.168.10.33 255.255.255.224
    int f0/0
    ip add 192.168.10.34 255.255.255.224
    no sh
    end
    copy run start

### S2 S3

    en
    conf t
    int f1/2
    switchport mode access
    switchport access vlan 10(20)
    int f1/3
    switchport mode access
    switchport access vlan 10(20)
    int f1/0
    switchport mode trunk
    switchport trunk encapsulation dot1q
    switchport trunk allowed vlan 10,11
    int f1/1
    switchport mode trunk
    switchport trunk encapsulation dot1q
    switchport trunk allowed vlan 10,11
    int f1/4
    switchport mode trunk
    switchport trunk encapsulation dot1q
    switchport trunk allowed vlan 10,11
    int f1/5
    switchport mode trunk
    switchport trunk encapsulation dot1q
    switchport trunk allowed vlan 10,11
    end
    sh int trunk
    sh vlan-switch
    copy run start

### S1

    en
    conf t
    int f1/0
    switchport mode trunk
    switchport trunk encapsulation dot1q
    int f1/1
    switchport mode trunk
    switchport trunk encapsulation dot1q
    int f1/2
    switchport mode trunk
    switchport trunk encapsulation dot1q
    int f1/3
    switchport mode trunk
    switchport trunk encapsulation dot1q
    int f1/4
    switchport mode trunk
    switchport trunk encapsulation dot1q
    end
    copy run start

### R

    en
    conf t
    int f0/0
    ip add 192.168.10.97 255.255.255.224
    no sh
    int f0/0.10
    encapsulation dot1q 10
    ip add 192.168.10.33 255.255.255.224
    int f0/0.20
    encapsulation dot1q 20
    ip add 192.168.10.65 255.255.255.224
    end
    copy run start

### S1 IVR

    conf t
    int f1/4
    switchport mode access
    int vlan 10 
    ip add 192.168.10.33 255.255.255.224
    int vlan 20
    ip add 192.168.10.65 255.255.255.224
    end
    copy run start



## access list

standard 1-99 1300-1999 extended 100-199 2000-2699

### standard

    access-list 1 deny 172.16.40.0 0.0.0.255
    int f0/0
    ip access-group 1 out

    access-list 1 remark ***
    access-list 1 permit 0.0.0.0 255.255.255.255
    access-list 1 permit any
    access-list 1 permit 172.16.40.2
    access-list 1 permit host 172.16.40.2
    access-list 1 deny any
    lin vty 0 4
    access-class 1 in

    sh access-lists
    sh ip access-lists
    sh ip int

### extended

    access-list 110 deny tcp any any eq telnet log
    access-list 110 permit ip any any

### Name 

    ip access-list standard SBlock
    deny 172.16.60.0 0.0.0.255
    permit any
    exit
    int f0/1
    ip access-group SBlock out

    ip access-list extended EBlock
    deny tcp any 172.16.50.0 0.0.0.255 eq telnet
    permit ip any any
    exit
    int f0/1
    ip access-group EBlock out
    end

## nat

### static

    ip nat inside source static 10.10.0.1 170.10.0.1
    int f0/0
    ip nat inside
    int s0/0/
    ip nat outside

### dynamic

    ip nat  pool Todd 192.0.0.2 192.0.0.254 netmask 255.255.255.0
    access-list 1 permit 10.10.0.0 0.0.0.255
    ip nat inside source list 1 pool Todd
    int f0/0
    ip nat inside
    int s0/0
    ip nat outside

### overload

    ip nat pool Todd 192.0.0.2 192.0.0.2 netmask 255.255.255.0
    access-list permit 10.0.0.0 0.0.0.255
    ip nat inside source list 1 pool Todd
    int f0/0
    ip nat inside
    int s0/0
    ip nat outside

    ip nat inside source list 1 int s0/0 overload

    sh ip nat trans
    debug ip nat
    clear ip nat translation *
    ip nat translation timeout 
    sh ip nat statistics


## ipv6

    conf t
    ipv6 unicast-routing
    int f0/0
    ipv6 address 2001:db8:3c4d:11::/64 eui-64
    int s0/0
    ipv6 address 2001:db8:3c4d:a12::/64 eui64
    int s0/1
    ipv6 address 2001:db8:3c4d::/64 eui64
    ipv6 enable

    ipv6 address autoconfig default 

    ipv6 router ospf 10
    router-id 1.1.1.1
    int s0/0
    ipv6 ospf 10 area 0

    ipv6 route 2001:db8:3c4d:14::/64 2001:db8:3c4d:12:21a:2fff:fee7:4398 150
    ipv6 route ::/0 s0/0
    sh ipv6 route static
    sh ipv6 int br
    sh ipv6 protocols
    sh ipv6 ospf
    clear ospf ip ospf process
    sh ipv6 ospf neighbor
    debug ipv6 ospf packet
    debug ipv6 ospf hello


## stp

    conf t
    spanning-tree mode rapid-pvst
    sh spanning-tree
    sh spanning-tree vlan 1
    sh spanning-tree summary

    spanning-tree vlan 2 priority 16384
    spanning-tree vlan 2 root primary

    conf t
    spanning-tree portfast bpduguard default

    int f0/0
    spanning-tree bpduguard enable

## etherchannel

    conf t
    int range f0/1-2
    switchport trunk encapsulation dot1q
    switchport mode trunk
    channel-group 1 mode active
    exit
    int port-channel 1
    switchport trunk encapsulation dot1q 
    switchport mode trunk
    switchport trunk allowed vlan 1,2,3
    int range g0/13-14
    switchport trunk encapsulation dot1q
    switchport mode trunk
    channel-group 1 mode active
    exit
    int port-channel 1
    switchport trunk encapsulation dot1q
    switchport mode trunk
    switchport trunk allowed vlan 1,2,3

    sh etherchannel summary
    sh etherchannel port-channel



