# Openssl

### Generate a 2048 bit RSA Key

You can generate a public and private RSA key pair like this:

    openssl genrsa -des3 -out private.pem 2048

That generates a 2048-bit RSA key pair, encrypts them with a password you provide, and writes them to a file. You need to next extract the public key file. You will use this, for instance, on your web server to encrypt content so that it can only be read with the private key.

### Export the RSA Public Key to a File

This is a command that is

    openssl rsa -in private.pem -outform PEM -pubout -out public.pem

The -pubout flag is really important. Be sure to include it.

Next open the public.pem and ensure that it starts with a -----BEGIN PUBLIC KEY-----. This is how you know that this file is the public key of the pair and not a private key.
To check the file from the command line you can use the less command, like this:

    less public.pem

Do Not Run This, it Exports the Private Key
A previous version of the post gave this example in error.

    openssl rsa -in private.pem -out private_unencrypted.pem -outform PEM

The error is that the -pubout was dropped from the end of the command. That changes the meaning of the command from that of exporting the public key to exporting the private key outside of its encrypted wrapper. Inspecting the output file, in this case private_unencrypted.pem clearly shows that the key is a RSA private key as it starts with -----BEGIN RSA PRIVATE KEY-----.

Visually Inspect Your Key Files

It is important to visually inspect you private and public key files to make sure that they are what you expect. OpenSSL will clearly explain the nature of the key block with a -----BEGIN RSA PRIVATE KEY----- or -----BEGIN PUBLIC KEY-----.

You can use less to inspect each of your two files in turn:

* less private.pem to verify that it starts with a -----BEGIN RSA PRIVATE KEY-----
* less public.pem to verify that it starts with a -----BEGIN PUBLIC KEY-----

The next section shows a full example of what each key file should look like.


# openssl生成nginx证书

颁发证书给自己

    #cd /usr/local/nginx/conf
    #openssl genrsa -des3 -out server.key 1024
    #openssl req -new -key server.key -out server.csr
    #openssl rsa -in server.key -out server_nopwd.key
    #openssl x509 -req -days 365 -in server.csr -signkey server_nopwd.key -out server.crt

证书已经生成完毕，下面就是配置nginx

    server {
        listen 443;
        ssl on;
        ssl_certificate  /usr/local/nginx/conf/server.crt;
        ssl_certificate_key  /usr/local/nginx/conf/server_nopwd.key;
    }

然后重启nginx即可。

    $ sudo nginx -c /usr/local/etc/nginx/nginx.conf
    $ sudo nginx -s reload

# openssl加解密

加密：

    openssl enc -e -a -aes-256-cbc  -in infile -out outfile

解密：

    openssl enc -d -a -aes-256-cbc -in infile -out outfile

bruteforce：

>https://github.com/glv2/bruteforce-salted-openssl