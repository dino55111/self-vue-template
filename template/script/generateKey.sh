<%_ if (options.needDevContainer) { _%>
#!/bin/bash 

MKCERT_PATH=$(which mkcert)

echo $MKCERT_PATH

if [ $MKCERT_PATH ]
then
    echo "Find mkcert $MKCERT_PATH"
    cd "$(dirname "$0")"
    echo "Start generate key"
    mkcert -install --key-file ../.devcontainer/nginx/wildcard.com.tw-key.pem  --cert-file ../.devcontainer/nginx/wildcard.com.tw.pem '*.com.tw' localhost 127.0.0.1 ::1
    echo "Finish generate key"
    
else
    echo "Please install mkcert first"
fi
<%_ } _%>