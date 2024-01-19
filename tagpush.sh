TAG=$1

docker tag lottery:conviva ynsong5/lottery:${TAG}
docker push ynsong5/lottery:${TAG}
