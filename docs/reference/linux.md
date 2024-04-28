# Linux

## 创建文件夹

创建一个 `include` 文件夹

```sh
mkdir include
```

## 创建文件夹并解压至该文件夹中

将名为 `include.zip` 的压缩文件解压缩到当前目录下的 `include` 文件夹中

```sh
unzip -d ./include include.zip
```

## 文件夹重命名

```sh
mv old_folder new_folder
```

## Docker Compose 来管理多个 Docker 容器

重新启动 `Docker Compose` 文件中定义的所有服务

```sh
docker-compose restart
```
