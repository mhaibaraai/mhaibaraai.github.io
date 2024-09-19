### 1.1.1 (Plugin)

- 简化了 `Plugin` 插件的代码组判断：当携带参数 `code-group` 或文件路径数量大于 1 时，渲染代码组

### 1.1.0 (Plugin、Container)

- 添加 `VitePress` 默认扩展支持
- 支持 VitePress 的 `行内语法高亮` 、`代码行号` 及 `代码组` 功能，提升文档的可读性和交互性

### 1.0.2 (Plugin、Container)

- 修复了在 Container 容器中通过 `v-html` 渲染的内容包含 `<script>` 标签，导致的脚本执行问题
- 将 `description` 改为组件引用，由 VitePress 渲染

### 1.0.1 (Plugin、Container)

- 更新了README.md

### 1.0.0 (Plugin、Container)

- Initial release
