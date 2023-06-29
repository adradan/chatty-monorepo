# Chatty

An End-to-End encrypted chat messenger

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
* HTTPS Certificate, [Let's Encrypt](https://letsencrypt.org/getting-started/) provides free certificates for use.
* The given nginx config files assume that the two containers will be placed into the same VM.

### Steps
1. Clone the repo and edit the nginx config files.
2. Run the deployment script
```bash
sudo chmod -R 700 deploy.sh
./deploy.sh
```

### License

This project is licensed under GNU GPL v3.

Refer to COPYING for details.
