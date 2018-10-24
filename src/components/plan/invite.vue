<template>
    <div>
      <headers :tabIndex="2"></headers>
      <div class="invite_content" v-for="item in 3">
        <div>
          <div class="invite_content_mid">
            <img class="invite_logo" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1703319119,1187423733&fm=27&gp=0.jpg" alt="">
            <p>火花是好还是坏</p>
            <p class="grade">青铜LV1</p>
          </div>
          <div class="accept" @click="accept()">接受PK</div>
        </div>
        <div>
          <div class="invite_content_top">
            <h4 class="colorY">#</h4>
            <h4>每天背诵30个英语单词</h4>
            <span>20天</span>
            <h4 class="colorY">#</h4>
          </div>
          <p class="invite_content_right_p">23:59:34</p>
        </div>

        <div class="modal-mid_ul">
          <p>
            <span>最多请假</span>
            <span>1天</span>
          </p>
          <p>
            <span>诚意金额</span>
            <span>18元</span>
          </p>
        </div>
        <div>
          <p>计划宣言：这次要对自己狠一点！</p>
        </div>
      </div>

      <mt-popup
        v-model="popupVisible"
        position="bottom">
        <div class="pk_box">
          <div>
            <div></div>
            <p>诚意金</p>
            <i class="iconfont icon-cuowu" @click="accept()"></i>
          </div>
          <div class="pk_payWay">
            <div>
              <div class="pk_left">
                <img src="../../assets/purse.png" alt="">
                <span>余额：20元</span>
              </div>
              <div class="circle_div" @click="choose(0)" :class="num==0?'circle_active':''">
                <p v-if="num==0"></p>
              </div>
            </div>
            <div>
              <div class="pk_left">
                <i class="iconfont icon-zhifubaozhifu color2"></i>
                <span>支付宝支付</span>
              </div>
              <div class="circle_div" @click="choose(1)" :class="num==1?'circle_active':''">
                <p v-if="num==1"></p>
              </div>
            </div>
            <div>
              <div class="pk_left">
                <i class="iconfont icon-weixinzhifu color3"></i>
                <span>微信支付</span>
              </div>
              <div class="circle_div" @click="choose(2)" :class="num==2?'circle_active':''">
                <p v-if="num==2"></p>
              </div>
            </div>
          </div>
          <div class="pk_bottom">
            <div>
              <p>
                <span>总计：</span>
                <span>￥</span>
                <span>18</span>
              </p>
              <p>完成计划返还</p>
            </div>
            <button>确认支付</button>
          </div>
        </div>
      </mt-popup>
    </div>
</template>

<script>
  import headers from '../public/top'
    export default {
      data(){
        return{
          popupVisible:false,
          num:1
        }
      },
      components:{
          headers
      },
      methods:{
        //  接受pk
        accept(){
          this.popupVisible = !this.popupVisible
        },
        //选择支付方式
        choose(num){
          this.num = num
        }
      }
    }
</script>

<style scoped lang="less">
  .invite_content {
    width: 100%;
    padding: 14px 20px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #e9ecf2;
  }
  .invite_content>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .invite_content_top {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .invite_content_right_p {
    color: #E51C23;
  }
  .invite_logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 9px;
  }
  .invite_content_mid {
    display: flex;
    align-items: center;
  }
  .invite_content_mid p {
    margin-right: 10px;
  }
  .grade {
    font-size: 12px;
    color: #ff9800;
    text-align: left;
  }
  .accept {
    width: 58px;
    height: 28px;
    border-radius: 32px;
    border: 1px solid #ff9800;
    color: #ff9800;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
  }
  .modal-mid_ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 11px 0 14px;

  &>p{
     display: flex;
  span {
    display: inline-block;
    width: 55px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border: 1px #bbb solid;
    font-size: 12px;
  }
  }

  &>p:nth-child(1){
  span:nth-child(1) {
    background: #ff9800;
    margin-right: -1px;
  }
  }
  &>p:nth-child(2){
  span:nth-child(1) {
    background: #f99d9c;
    margin-right: -1px;
  }
  }
  }
  .pk_box {
    width: 100vw;
    background: #fff;
    &>div:nth-child(1) {
      padding: 0 14px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px #f1f3f7 solid;
      font-size: 18px;
      i {
        font-size: 24px;
      }
    }
    .pk_payWay {
      margin: 22px;
      &>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
        .pk_left {
          display: flex;
          align-items: center;
          i {
            font-size: 28px;
            margin-right: 12px;
          }
          img {
            width: 28px;
            height: 28px;
            margin-right: 12px;
          }
          .color2 {
            color: rgb(18,150,219);
          }
          .color3 {
            color: rgb(61,203,29);
          }
        }
        .circle_div {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px #bbb solid;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ff9800;
          }
        }
        .circle_active {
          border: 1px #ff9800 solid;
        }
      }
    }
    .pk_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;
      &>button {
        width: 106px;
        height: 48px;
        background: #ff9800;
        color: #fff;
        font-size: 16px;
        outline: none;
        border: none;
      }
      &>div {
        display: flex;
        &>p {
          width: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &>p:nth-child(1){
          border-right: 3px #2851f2 solid;
          span:nth-child(1){
            font-size: 16px;
            font-weight: bold;
          }
          span:nth-child(2){
            font-size: 18px;
            color: rgb(234,154,33);
          }
          span:nth-child(3){
            color: #ff9800;
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
