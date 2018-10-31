<template>
    <div>
      <headers :tabIndex="1"></headers>
      <div class="swipe_div">
        <mt-swipe :auto="3000">
          <mt-swipe-item v-for="(item,index) in imgArr" :key="index">
            <img :src="item.src" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <dynamicPublic></dynamicPublic>
    </div>
</template>

<script>
  import headers from '../../components/public/top'
  import dynamicPublic from '../../components/public/dynamicPublic'
    export default {
      data(){
          return{
            imgArr:[{'src':'http://t1.27270.com/uploads/tu/201809/1293/9ac2098a9f.jpg'},
              {'src':'http://t1.27270.com/uploads/tu/201809/1330/691c69c0f2.jpg'},
              {'src':'http://t1.27270.com/uploads/tu/201809/1170/9054d6a1cd.jpg'}],

          }
      },
      components:{
        headers,dynamicPublic
      },
      methods:{

      }
    }
</script>
<style>
  .mint-swipe-indicators {
    left: auto;
    right: 0;
  }
  .mint-swipe-indicator {
    opacity: 1;
    background: rgba(191,193,190,1);
  }
</style>
<style scoped lang="less">
  .swipe_div{
    height: 116px;
    img {
      width: 100%;
    }
  }
</style>
