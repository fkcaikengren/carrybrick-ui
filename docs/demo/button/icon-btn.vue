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
            增加 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" icon="Minus">
            减少 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain icon="CirclePlus">
            更多 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large" icon="Search">
            搜索 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default" icon="Delete">
            删除 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small" icon="Refresh">
            更新 
          </CBButton>
        </div>
      </div>
    </div>
    <div >
      <h3>设置loading</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton loading>
            loading 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" loading>
            loading 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain loading>
            loading 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton  round loading>
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" round loading>
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain round loading >
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