# Git {#Git}

> 版本控制策略、常用命令和技巧

## 取消变基操作 {#note-1}

```sh
git rebase --abort
```

## 删除所有本地分支 {#note-2}

- 删除除当前分支外的所有分支

```sh
git branch | grep -v "^\*" | xargs git branch -D
```

- 删除所有本地分支，包括当前分支

```sh
git branch | xargs git branch -D
```

## 将远程仓库的 master 分支的代码合并到你的本地分支 {#note-3}

```sh
git merge new_remote/master --allow-unrelated-histories
```

## 强制推送本地分支到远程仓库 {#note-4}

```sh
git push new_remote your_branch -f
```

## 从远程仓库获取最新的代码，并删除在远程仓库中已经被删除的分支 {#note-5}

```sh
git fetch --prune
```
