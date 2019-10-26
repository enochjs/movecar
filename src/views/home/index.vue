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
    <nut-dialog
      :visible="dialogShow"
      :noOkBtn="true"
      cancelBtnTxt="关 闭"
      @cancel-btn-click="dialogShow=false"
      @close="dialogShow=false"
    >
      <img src="../../images/account@2x.png" width="80" height="80" />
      <div class="mobile-title">联系电话</div>
      <div class="mobile">{{mobile}}</div>
    </nut-dialog>
  </div>
</template>

<script>

import Vue from 'vue';
import { Button, Dialog } from '@nutui/nutui';
import Header from '@/components/Header.vue';
import { getCarOwnweMobileApi, getQRcodeApi } from '../../store/api'

Dialog.install(Vue);

export default {
  name: 'home',
  components: {
    Header,
    Button,
  },
  data() {
    return {
      mobile: '',
      dialogShow: false,
    };
  },
  methods: {
    // 获取二维码
    async handleGetCapture() {
      const qRcode = await getQRcodeApi()
    },
    // 通知车主
    async handleNoticeOwner() {
      const mobile = await getCarOwnweMobileApi();
      this.mobile = mobile;
      this.dialogShow = true;
    },
    // 登录
    handleLogin() {
      this.$router.push({ path: '/login' })
    },
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

  .mobile-title {
    color: #111111;
    margin: 12px 0;
  }
  .mobile {
    background-color: #EDEDED;
    padding: 10px;
    border-radius: 8px;
  }
}

</style>
