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
          >立即修改</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { one, update } from '@/api/products'
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
  created() {
    one(this.$route.query.id).then(res => {
      this.ruleForm.name = res.name
      this.ruleForm.price = res.price
      this.ruleForm.quantity = res.quantity
      if (res.coverImg) {
        if (res.coverImg.startsWith('http')) {
          this.imageUrl = res.coverImg
        } else {
          this.imageUrl = serverUrl + res.coverImg
        }
      }
    })
  },
  methods: {
    handleAvatarSuccess(res, file) {
      ;(this.imageUrl = URL.createObjectURL(file.raw)),
        (this.ruleForm.coverImg = res.info)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 验证通过执行提交否则输出错误
          update(this.$route.query.id, this.ruleForm).then(() => {
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
  max-width: 178px;
  max-height: 178px;
  display: block;
}
</style>
