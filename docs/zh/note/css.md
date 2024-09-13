# CSS

> 样式、布局、动画等相关内容

## 变量

- 有两个变量 `--primary-color` 和 `--secondary-color`，使用其中一个作为背景色。

```css
:root {
  --primary-color: red;
  --secondary-color: blue;
  --chosen-color: var(--primary-color, var(--secondary-color));
}

.element {
  background-color: var(--chosen-color);
}
```

- 基于某种逻辑来选择其中一个值，可以结合使用CSS的条件伪类。

```css
:root {
  --primary-color: red;
  --secondary-color: blue;
}

body[data-theme='primary'] {
  --chosen-color: var(--primary-color);
}

body[data-theme='secondary'] {
  --chosen-color: var(--secondary-color);
}

.element {
  background-color: var(--chosen-color);
}
```

```html
<body data-theme="primary">
  <div class="element">This element has the primary color as background.</div>
</body>

<body data-theme="secondary">
  <div class="element">This element has the secondary color as background.</div>
</body>
```

## Flexbox 布局盒子的子元素根据数量宽高自适应

```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* 子元素之间的间距 */
  }
  .item {
    flex: 1 1 calc(25% - 10px); /* 基于 4 列布局 */
    box-sizing: border-box; /* 包含 padding 在内计算宽度 */
  }
</style>
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
