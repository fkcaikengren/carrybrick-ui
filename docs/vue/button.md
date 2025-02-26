# Button 按钮



## 代码演示



<demo vue="../demo/button/basic.vue" />

<demo vue="../demo/button/advance.vue" />

<demo vue="../demo/button/icon-btn.vue" />

## API

Button 样式：
size：`size`，可选值为 `large`、`small`、`mini` 或者不填
plain：`plain`，是否朴素按钮
text：`text`，是否为文本按钮
type：`type`，按钮类型，可选值为 `primary`、`success`、`warning`、`danger`、`info` 或者不填
round：`round`，是否圆角按钮
circle：`circle`，是否圆形按钮
color：`color`，自定义按钮颜色，优先级高于 `type`，自动生成hover颜色 click颜色

内部状态控制？
loading：`loading`，是否加载中状态
disabled：`disabled`，是否禁用状态

插槽
icon：`icon`，图标类名
iconPosition：`iconPosition`，图标位置，可选值为 `left` 或 `right`

事件
click：`click`，点击按钮时触发

