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
    width:335px;
    height:44px;
    background:linear-gradient(0deg,rgba(254,225,99,1),rgba(252,212,55,1));
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
