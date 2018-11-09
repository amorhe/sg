<template>
    <div class="bgWhite">
      <headers :title="title" :publish="publish"></headers>

      <textarea name="" id="textarea" cols="30" rows="10" placeholder="输入你的打卡心情或上传打卡凭证，还可获得5灵钻奖励额"></textarea>
      <p class="addImage">添加图片</p>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
        data(){
          return {
            title:'动态打卡',
            publish:true
          }
        },
        components:{
          headers
        }
    }
</script>

<style scoped lang="less">
  #textarea {
    width: 330px;
    height: 200px;
    text-align: left;
    border: 1px #bbb solid;
    margin: 10px 0;
    box-sizing: border-box;
    outline: none;
    padding: 5px;
  }
  .addImage {
    width: 80px;
    height: 80px;
    margin-left: 15px;
    line-height: 80px;
    text-align: center;
    background: #e5e5e5;
  }
</style>
