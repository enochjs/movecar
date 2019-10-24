<template>
  <div class="nut-input-w">
    <input
      visible="false"
      type="tel"
      ref="realInput"
      class="nut-real-input"
      maxlength="length"
      autocomplete="off"
      autofocus="autofocus"
      v-model="shortpwdValue"
      :hasBorder="false"
      @input="shortpwdInput($event)"
    />
    <div class="fake-input-list" ref="fakeInputList">
      <ul>
        <li v-for="item in fakeInputItems" :key="item.id">
          <input maxlength="1" v-model="item.val" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { TextInput } from '@nutui/nutui';

export default {
  name: 'shortInput',
  components: {
    // TextInput,
  },
  props: {
    length: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      shortpwdValue: '',
    };
  },
  watch: {
  },
  methods: {
    shortpwdInput(e) {
      const val = e.target.value;
      const length = Math.min(val.length, this.length);
      for (let i = 0; i < length; i++) {
        this.fakeInputItems[i].val = val[i];
      }
    },
  },
  computed: {
    fakeInputItems() {
      const inputs = [];
      for (let i = 0; i < this.length; i++) {
        inputs.push({ id: i + 1, val: '' });
      }
      return inputs;
    },
  },
  mounted() {

  },
};
</script>

<style lang="less" scoped>

.nut-input-w {
  text-align: center;
  position: relative;
}
ol,
ul {
    list-style: none
}

.nut-real-input {
  z-index: 10001;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  opacity: 0;
  width: 100%;
}

.fake-input-list {
  height: 24px;
  width: 322px;
  ul {
    padding-top: 11px;
  }
  li {
    float: left;
    margin-left: 7px;
    border: 1px solid #CECECE;
    width: 24px;
    height: 24px;
  }
  input {
    height: 24px;
    width: 24px;
    line-height: 24px;
    border: 0;
    background:none;
    text-align: center;
    font-size: 14px;
  }
}
</style>
