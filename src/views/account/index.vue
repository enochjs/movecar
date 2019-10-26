<template>
  <div class="account">
    <Header />
    <div class="title">我的账号</div>
    <TextInput
      maxlength="11"
      label="手机号"
      v-model="mobile"
      :disalbe="true"
      :hasBorder="false"
    />
    <div class="border-line" />
    <TextInput
      label="隐藏剩余时长"
      v-model="time"
      :hasBorder="false"
    />
    <div class="border-line" />
    <div class="tip">注：隐号剩余时长为0时，扫描挪车电话将显示真实号码</div>
    <Button
      class="button-lg"
      @click="handleBuy"
    >隐藏时长购买</Button>
    <div class="tip gray">价格：0.1／分钟</div>
  </div>
</template>

<script>

import { TextInput, Button, Toast } from '@nutui/nutui';
import Header from '@/components/Header.vue';
import { FETCH_REGISTER_USER } from '../../store/register';
import { mobileReg } from '../../utils/regRxp';
import { buyHiddenTimeApi } from '../../store/api'

export default {
  name: 'account',
  data() {
    return {
      mobile: '',
      time: '',
    };
  },
  methods: {
    async handleBuy() {
      if (!mobileReg.test(this.mobile)) {
        Toast.fail('手机号格式有误！');
        return;
      }
      const result = await buyHiddenTimeApi({
        mobile: this.mobile,
        time: this.time,
      })
    },
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
.account {
  .title {
    text-align: left;
    padding: 16px 10px;
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      top: 16px;
      content: '';
      width: 3px;
      height: 21px;
      background-color: #FDD94B;
      border-radius:2px;
    }
  }
  .border-line {
    height: 1px;
    background-color: #EAEAEA;
  }
  .nut-textinput {
    height: 46px;
    color: #ABABAB;
    font-size: 13px;
  }

  .button-lg {
    margin-top: 40px;
    width: 355px;
    width: 100%;
    color: #231815;
  }
  .tip {
    color: #333333;
    height:12px;
    font-size:12px;
    font-weight:400;
    line-height:20px;
    margin-top: 20px;
    text-align: left;
    &.gray {
      color: #878787;
    }
  }
}

</style>
