<script setup lang="ts">
  import CBButton from '../../../packages/vue/src/components/button/Button.vue'
  import { Refresh } from '@element-plus/icons-vue'
  // 注册局部组件
  
</script>

<template>
  <main>
    <div >
      <h3>设置icon</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton icon="Plus">
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" icon="Minus">
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain icon="CirclePlus">
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large" icon="Search">
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default" icon="Delete">
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small" icon="Refresh">
            info 
          </CBButton>
        </div>
      </div>
    </div>
    <div >
      <h3>设置loading</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton loading>
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" loading>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain loading>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton  round loading>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" round loading>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain round loading >
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