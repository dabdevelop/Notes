
### apache 代理

Apache启动报错：

    the requested operation has failed
    Syntax error on line 487 of D:/Java/Apache2.2/conf/httpd.conf:
    Invalid command 'ProxyPass', perhaps misspelled or defined by a module not included in the server configuration
    Note the errors or messages above, and press the key to exit. 0....

原因：需要在http.conf文件中配置以下模块：

    #LoadModule proxy_module modules/mod_proxy.so
    #LoadModule proxy_http_module modules/mod_proxy_http.so

改为：

    LoadModule proxy_module modules/mod_proxy.so
    LoadModule proxy_http_module modules/mod_proxy_http.so


在/etc/apache2/sites-enabled 下新建一个文件 mysites.conf

    <VirtualHost *:8080>
        ServerName https://${C9_HOSTNAME}:443
        ProxyPass / http://localhost:8000/
        ProxyPassReverse / http://localhost:8000/
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        #ProxyPass / http://localhost:8000/
        #ProxyPassReverse / http://localhost:8000/
    </VirtualHost>

    
在/etc/apache2/conf-enabled 下新建一个文件 http.conf

    LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so
    LoadModule proxy_http_module /usr/lib/apache2/modules/mod_proxy_http.so

### 代理https

示例配置文件

    <VirtualHost *:8080>
        ServerName https://${C9_HOSTNAME}:443
        ProxyRequests off
        SSLProxyEngine on
        ProxyPass / https://miui-kywl-2279916:943/
        ProxyPassReverse / https://miui-kywl-2279916:943/
        LogLevel info

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        
    </VirtualHost>

    <VirtualHost *:8080>
        ServerName https://${C9_HOSTNAME}:443
        ProxyRequests Off
        SSLProxyEngine on
        ProxyPass /google/ https://www.google.ca:443/
        ProxyPassReverse /google/ https://www.google.ca:443/
        LogLevel info
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>

需要加载下面模块

    LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so  
    LoadModule proxy_connect_module /usr/lib/apache2/modules/mod_proxy_connect.so  
    LoadModule proxy_http_module /usr/lib/apache2/modules/mod_proxy_http.so  
    LoadModule proxy_ftp_module /usr/lib/apache2/modules/mod_proxy_ftp.so  
    LoadModule rewrite_module /usr/lib/apache2/modules/mod_rewrite.so  
    LoadModule ssl_module /usr/lib/apache2/modules/mod_ssl.so

重新启动Apache2

    $ service apache2 restart

### 配置证书

1）生成服务器Apache的RSA私钥server.key：
命令：

    openssl genrsa -out server.key 1024

2）生成签署申请server.csr：
命令：

    openssl req -new -out server.csr -key server.key -config ..\conf\openssl.cnf 

注：这一步会需要输入，国家，地区（省市），公司，部门，姓名，邮箱的信息，还有一个密码。我胡填的，但是好像也没用，简单易记就行。

3）通过CA为网站服务器签署证书：

命令1-生成CA私钥：
      
    openssl genrsa -out ca.key 1024

命令2-利用CA私钥生成CA的自签署证书：

    openssl req -new -x509 -days 365 -key ca.key -out ca.crt -config ..\conf\openssl.cnf

注：这步要填写信息，同上

命令3-CA为网站服务器签署证书：

在bin目录下创建demoCA，里面创建文件index.txt和serial以及文件夹newcerts，serial内容为01，其他为空。再执行下面的命令，生成server.crt文件

    openssl ca -in server.csr -out server.crt -cert ca.crt -keyfile ca.key -config ..\conf\openssl.cnf

4）复制文件：

将server.crt，server.key，ca.key复制到apache的conf文件夹下。原因：待查。http://openwares.net/misc/pki_key_pair_certificate.html
