<script setup lang="ts">
  import { ref } from 'vue';
  import CBSwitch from '../../../packages/vue/src/components/switch/Switch.vue'

  const switchState = ref(false)
  const ok = ref('yes')

</script>

<template>
  <main>
    <div>
      <CBSwitch v-model="switchState" 
        active-text='Y' 
        inactive-text='N'
      />
      <p>value：{{ switchState }}</p>
    </div>
    <div class="mt-2">
      <CBSwitch v-model="ok" 
        style="--cb-switch-on-color: #13ce66; --cb-switch-off-color: #ff4949"
        active-text='是' 
        inactive-text='否'
        active-value='yes'
        inactive-value='no'
      />
      <p>value：{{ ok }}</p>
    </div>
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}
mt-2{
  margin-top: 20px;
}
</style>