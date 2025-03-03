<script setup lang="ts">
  import { ref } from 'vue';
  import CBPopover from '../../../packages/vue/src/components/popover/Popover.vue'
  import CBButton from '../../../packages/vue/src/components/button/Button.vue'
</script>

<template>
  <main>
    <CBPopover >
      <template #reference >
        <CBButton >下面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="top">
      <template #reference >
        <CBButton >上面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="left">
      <template #reference >
        <CBButton >左面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="right">
      <template #reference >
        <CBButton >右面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
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