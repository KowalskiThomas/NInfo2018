FROM docker

RUN apk add --no-cache py-pip
RUN pip install docker-compose

COPY image/ ./
COPY ./enty.sh /usr/local/bin/entry.sh


ENTRYPOINT ["entry.sh"]

CMD sh
