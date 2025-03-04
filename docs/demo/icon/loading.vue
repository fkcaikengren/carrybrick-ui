<script setup lang="ts">
  import {CBIcon} from '@carrybrick/vue'
  import { ArrowRight, CirclePlus, Loading } from '@element-plus/icons-vue'
</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBIcon>
          <ArrowRight />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon>
          <CirclePlus />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon >
          <Loading />
        </CBIcon>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <CBIcon size="20px" class="is-loading">
          <ArrowRight />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon size="20px" class="is-loading">
          <CirclePlus />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon class="is-loading">
          <Loading />
        </CBIcon>
      </div>
    </div>

 

  </main>
</template>

<style scoped>
.row{
  display: flex;
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

</style>