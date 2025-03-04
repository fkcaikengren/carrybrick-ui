<script setup lang="ts">
  import { ref } from 'vue';
  import {CBSwitch} from '@carrybrick/vue'
  const switchState = ref(false)
  const ok = ref(false)

</script>

<template>
  <main>
    <CBSwitch v-model="switchState" />
    <CBSwitch v-model="ok" 
    class="ml-2"
    style="--cb-switch-on-color: #13ce66; --cb-switch-off-color: #ff4949"/>
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}

</style>