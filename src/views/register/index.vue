<template>
  <div class="register">
    <Header />
    <div class="title">绑定车主联系方式</div>
    <TextInput
      placeholder="请输入手机号码"
      maxlength="11"
      label=""
      v-model="mobile"
      :hasBorder="false"
    />
    <div class="border-line" />
    <TextInput
      placeholder="请输入密码"
      label=""
      type="password"
      v-model="password"
      :hasBorder="false"
    />
    <div class="border-line" />
    <TextInput
      placeholder="再次请输入密码"
      label=""
      v-model="passwordConfirm"
      :hasBorder="false"
    />
    <div class="border-line" />
    <TextInput
      placeholder="输入验证码"
      label=""
      v-model="capture"
      :hasBorder="false"
    />
    <div class="border-line" />
    <TextInput
      placeholder="输入车牌号"
      label=""
      v-model="carId"
      :hasBorder="false"
    />
    <div class="border-line" />
    <Button
      class="button-lg"
      @click="handleRegister"
    >提交</Button>
    <!-- <div class="">
      输入车牌号
      <div @click="switchPicker('provinceVisible')">请选择{{province[0]}}</div>
      <div @click="switchPicker('cityVisible')">请选择{{city[0]}}</div>
    </div>
    <ShortInput
      :length=5
    />
    <Picker
      :is-visible="provinceVisible"
      :default-value-data="province"
      :list-data="provinceList"
      @close="switchPicker('provinceVisible')"
    />
    <Picker
      :is-visible="cityVisible"
      :default-value-data="city"
      :list-data="cityList"
      @close="switchPicker('cityVisible')"
    /> -->
  </div>
</template>

<script>

// import { mapGetters } from 'vuex';
import { TextInput, Button, Toast } from '@nutui/nutui';
import Header from '@/components/Header.vue';
// import ShortInput from '@/components/shortInput/index.vue';
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
.register {
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
  }
  .button-lg {
    margin-top: 40px;
  }
}

</style>
