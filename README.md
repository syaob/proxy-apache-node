# proxy-apache-node
exemple de mise en proxy d'application : exemple un front React ou Node avec EJS et un back API PHP

Un docker-compose.yml à la racide pour trois container :

1 - ubuntu-apache comme serveur proxy
2 - node 14 pour l'application node avec express - hello world sur la route /
3 - php-apache 7.4 pour simuler l'application php

Les images docker : 
1 : 
FROM ubuntu:latest

# Install Apache
RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get install -y vim && \
    a2enmod proxy && \
    a2enmod proxy_http && \
    apt-get clean
    ....


2 : 
FROM php:7.4-apache

# Install Apache
RUN apt-get update && \
    apt-get install -y vim && \
    apt-get clean
    ....

3 : 
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app
....


Pour l'utilisation : il suffit de cloner le repo et de lancer la commande  docker-compose up --build -d  
NB : 
- le port 80 de la machine hôte doit être libre


Future version :
"Prévoir de vraies applications React et une API PHP"
"ajouter le ssl avec letsencrypt pour https"
