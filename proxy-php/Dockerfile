FROM php:7.4-apache

# Install Apache
RUN apt-get update && \
    apt-get install -y vim && \
    apt-get clean

WORKDIR /var/www/html

COPY . .

EXPOSE 80

