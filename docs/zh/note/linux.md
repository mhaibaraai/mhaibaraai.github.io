# Linux {#start}

> Linux 常用命令、服务器管理、开发环境配置等

## 创建文件夹 {#note-1}

创建一个 `include` 文件夹

```sh
mkdir include
```

## 创建文件夹并解压至该文件夹中 {#note-2}

将名为 `include.zip` 的压缩文件解压缩到当前目录下的 `include` 文件夹中

```sh
unzip -d ./include include.zip
```

## 文件夹重命名 {#note-3}

```sh
mv old_folder new_folder
```

## Docker Compose 来管理多个 Docker 容器 {#note-4}

重新启动 `Docker Compose` 文件中定义的所有服务

```sh
docker-compose restart
```
