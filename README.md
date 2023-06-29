# Chatty

An End-to-End encrypted chat messenger.

Currently deployed at https://chatty.macksproductions.com/.

## Getting Started

### Dependencies/Prerequisites

* [pnpm](https://pnpm.io/installation)
* [Rust](https://www.rust-lang.org/learn/get-started)

### Local Development Setup

Please refer to the READMEs in each of the folders for individual setup instructions.

## Deployment

### Dependencies/Prerequisites
* [nginx](https://nginx.org/en/docs/install.html)
* [Docker](https://docs.docker.com/get-docker/)
* [Cert Bot](https://certbot.eff.org/) provides free certificates for use.
* The given nginx config files assume that the two containers will be placed into the same VM.

### Steps
1. Clone the repo and edit the nginx config files as well as the ENV variable in chatty-frontend/Dockerfile.
2. Create the nginx folder for the frontend to link to.
```bash
mkdir nginx nginx/conf
cp nginx.frontend.conf nginx/conf/nginx.conf
```
3. Create a certificate to use with https
```bash
sudo certbot certonly --nginx
```
4. Overwrite your system config (or add on to it).
```bash
cp nginx.conf ~/nginx/conf/nginx.conf 
sudo systemctl restart nginx
```
5. Build and run the Docker containers.
```bash
docker compose build frontend
docker compose build backend
docker compose up -d frontend
# The site should now be accessible at your domain
# The backend will be accessible via the /api/ route.
```

### License

This project is licensed under GNU GPL v3.

Refer to COPYING for details.
