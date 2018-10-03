docker build -t test .

docker run -p 8080:8080 -d test

ouvrir:
http://192.168.99.100:8080/api/admin
http://192.168.99.100:8080/api/player
http://192.168.99.100:8080/api/display