<script setup lang="ts">
  import { ref, watch } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const uesrname = ref('')
  const password = ref('')
  const search = ref('')

  watch(()=>uesrname.value, ()=>{
    console.log('username', uesrname.value);
  })
  watch(()=>password.value, ()=>{
    console.log('username', password.value);
  })
  watch(()=>search.value, ()=>{
    console.log('username', search.value);
  })

</script>

<template>
  <main>

    <div class="row">
      <div class="col">
        <CBInput placeholder="请输入" v-model="uesrname"
          :style="{width: '200px'}"
        />
      </div>
      <div class="col">
        <CBInput  placeholder="请输入密码" type="password" v-model="password" 
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