<template>
    <div class="cb-loader cb-loader--active">
        <img src="/static/website/version/images/loading/loader.svg" alt="">
    </div>
</template>
<script>
export default {
  mounted () {
    $(window).on('load', function(){
        $('.cb-loader').removeClass('cb-loader--active');
    })
  }
}
</script>
<style type="text/css">
  .cb-loader{
    display: none;
  }
  .cb-loader img{
    margin: auto;
  }
  .cb-loader--active{
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: grid;
    align-items: center;
    z-index: 999999;
    background-color: #222222;
  }
</style>
