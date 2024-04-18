# Git

## Git 取消变基操作

```sh
git rebase --abort
```

## Git 删除所有本地分支

* 删除除当前分支外的所有分支

```sh
git branch | grep -v "^\*" | xargs git branch -D
```

* 删除所有本地分支，包括当前分支

```sh
git branch | xargs git branch -D
```
