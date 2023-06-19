FROM alpine

RUN apk update && \
    apk add apache2 php82 php82-apache2 php82-curl php82-openssl

COPY ./src /var/www/localhost/htdocs

EXPOSE 80
CMD ["httpd", "-DFOREGROUND"]
