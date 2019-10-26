<template>
  <div class="forget-password">
    <div class="header">找回密码</div>
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
    <div class="form-line capture">
      <img src="../../images/password@2x.png" width="15" height="15" />
      <TextInput
        class="input"
        placeholder="请输入验证码"
        label=""
        v-model="capture"
        :hasBorder="false"
      />
      <a class="get-password">获取验证码</a>
    </div>
    <div class="border-line" />
    <Button class="button-lg" @click="handleGetPassword">
      <span>找回密码</span>
    </Button>
    <a class="login" @click="handleLogin">登 录 > </a>
  </div>
</template>

<script>

import { TextInput, Button, Toast } from '@nutui/nutui';
import Header from '@/components/Header.vue';
import { mobileReg } from '../../utils/regRxp';
import { getPasswordApi } from '../../store/api'

export default {
  name: 'forgetPassword',
  data() {
    return {
      mobile: '',
      capture: '',
    };
  },
  methods: {
    handleLogin () {
      this.$router.push({ path: '/login' })
    },
    async handleGetPassword() {
      if (!mobileReg.test(this.mobile)) {
        Toast.fail('手机号格式有误！');
        return;
      }

      if (!this.capture) {
        Toast.fail('请输入密码！');
      }

      const result = await getPasswordApi({
        mobile: this.mobile,
        capture: this.capture,
      })

      if (!result) {
        Toast.fail('验证码错误！');
      }
    },
  },
  components: {
    Header,
    TextInput,
    Button,
    // Picker,
    // ShortInput,
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.forget-password {
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
    overflow: hidden;
    img {
      float: left;
      margin-top: 14px;
      margin-left: 12px;
    }
    .input {
      float: left;
    }
    &.capture.input {
      margin-right: 80px;
    }
  }
  .login {
    color: #34333E;
    margin-top: 10px;
    float: right;
    margin-right: 10px;
  }
  .get-password {
    margin-top: 11px;
    float: right;
    width:64px;
    height:12px;
    line-height: 12px;
    border:1px solid rgba(253,214,27,1);
    border-radius:12px;
    font-size: 12px;
    padding: 5px 8px;
    color: #FDD720;
  }
}

</style>
