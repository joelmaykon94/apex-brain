FROM nginx
LABEL maintainer="joelmaykon94@gmail.com"

# Install NGINX

# Add default configuration
COPY conf/jenkins.conf /etc/nginx/conf.d/jenkins.conf
COPY conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx"]