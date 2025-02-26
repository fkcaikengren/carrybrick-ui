<script setup lang="ts">
  import { ref } from 'vue'
  import CBCollapse from '../../../packages/vue/src/components/collapse/Collapse.vue'
  import CBCollapseItem from '../../../packages/vue/src/components/collapse/CollapseItem.vue'
  const openValue = ref(['a'])

</script>

<template>
  <main>
    <CBCollapse v-model="openValue" accordion>
      <CBCollapseItem name="a" title="Title A" >
        <h1>headline title</h1>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
      </CBCollapseItem>
      <CBCollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
      </CBCollapseItem>
      <CBCollapseItem name="c" title="Disabled Title" disabled>
      </CBCollapseItem>
    </CBCollapse>

    <!-- <Message message="hello xxm" showClose></Message> -->
  </main>
</template>