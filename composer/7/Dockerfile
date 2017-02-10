FROM alpine:edge
MAINTAINER Jan Kohlhof <kohj@informatik.uni-marburg.de>
    
RUN apk add --update su-exec git php7 php7-curl php7-openssl php7-json php7-phar php7-pdo php7-dom php7-mbstring php7-zlib && \
    rm /var/cache/apk/* && \
    ln -s /usr/bin/php7 /usr/bin/php && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php -r "if (hash_file('SHA384', 'composer-setup.php') === '55d6ead61b29c7bdee5cccfb50076874187bd9f21f65d8991d46ec5cc90518f447387fb9f76ebae1fbbacf329e583e30') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
    php composer-setup.php --install-dir=/usr/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

WORKDIR /project
COPY startup.sh /usr/local/bin
ENTRYPOINT ["/usr/local/bin/startup.sh"]
