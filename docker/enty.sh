#!/bin/sh
CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED_PLACEHOLDER"
if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED

    echo "-- First container startup --"
    docker rmi -f pythonapini
    docker build ./docker/image/py -t pythonapini

else
    echo "-- Not first container startup --"
    ls /dkr/docker/image/py/api
    cd docker/image
    docker-compose up

fi
