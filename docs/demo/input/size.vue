<script setup lang="ts">
  import { ref } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const text1 = ref('')
  const text2 = ref('')
  const text3 = ref('')

</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput placeholder="请输入" v-model="text1"
          size="small"
          :style="{width: '140px'}"
        />
      </div>
      <div class="col">
        <CBInput placeholder="请输入" v-model="text2"
          :style="{width: '140px'}"
        />
      </div>
      <div class="col">
        <CBInput placeholder="请输入" v-model="text3"
          size="large"
          :style="{width: '140px'}"
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