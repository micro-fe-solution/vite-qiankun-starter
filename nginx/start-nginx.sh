#!/bin/sh

# if [[ ! -d /opt/app/dist ]]; then
#   echo "invalid ENV";
#   exit 1;
# fi

# exec nginx -g "pid /tmp/nginx.pid; daemon off;"
nginx -g "pid /tmp/nginx.pid; daemon off;"
