# h3c

## basic

    sys
    dis ip int b
    dis int b
    dis ip int
    dis int
    dis arp 
    dis dhcp server tree all

## ssh

    rsa local-key-pair create
    local-user admin
    password cipher admin
    authorization-attribute level 3
    quit

    ssh user admin authentication-type password
    ssh user admin service-type stelnet telnet
    user-interface vty 0
    authentication-mode scheme 
    protocol inbound ssh
    quit

    save
    ssh -l ssh 172.18.58.3

## dhcp

    sys
    vlan 1
    int vlan 1
    ip add 192.168.0.1 255.255.255.0
    quit
    dhcp enable
    dhcp forbidden-ip 192.168.0.1
    dhcp server ip-pool local
    network 192.168.0.0 mask 255.255.255.0
    gateway-list 192.168.0.1
    dns-list 192.168.0.1
    expired day 1
    quit
    dis dhcp server tree all

    





