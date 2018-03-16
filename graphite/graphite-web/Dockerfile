FROM alpine:latest

MAINTAINER Jan Kohlhof <kohj@informatik.uni-marburg.de>
ENV WHISPER_DIR="/whisper"

# packages
RUN apk --no-cache add python py-pip perl ca-certificates cairo libffi fontconfig && \
    apk --no-cache add --virtual builddeps g++ musl-dev python-dev libffi-dev cairo-dev && \
    pip install --upgrade pip && \
    pip install --trusted-host pypi.python.org django==1.4 simplejson==2.1.6 django-tagging==0.3.1 pytz \
        graphite-web==0.9.14 whisper==0.9.14 cairocffi==0.7.2 gunicorn && \
    apk del builddeps

# config 
RUN cp /opt/graphite/conf/graphite.wsgi.example /opt/graphite/webapp/graphite_wsgi.py && \
    cp /opt/graphite/webapp/graphite/local_settings.py.example /opt/graphite/webapp/graphite/local_settings.py && \
    # set whisper dir to /whisper
    echo "WHISPER_DIR='$WHISPER_DIR'" >> /opt/graphite/webapp/graphite/local_settings.py && \
    echo "SECRET_KEY='safe_default'" >> /opt/graphite/webapp/graphite/local_settings.py && \
    mkdir $WHISPER_DIR
    #chmod -R 0777 /opt/graphite/storage/log

COPY startup.sh /startup.sh

ENTRYPOINT ["/startup.sh"]
