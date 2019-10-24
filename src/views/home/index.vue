<template>
  <div class="home">
    <Header />
    <img class="banner" src="../../images/home_bg@2x.png" width="258" height="299" />
    <a class="capture" @click="handleGetCapture" >
      <img src="../../images/capture.png" width="355" height="124" alt="" />
    </a>
    <Button class="button-lg mb24" @click="handleNoticeOwner">
      <img class="align-bottom mr4" src="../../images/user2x.png" width="17" height="20" alt="" />
      <span>电话通知车主挪车</span>
    </Button>
    <Button class="button-lg" @click="handleLogin">
      <img
        class="align-bottom mr4"
        src="../../images/mobile@2x.png"
        width="20"
        height="20"
        alt=""
      />
      <span>登陆我的账号</span>
    </Button>
  </div>
</template>

<script>

import { Button } from '@nutui/nutui';
import Header from '@/components/Header.vue';

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
    handleGetCapture() {

    },

    handleNoticeOwner() {

    },
    handleLogin() {

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
    top: -102px;
    left: -76px;
  }
  background-repeat: no-repeat;
  .capture {
    display: block;
    margin-bottom: 14px;
    margin-top: 10px;
    .img {
      border-radius: 10px;
    }
  }
  .mb24 {
    margin-bottom: 24px;
  }
  .mt24 {
    margin-top: 24px;
  }
  .align-bottom {
    vertical-align: bottom;
  }
  .mr4 {
    margin-right: 4px;
  }
  .button-lg {
    width: 355px;
  }
}

</style>
