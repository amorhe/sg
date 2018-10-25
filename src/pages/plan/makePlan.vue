<template>
    <div>
      <div class="header bgGary">
        <p class="iconfont icon-fanhui plan_back"></p>
      </div>
      <div class="planF_box">
        <div>
          <div class="invite_content_top">
            <p class="line_view"></p>
            <h4>坚持锻炼25天</h4>
          </div>
          <p class="iconfont icon-bofang playBtn"></p>
        </div>
        <div class="planF_box_mid">
          <div>
            <p>诚意金</p>
            <p>5.0元</p>
          </div>
          <div>
            <p>坚持天数</p>
            <p>0/25</p>
          </div>
          <div>
            <p>鼓励人次</p>
            <p>0</p>
          </div>
        </div>
        <button class="planF_box_btn">自律让学习更美好</button>
      </div>

      <div class="planF_down">
        <router-link to="/makePlan/planRule">规则详情</router-link>
        <router-link to="/makePlan/planDynamic">计划动态</router-link>
        <router-link to="/makePlan/youxuan">优选素材</router-link>
      </div>
      <div class="plan_content">
        <router-view></router-view>
      </div>


      <div class="planF_bottom">
        <div>孤独模式</div>
        <div>
          <p>好友组队模式</p>
          <p class="double">双倍灵钻奖励</p>
        </div>
        <div>邀战模式</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "makePlan"
    }
</script>

<style scoped>
  .plan_content {
    padding: 10px 16px;
    background: #fff;
  }
  .plan_back {
    font-size: 24px;
    font-weight: bold;
    position: fixed;
    left: 7px;
    top: 10px;
    z-index: 100;
  }
  .bgGary {
    background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4217351297,2234745726&fm=26&gp=0.jpg") 0 0 / 100% 100% no-repeat;
    height: 200px;
  }
  .planF_box {
    position: fixed;
    left: 15px;
    top: 170px;
    width: 330px;
    height: 163px;
    border: 1px solid rgb(187,187,187);
    border-radius: 12px;
    background: #fff;
    padding: 10px 16px 13px;
    box-sizing: border-box;
  }
  .planF_box>div {
    display: flex;
    justify-content: space-between;
  }
  .line_view {
    width: 4px;
    height: 18px;
    background: rgb(121,121,121);
    margin-right: 7px;
  }
  .invite_content_top {
    display: flex;
    align-items: center;
  }
  .playBtn {
    font-size: 32px;
    color: rgb(239,179,54);
  }
  .planF_box_mid {
    padding: 10px;
    line-height: 25px;
  }
  .planF_box_mid>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .planF_box_btn {
    width: 330px;
    height: 40px;
    margin-left: -16px;
    background-color: #9aa2cc;
  }
  .planF_box_btn:active {
    color: rgb(16,16,16);
    background-color: #9aa2cc;
  }
  .planF_down {
    margin-top: 130px;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    background: #fff;
  }
  .planF_down>a {
    height: 40px;
  }
  .router-link-active {
    color: #ff9800;
    border-bottom: 3px solid #ff9800;
    background: #fff;
  }
  .planF_bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
  }
  .planF_bottom>div {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    border: 1px solid #bbb;
  }
  .planF_bottom>div:nth-child(1){
    width: 100px;
    background: #ff9800;
  }
  .planF_bottom>div:nth-child(2) {
    width: 160px;
    background: #fdcb04;
  }
  .planF_bottom>div:nth-child(3) {
    width: 100px;
    background:  #e691ae;
  }
  .double {
    font-size: 11px;
    color: #2851f2;
    width: 100%;
    text-align: center;
  }
</style>
