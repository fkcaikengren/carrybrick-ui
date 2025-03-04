<script setup lang="ts">
  import { ref } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const text1 = ref('')
  const text2 = ref('')

</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput placeholder="搜索1" v-model="text1" prefix-icon='Search' clearable />
      </div>
      <div class="col">
        <CBInput placeholder="搜索2" v-model="text2" suffix-icon='Search' clearable />
      </div>
    </div>



  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
h3 {
  margin-bottom:10px;
}
.row{
  display: flex;
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 20px;
}


</style>