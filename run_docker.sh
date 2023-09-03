#!/bin/bash

#allow X access
xhost +local:root

xauth nlist $DISPLAY | sed -e 's/^..../ffff/' | xauth -f /tmp/.docker.xauth nmerge -

docker build --build-arg user=$USER --build-arg uid=$(id -u) --build-arg gid=$(id -g) -t sih-frontend .

docker run -e DISPLAY=unix$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -v /tmp/.docker.xauth:/tmp/.docker.xauth:rw -e XAUTHORITY=/tmp/.docker.xauth -t sih-frontend
