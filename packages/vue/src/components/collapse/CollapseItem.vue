<template>
  <div :key="name" :class="rootKls">
    <button :class="headKls" @click="handleClick(name)" >
      <slot name="title">{{ title }}</slot>
      <slot name="icon">
        <CBIcon :class="arrowKls"  >
          <ArrowRight />
        </CBIcon>
      </slot>
    </button>
    <transition :name="klsNamespace + '-collapse-item'"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div :class="contentWrapKls" v-show="isExpanded">
        <div :class="contentKls">
          <slot>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import {ref, inject,computed } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue'
import type { CollapseItemProps } from './types';
import { CollapseContextKey, type CollapseContext } from './constant';
import { useCollapseTransition, useItemKls } from './use-collapse';
import CBIcon from '../icon/Icon.vue';

defineOptions({
  name: 'CBCollapseItem',
})
const props = defineProps<CollapseItemProps>()
const {activeNames, handleClick} = inject<CollapseContext>(CollapseContextKey, {} as CollapseContext)



const isExpanded = computed(()=> {
  return Array.isArray(activeNames.value) ? activeNames.value.includes(props.name) : activeNames.value === props.name
})

const {
  klsNamespace, rootKls, headKls, contentWrapKls, contentKls, arrowKls
} = useItemKls(isExpanded)

const {
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onBeforeLeave,
    onLeave,
    onAfterLeave
} = useCollapseTransition()

</script>
