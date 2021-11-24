<template>
  <el-form
    style="position: absolute; left: 45%; "
    ref="formRef"
    :model="form"
    label-width="auto"
  >
    <el-form-item label="用户名">
      <el-input v-model="form.name" size="small"/>
    </el-form-item>

     <el-form-item label="密码">
      <el-input v-model="form.password" type="password" size="small"/>
    </el-form-item>
   
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { ref, reactive, toRefs } from 'vue'
  export default {
    setup() {
      const formRef = ref(null)
      const data = reactive({
        form: {
          name: '',
          password: '',
        }
      })
      const onSubmit = () => {
        
        console.log('submit!',data)
      }

      return {
        ...toRefs(data),
        formRef,
        onSubmit
      }
    }
  }
</script>

<style lang="sass">

</style>