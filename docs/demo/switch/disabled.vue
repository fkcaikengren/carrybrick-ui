<script setup lang="ts">
  import { ref } from 'vue';
  import CBSwitch from '../../../packages/vue/src/components/switch/Switch.vue'

  const state1 = ref(true)
  const state2 = ref(false)

</script>

<template>
  <main>
    <CBSwitch v-model="state1" disabled />
    <CBSwitch v-model="state2" 
      class="ml-2"
    />
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}

</style>