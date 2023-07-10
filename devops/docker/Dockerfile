# Base image
FROM jenkins/jenkins:lts

# Install plugins
RUN /usr/local/bin/install-plugins.sh \
    git \
    docker-plugin

# Expose ports
EXPOSE 8080
EXPOSE 50000

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Install Nginx
RUN apt-get update && apt-get install -y nginx

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
