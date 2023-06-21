```
docker build . -t td4-fpm
```

```
docker login ghcr.io
```

```
docker tag td4-fpm ghcr.io/pgrimaud/td4-fpm:latest
```

```
docker push ghcr.io/pgrimaud/td4-fpm:latest
```
