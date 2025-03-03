<script setup lang="ts">
  import CBPopover from '../../../packages/vue/src/components/popover/Popover.vue'
  import CBButton from '../../../packages/vue/src/components/button/Button.vue'
  import CBIcon from '../../../packages/vue/src/components/icon/Icon.vue'
  import { ref } from 'vue'
  const popoverRef = ref<typeof CBPopover | null>(null)
  const handleClose = ()=>{
    popoverRef.value?.hide()
  }
</script>

<template>
  <main>
    <CBPopover trigger="click" ref="popoverRef">
      <template #reference >
        <CBButton >点击触发</CBButton>
      </template>
      <template #default>
        <div>
          <div><CBButton icon="Plus" @click="handleClose">按钮1</CBButton></div>
          <div><CBButton icon="Minus"  @click="handleClose">按钮2</CBButton></div>
          <div><CBButton icon="Refresh"  @click="handleClose">按钮3</CBButton></div>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="top">
      <template #reference >
        <CBButton>
          <CBIcon>
            <Delete />
          </CBIcon>
        </CBButton>
      </template>
      <template #default>
        <div style="background-color: --cb-color-warning;">
          <h5>确定删除</h5>
          <p>这将删除你的内容</p>
        </div>
      </template>
    </CBPopover>
  
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.ml-2{
  margin-left: 20px;
}

</style>