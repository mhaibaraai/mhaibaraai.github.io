<script lang="ts" setup>
import Gitalk from 'gitalk'
import { useRoute } from 'vitepress'
import 'gitalk/dist/gitalk.css'

const route = useRoute()

function initGitalk() {
  // 切换页面时，刷新评论组件
  const gitTalk = new Gitalk({
    // 客户端 ID
    clientID: 'c9a5ad0e4b014379a11b',
    // 客户端密钥
    clientSecret: '18c49ed4f40354fe26d12c7cda7d22eb3ad97b9a',
    // 存储评论的仓库
    repo: 'mhaibaraai.github.io',
    // 仓库的拥有者
    owner: 'mhaibaraai',
    // 存储评论的仓库的管理员
    admin: ['mhaibaraai'],
    // 每个页面的唯一标识
    id: route.path,
    // 是否开启专注模式
    distractionFreeMode: false,
    // 是否手动创建 issue
    createIssueManually: true,
  })

  gitTalk.render('gitalk-container')
}

onMounted(() => {
  initGitalk()
})

watch(
  () => route.path,
  initGitalk,
)
</script>

<template>
  <div id="gitalk-container" />
</template>
