<template>
  <div class="logo-header">
    <img src="../images/register_logo2x.png" width="24" height="24" alt="" />
    <span class="logo-header-text">友时挪车</span>
  </div>
</template>

<script>
export default {
  name: 'LogoHeader',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.logo-header {
  padding: 13px;
  img {
    vertical-align: bottom;
    margin-right: 5px;
  }
  .logo-header-text {
    width:59px;
    height:24px;
    line-height: 24px;
    font-size:16px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(35,24,21,1);
    line-height:20px;
  }

}

</style>
