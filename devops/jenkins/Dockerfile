FROM jenkins/jenkins:latest-jdk11
USER root

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    awscli \
    && curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && cat /etc/apt/sources.list.d/docker.list \
    && apt-get update \
    && apt-get -y install docker-ce docker-ce-cli containerd.io docker-compose \
    && usermod -aG staff,docker jenkins \
    && rm -rf /usr/share/doc/* \
    && rm -rf /usr/share/info/* \
    && rm -rf /var/cache/apt/archives/*

COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
COPY install-plugins.sh usr/local/bin/install-plugins.sh
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt

USER jenkins