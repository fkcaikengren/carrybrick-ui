# Switch 开关

## 代码演示

### 基础使用
使用css变量`--cb-switch-on-color`和`--cb-switch-off-color`控制Switch的颜色
<demo vue="../demo/switch/basic.vue" />


### 拓展value
通过`activeValue`和`inactiveValue`来设置Switch的值
<demo vue="../demo/switch/custom-value.vue" />


### 尺寸
<demo vue="../demo/switch/size.vue" />

### 禁用
<demo vue="../demo/switch/disabled.vue" />



## 功能实现

1. 双向绑定数据，modelValue支持boolean、number和string 
2. activeText, inactiveText 文字描述
3. size 大小
4. 通过css变量控制颜色
5. disabled