<script setup lang="ts">
  import { ref } from 'vue';
  import {CBTextarea} from '@carrybrick/vue'
  const text = ref('')


</script>

<template>
  <main>
    <div class="row">
      
      <div class="col">
        <p>不限制高度:</p>
        <CBTextarea placeholder="请输入" v-model="text"
          :style="{width: '200px'}"
          autosize
        />
      </div>

      
      <div class="col">
        <p>限制高度:</p>
        <CBTextarea placeholder="请输入" v-model="text"
          :style="{width: '200px'}"
          :autosize="{maxRows:5, minRows:2}"
        />
      </div>
      
    </div>

  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
.row{
  display: flex;
  align-items: flex-start;
  padding: 10px;
}
.row > .col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
}

</style>