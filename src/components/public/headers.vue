<template>
  <div>
    <div class="head_discuss">
      <i class="iconfont icon-fanhui" @click="back()"></i>
      <p>{{title}}</p>
      <a v-show="publish" class="publish">发布</a>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
    export default {
        data(){
          return {

          }
        },
      props:{
        title:String,
        publish:Boolean
      },
      methods:{
          back(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped lang="less">
  .head_discuss {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    background: rgb(248, 248, 248);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    i {
      font-size: 20px;
      color: #AA7575;
      position: absolute;
      top: 10px;
      left: 14px;
    }
    p {
      font-size: 18px;

    }
    .publish {
      width: 72px;
      height: 30px;
      border-radius: 35px;
      border: 1px #bbb solid;
      color: #C892A4;
      background: #eae3e3;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
    }
  }
</style>
