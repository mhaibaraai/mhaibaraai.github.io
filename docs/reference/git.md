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

## Git 将远程仓库的 master 分支的代码合并到你的本地分支

```sh
git merge new_remote/master --allow-unrelated-histories
```

## Git 强制推送本地分支到远程仓库

```sh
git push new_remote your_branch -f
```
