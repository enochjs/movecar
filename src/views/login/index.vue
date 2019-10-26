<template>
  <div class="login">
    <div class="header">登录</div>
    <div class="title">
      <div>
        <img src="../../images/login_title@2x.png" width="84" height="84" />
      </div>
      <span>友时挪车</span>
    </div>
    <div>
      <div class="form-line">
        <img src="../../images/user2x.png" width="15" height="15" />
        <TextInput
          class="input"
          placeholder="请输入手机号码"
          maxlength="11"
          label=""
          v-model="mobile"
          :hasBorder="false"
        />
      </div>
    </div>
    <div class="border-line" />
    <div class="form-line">
      <img src="../../images/password@2x.png" width="15" height="15" />
      <TextInput
        class="input"
        placeholder="请输入密码"
        label=""
        type="password"
        v-model="password"
        :hasBorder="false"
      />
    </div>
    <div class="border-line" />
    <Button class="button-lg" @click="handleLogin">
      <span>登 录</span>
    </Button>
    <a class="forget-pwd" @click="handleForgetPassword">忘记密码 > </a>
  </div>
</template>

<script>

import { TextInput, Button, Toast } from '@nutui/nutui';
import Header from '@/components/Header.vue';
import { mobileReg } from '../../utils/regRxp';
import { loginApi } from '../../store/api'

export default {
  name: 'login',
  data() {
    return {
      mobile: '',
      password: '',
      passwordConfirm: '',
      capture: '',
      carId: '',
    };
  },
  methods: {
    async handleLogin() {
      if (!mobileReg.test(this.mobile)) {
        Toast.fail('手机号格式有误！');
        return;
      }

      if (!this.password) {
        Toast.fail('请输入密码！');
      }

      const result = await loginApi({
        mobile: this.mobile,
        password: this.password,
      })

      if (!result) {
        Toast.fail('账号密码错误！');
      }
    },
    handleForgetPassword () {
      this.$router.push({ path: '/forget/password' })
    }
  },
  components: {
    Header,
    TextInput,
    Button,
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.login {
  .header {
    padding: 13px;
    color: #1B1B1B;
  }
  .title {
    text-align: center;
    margin-top: 36px;
    margin-bottom: 20px;
    color: #231815;
    span {
      line-height: 20px;
    }
  }
  .border-line {
    height: 1px;
    background-color: #EAEAEA;
  }
  .nut-textinput {
    height: 46px;
  }
  .button-lg {
    width: 355px;
    margin-top: 24px;
  }
  .form-line {
    img {
      float: left;
      margin-top: 14px;
      margin-left: 12px;
    }
    .input {
      flex: 1;
      margin-left: 20px;
    }
  }
  .forget-pwd {
    color: #34333E;
    margin-top: 10px;
    float: right;
    margin-right: 10px;
  }
}

</style>
