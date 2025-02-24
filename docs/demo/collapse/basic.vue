<script setup lang="ts">
  import { ref } from 'vue'
  import Collapse from '../Collapse.vue'
  import CollapseItem from '../CollapseItem.vue'
  const openValue = ref(['a'])

</script>

<template>
  <main>
    <Collapse v-model="openValue" accordion>
      <CollapseItem name="a" title="Title A" >
        <h1>headline title</h1>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
      </CollapseItem>
    </Collapse>

    <!-- <Message message="hello xxm" showClose></Message> -->
  </main>
</template>