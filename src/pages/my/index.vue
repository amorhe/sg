<template>
    <div>
      <div class="center_top">
         <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="center_box">
        <div class="center_box_up">
          <div>
             <img src="http://img5.imgtn.bdimg.com/it/u=2830805145,74531996&fm=26&gp=0.jpg" alt="">
             <div>
               <p>漂流一生</p>
               <p>仙童一级</p>
             </div>
          </div>
          <button>个人主页</button>
        </div>

        <div class="center_box_down">
          <div>
            <p>5</p>
            <p>状态</p>
          </div>
          <div>
            <p>25</p>
            <p>余额</p>
          </div>
          <div>
            <p>1000</p>
            <p>灵钻</p>
          </div>
          <div>
            <p>4</p>
            <p>木偶</p>
          </div>
        </div>
      </div>

      <div class="center_list">
          <div>
            <img src="http://img2.imgtn.bdimg.com/it/u=1308328159,3290673053&fm=26&gp=0.jpg" alt="">
            <p>灵钻领取</p>
          </div>
          <p class="iconfont icon-next"></p>
      </div>

      <div class="center_list">
        <div>
          <img src="http://img1.imgtn.bdimg.com/it/u=3125507027,1771900794&fm=26&gp=0.jpg" alt="">
          <p>邀请有礼</p>
        </div>
        <p class="iconfont icon-next"></p>
      </div>

      <div class="center_list">
        <div>
          <img src="http://img1.imgtn.bdimg.com/it/u=1223211050,1629218735&fm=26&gp=0.jpg" alt="">
          <p>打卡提醒</p>
        </div>
        <p class="iconfont icon-next"></p>
      </div>

      <div class="center_list">
        <div>
          <img src="http://img0.imgtn.bdimg.com/it/u=3749434519,922479171&fm=26&gp=0.jpg" alt="">
          <p>五星好评</p>
        </div>
        <p class="iconfont icon-next"></p>
      </div>

      <div class="center_list">
        <div>
          <img src="http://img1.imgtn.bdimg.com/it/u=3681884823,2661158030&fm=26&gp=0.jpg" alt="">
          <p>问题汇总</p>
        </div>
        <p class="iconfont icon-next"></p>
      </div>

      <div class="center_list">
        <div>
          <img src="http://img4.imgtn.bdimg.com/it/u=2709349131,4385113&fm=26&gp=0.jpg" alt="">
          <p>联系客服</p>
        </div>
        <p class="iconfont icon-next"></p>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            index:''
          }
        },
      created(){
        this.$store.state.pageIndex = 4;
      }
    }
</script>

<style lang="less">
  .center_top {
    background: #ff9800;
    height: 160px;
    margin-bottom: 107px;
    i {
      font-size: 24px;
      float: right;
      margin: 10px;
    }
  }

  .center_box {
    width: 330px;
    height: 150px;
    position: absolute;
    left: 15px;
    top: 95px;
    z-index: 100;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    border: 1px solid rgb(187,187,187);
    background-color: rgb(244,241,241);
    padding: 15px 18px;
    box-sizing: border-box;

    .center_box_up {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        div {
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          p:nth-child(1){
            font-size: 16px;
          }
          p:nth-child(2){
            color: #ff9800;
            font-size: 12px;
          }
        }
        img {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          margin-right: 8px;
        }
      }

      button {
        height: 28px;
        background: #ff9800;
        font-size: 12px;
        text-align: center;
      }
    }

    .center_box_down {
      display: flex;
      justify-content: space-between;
      margin-top: 13px;
      div {

        p:nth-child(1){
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }

  .center_list {
    margin: 0 15px;
    padding: 11px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(187,187,187);
    div {
      display: flex;
      align-items: center;
      &>img {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
    }
  }
</style>
