<script setup lang="ts">
  import { ref } from 'vue';
  import {CBSwitch} from '@carrybrick/vue'
  const state1 = ref(false)
  const state2 = ref('yes')
  const state3 = ref('yes')

</script>

<template>
  <main>
    <CBSwitch v-model="state1" 
      active-text='Y' 
      inactive-text='N'
      size="small"
      class="ml-2"
    />
    <CBSwitch v-model="state2" 
      active-text='Y' 
      inactive-text='N'
      class="ml-2"
    />
    <CBSwitch v-model="state3" 
      active-text='Y' 
      inactive-text='N'
      size="large"
      class="ml-2"
    />
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}

</style>