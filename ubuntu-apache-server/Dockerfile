FROM ubuntu:latest

# Install Apache
RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get install -y vim && \
    a2enmod proxy && \
    a2enmod proxy_http && \
    apt-get clean

COPY ./vhost/000-default.conf ./etc/apache2/sites-available/

# Expose port 80
EXPOSE 80

# Start Apache service
CMD ["apache2ctl", "-D", "FOREGROUND"]

