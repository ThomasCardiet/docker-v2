FROM php:8.2-fpm-alpine

RUN apk update && \
    apk add git

ENV APP_ENV=prod

WORKDIR /var/www/html

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN git clone https://github.com/pgrimaud/go-swap.git --depth=1 /var/www/html && \
    rm -rf .git

RUN composer install --no-dev --no-cache --no-interaction --no-progress --optimize-autoloader

