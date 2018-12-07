#!/bin/sh


echo "Container stopped, performing cleanup"
#Trap SIGTERM
trap 'cleanup' SIGTERM

CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED_PLACEHOLDER"
if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED

    echo "-- First container startup --"
    docker rmi -f pythonapini
    docker rmi -f ionicni
    docker build ./docker/image/py -t pythonapini
    docker build ./docker/image/ionic -t ionicni

fi
    echo "-- Not first container startup --"
    ls /dkr/docker/image/py/api
    cd docker/image
docker-compose up
