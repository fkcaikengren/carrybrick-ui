<script setup lang="ts">
  import { ref, watch } from 'vue';
import CBInput from '../../../packages/vue/src/components/input/Input.vue'

  const search = ref('')
  
  watch(()=>search.value, ()=>{
    console.log('username', search.value);
  })

</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput  placeholder="搜索内容" suffixIcon="Search" v-model="search" disabled
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