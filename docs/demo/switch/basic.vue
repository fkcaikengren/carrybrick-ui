<script setup lang="ts">
  import { ref, watch } from 'vue';
  import CBTextarea from '../../../packages/vue/src/components/textarea/Textarea.vue'

  const uesrname = ref('')

</script>

<template>
  <main>
    <h3>固定行数</h3>
    <div class="row">
      <div class="col">
        <CBTextarea placeholder="请输入" v-model="uesrname"
          :style="{width: '200px'}"
        />
      </div>
      
    </div>

    <h3>自动调整行数</h3>
    <div class="row">
      <div class="col">
        <CBTextarea placeholder="请输入" v-model="uesrname"
          :style="{width: '200px'}"
          autosize
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