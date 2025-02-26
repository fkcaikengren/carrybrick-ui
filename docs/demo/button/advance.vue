<script setup lang="ts">
  import CBButton from '../../../packages/vue/src/components/button/Button.vue'
</script>

<template>
  <main>
    <div >
      <h3>设置size</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton size="large">
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton >
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton size="small">
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large">
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default">
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small">
            info 
          </CBButton>
        </div>
      </div>
    </div>
    <div >
      <h3>设置round</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton size="large" round>
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton round>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton size="small" round>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large" round>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default" round>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small" round @click="()=>console.log('click1')">
            info 
          </CBButton>
        </div>
      </div>
    </div>

    <div >
      <h3>设置disabled</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton disabled>
            default 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton type="primary" disabled>
            primary 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton type="success" disabled>
            success 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton plain disabled>
            warning 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton plain type="primary" disabled>
            danger 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton text type="primary" disabled @click="()=>console.log('click')">
            info 
          </CBButton>
        </div>
      </div>
    </div>

    
    
  </main>
</template>

<style scoped>  
h3 {
  margin-bottom: 10px;
}
.row {
  display: flex;
  align-items: center;
}
.mr-10 {
  margin-right: 10px;
}
</style>