<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="主图">
        <!-- action 表示上传的地址
          on-success 表示成功的回调函数
         -->
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="商品价格">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>

      <el-form-item label="商品库存">
        <el-input v-model="ruleForm.quantity"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <!-- 点击之后传入的ruleForm对应的是ref，根据 ruleForm取到的是表单项-->
    </el-form>
  </div>
</template>

<script>
import { create } from '@/api/products'
import { serverUrl } from '@/utils/config'
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        price: 0,
        quantity: 0,
        coverImg: ''
      },
      imageUrl: '',
      uploadUrl: serverUrl + '/api/v1/common/file_upload',
      rules: {
        name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      ;(this.imageUrl = URL.createObjectURL(file.raw)),
        (this.ruleForm.coverImg = res.info)
      // 把图片上传之后的服务器路径存入数据库（而不是存文件）
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 验证通过执行提交否则输出错误
          create(this.ruleForm).then(res => {
            this.$router.push({
              name: 'ProductsList'
              // 创建成功之后跳转到商品列表页
            })
          })
        } else {
          console.log('密码错误')
          return false
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
