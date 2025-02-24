<template>
  <i :class="rootKls" :style="style" v-bind="$attrs">
    <slot/>
  </i>
</template>
<script lang="ts" setup>
import "./icon.scss"
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import type { IconProps } from './types'

defineOptions({
  name: 'CBIcon',
})

const props = withDefaults(defineProps<IconProps>(), {
  size: '1em',
  color: 'inherit',
  loading: false
})


const {b} = useNamespace('icon')
const rootKls = b()


const style = computed<CSSProperties>(()=>{
  return {
    fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
    '--icon-color': props.color
  }
})

</script>
