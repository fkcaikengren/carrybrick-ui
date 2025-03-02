<script setup lang="ts">
  import { ref, watch } from 'vue';
  import CBInput from '../../../packages/vue/src/components/input/Input.vue'
  import CBIcon from '../../../packages/vue/src/components/icon/Icon.vue'
  import { CirclePlus } from '@element-plus/icons-vue'

  const text1 = ref('')
  const text2 = ref('')

  const text3 = ref('')
  const text4 = ref('')

  const handlePlusClick = ()=>{
    alert('点击icon')
  }



</script>

<template>
  <main>
    <h5>前缀图标，后缀图标</h5>
    <div class="row">
      <div class="col">
        <CBInput placeholder="搜索1" v-model="text1" prefix-icon='Search' />
      </div>
      <div class="col">
        <CBInput placeholder="搜索2" v-model="text2" suffix-icon='Search' />
      </div>
    </div>


    <h5>前缀插槽、后缀插槽</h5>
    <div class="row">
      <div class="col">
        <CBInput placeholder="请输入" v-model="text3" >
          <template v-slot:prefix>
            <span class="prefix-icon">🚀</span>
          </template>
        </CBInput>
      </div>
      <div class="col">
        <CBInput placeholder="请输入" v-model="text4"  >
          <template v-slot:suffix>
            <CBIcon class="suffix-icon" @click="handlePlusClick">
              <CirclePlus /> 
            </CBIcon>
          </template>
        </CBInput>
      </div>
    </div>

  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
h3 {
  margin-bottom:10px;
}
.row{
  display: flex;
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 20px;
}

.prefix-icon {
  padding-right: 8px;
}
.suffix-icon {
  cursor: pointer;
  padding-left: 8px;
}

</style>