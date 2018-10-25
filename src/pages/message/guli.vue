<template>
  <div>
    <div class="head_discuss">
      <i class="iconfont icon-fanhui" @click="back()"></i>
      <p>鼓励你</p>
      <div class="empty"></div>
    </div>

    <div class="message_list">
      <div v-for="item in 2">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1390108980,2985885193&fm=27&gp=0.jpg" alt="">
        <div>
          <div class="message_list_text">
            <div>
              <p>灵均</p>
              <p>鼓励了你</p>
            </div>
            <p>18-10-22  22:00</p>
          </div>
          <p class="nowrap">嗯啊对对，还在吗（他的内容：展示一行）</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){

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
    justify-content: space-between;
    padding: 0 14px;
    background: rgb(248, 248, 248);
    i {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
  .message_list {
    &>div {
      height: 70px;
      border-bottom: 1px #f2f2f2 solid;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      display: flex;
      justify-content: space-between;
      &>img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 9px;
      }
      &>div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>p {
          font-size: 12px;
          text-align: left;
        }
        .message_list_text{
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>div {
            display: flex;
            justify-content: space-between;
            &>p:nth-child(1){
              font-weight: bold;
              margin-right: 10px;
            }
            &>p:nth-child(2){
              font-weight: bold;
              color: #C892A4;
            }
          }

          &>p{
            font-size: 12px;
          }
        }
        .colorRed {
          color: #E51C23;
          font-weight: bold;
        }
      }
    }
  }
</style>
