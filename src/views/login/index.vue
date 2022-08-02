<template>
  <div class="login-container">
    <el-form
      ref="user"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <!-- 标题 -->
        <h3 class="title">
          <img src="../../assets/Dikede.png" alt="" />
        </h3>
      </div>

      <!-- 输入框 -->
      <el-form-item prop="loginName">
        <!-- 使用element ui内置图标 -->
        <span class="svg-container el-icon-user-solid"></span>
        <el-input v-model="loginForm.loginName"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <!-- 使用自己svg图标 -->
        <span class="svg-container">
          <svg-icon iconClass="password"></svg-icon>
        </span>
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>

      <!-- 短信验证 -->
      <div class="verify">
        <el-form-item prop="code" class="formItems">
          <!-- 字体图标 -->
          <span class="svg-container">
            <i class="el-icon-circle-check" />
          </span>
          <el-input
            v-model="loginForm.code"
            ref="code"
            placeholder="请输入验证码"
            name="code"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
          <span class="security" @click="getCode">
            <img class="securityImg" :src="code" />
          </span>
        </el-form-item>
      </div>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="login"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { getverify } from '@/api/user'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: ''
      },

      loginRules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // {
          //   pattern: /^[a-zA-Z0-9_]{6,16}$/,
          //   message: '请输入以字母.数字.下划线4-16位',
          //   trigger: 'blur'
          // }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // {
          //   pattern:
          //     /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
          //   message: '密码请包含数字字母特殊字符,并且不能少于6位',
          //   trigger: 'blur'
          // }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      // 用户信息
      loading: false,
      // 密码
      passwordType: 'password',
      code: '',
      codeToken: ''
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    // 点击登陆
    async login() {
      try {
        this.loading = true
        await this.$refs.user.validate()
        console.log('成功')
        const login = {
          loginName: this.loginForm.loginName, //用户名
          password: this.loginForm.password, //密码
          code: this.loginForm.code, //验证码
          clientToken: this.codeToken, //随机数赋值给clientToken
          loginType: 0 //登录类型 0
        }
        await this.$store.dispatch('user/getLogin', login)
        this.loading = false
        this.$router.push('/')
      } catch (e) {
        console.log('失败')
      }
    },
    // 发送验证码
    async getCode() {
      // 随机数
      const radomNum = Math.floor(Math.random() * 10000)

      // 接口数据
      const res = await getverify(radomNum)
      console.log(res)
      this.code = URL.createObjectURL(res)
      // 把随机数赋值给clientToken
      this.codeToken = radomNum
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url('../../assets/64da02734e23d98659fb4b3c15b4dd8.png') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      color: #999;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-button--primary {
    height: 50px;
    border-radius: 8px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
  }
  // 文本名字
  .formItem {
    background: #fff;
    border: 1px solid #ccc;
  }
  // 密码框
  .el-form-item__content {
    background: #fff;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
.el-input__inner {
  caret-color: #454545 !important;
}
// .formItems{
// display: flex;
//   justify-content: space-between;
// }
// .verify{
//   display: flex;
//   justify-content: space-between;
// }
// 验证码
.security {
  position: relative;
  width: 135px;
  height: 50px;
  .securityImg {
    position: absolute;
    height: 51px;
    width: 125px;
    top: -16px;
    left: -89px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  // background-color: $bg;
  overflow: hidden;

  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -165px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }

  .tips {
    font-size: 14px;
    // color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      position: absolute;
      top: -120px;
      left: 178px;
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      width: 96px;
      height: 96px;
    }
    .title img {
      width: 100%;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
