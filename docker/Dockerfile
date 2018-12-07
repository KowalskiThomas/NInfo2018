FROM docker

RUN apk add --no-cache py-pip
RUN pip install docker-compose

COPY /home/agammon/travail/nuitinfo/NInfo2018 /dkr
COPY ./enty.sh /usr/local/bin/entry.sh


ENTRYPOINT ["entry.sh"]

CMD sh
