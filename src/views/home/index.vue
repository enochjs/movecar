<template>
  <div class="home">
    <Header />
    <img class="banner" src="../../images/home_bg@2x.png" width="130" height="150" />
    <a @click="handleRegister" class="mb24">
      <img src="../../images/1.png" width="308" height="124" alt="" />
    </a>
    <Button class="button-lg mb24" @click="handleRegister">
      <img src="../../images/user2x.png" width="20" height="20" alt="" />
      <span>电话通知车主挪车</span>
    </Button>
    <Button class="button-lg" @click="handleRegister">
      <img src="../../images/mobile@2x.png" width="20" height="20" alt="" />
      <span>登陆我的账号</span>
    </Button>
  </div>
</template>

<script>

// import { mapGetters } from 'vuex';
import { Button, Toast } from '@nutui/nutui';
import Header from '@/components/Header.vue';
import { FETCH_REGISTER_USER } from '../../store/register';
import { mobileReg, carIdReg } from '../../utils/regRxp';

export default {
  name: 'register',
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
    handleRegister() {
      if (!mobileReg.test(this.mobile)) {
        Toast.fail('手机号格式有误！');
        return;
      }

      if (!carIdReg.test(this.carId)) {
        Toast.fail('车牌号格式有误！');
        return;
      }

      if (this.password !== this.passwordConfirm) {
        // Toast.
        Toast.fail('两次密码输入不一致！');
        return;
      }
      if (!this.capture) {
        Toast.fail('请输入验证码！');
        return;
      }

      this.$store.dispatch(FETCH_REGISTER_USER, {
        mobile: this.mobile,
        password: this.password,
        capture: this.capture,
        carId: this.carId,
      });
    },
  },
  components: {
    Header,
    Button,
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.home {
  .banner {
    position: absolute;
    top: 0;
    left: 0;
  }
  background-repeat: no-repeat;
  .capture {
    border-radius: 10px;
    width: 355px;
    height: 120px;
    .img {
      border-radius: 10px;
    }
  }
  .mb24 {
    margin-bottom: 24px;
  }
}

</style>
