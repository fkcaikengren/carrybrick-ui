<script setup lang="ts">
  import CBButton from '../../../packages/vue/src/components/button/Button.vue'
</script>

<template>
  <main>
    <div>
      <h3>设置type</h3>
      <div class="row">
        <div class="mr-10">
          <CBButton >
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary">
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="success">
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="warning">
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="danger">
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="info">
            info 
          </CBButton>
        </div>
      </div>
    </div>

    <div >
      <h3>设置plain</h3>
      <div class="row">
        <div class="mr-10" plain>
          <CBButton >
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="success" plain>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="warning" plain>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="danger" plain>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="info" plain>
            info 
          </CBButton>
        </div>
      </div>
    </div>

    <div >
      <h3>设置text</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton text>
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" text>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="success" plain text>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="warning" plain text>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="danger" plain text>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="info" plain text>
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