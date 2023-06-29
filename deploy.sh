#!/bin/bash

echo "Setting up Frontend nginx config"
mkdir nginx nginx/conf

cp nginx.frontend.conf nginx/conf/nginx.conf

NGINX_CONF=~/nginx/conf/nginx.conf

# Overwrite default nginx conf
echo "Overwriting system config: $NGINX_CONF"
rm -rf
cp nginx.conf "$NGINX_CONF"

echo "Building images"
docker compose build
echo "Starting up containers"
docker compose up -d chatty-frontend
echo "Containers started, site available at https://localhost"