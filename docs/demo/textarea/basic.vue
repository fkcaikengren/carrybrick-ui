<script setup lang="ts">
  import { ref } from 'vue';
  import {CBTextarea} from '@carrybrick/vue'
  const input1 = ref('')

</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBTextarea placeholder="请输入" v-model="input1"
          :style="{width: '200px'}"
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
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
}

</style>