<script setup lang="ts">
  import CBIcon from '../../../packages/vue/src/components/icon/Icon.vue'
  import { ArrowRight, CirclePlus, Check, InfoFilled, Loading } from '@element-plus/icons-vue'
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
        <CBIcon>
          <Check />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon >
          <InfoFilled />
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
        <CBIcon size="20px" color="#b2b">
          <ArrowRight />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon size="20px" color="#2bb">
          <CirclePlus />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon size="20px" color="#bb2">
          <Check />
        </CBIcon>
      </div>
      <div class="col">
        <CBIcon size="20px" color="#2f8">
          <InfoFilled />
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