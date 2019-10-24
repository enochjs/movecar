<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .button-lg {
    height:44px;
    font-family: 'PingFangSC-Regular';
    font-weight: 'Regular';
    background: url('./images/button@2x.png');
    border-radius:22px;
    outline: none;
    border: none;
    box-sizing: border-box;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #34333E;
  }
}
</style>
