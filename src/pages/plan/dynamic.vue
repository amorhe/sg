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

      <div class="view_div">
        <div class="view_div_top">
          <ul>
            <li :class="tabbarIndex==0?'activeColor':''" @click="tabbarClick(0)">最新</li>
            <li :class="tabbarIndex==1?'activeColor':''" @click="tabbarClick(1)">推荐</li>
            <li :class="tabbarIndex==2?'activeColor':''" @click="tabbarClick(2)">热门</li>
          </ul>
        </div>
      </div>
      <ul class="view_div_list">
        <li>
          <div>
            <div class="view_div_user">
              <img src="http://t1.27270.com/uploads/tu/201809/1170/9054d6a1cd.jpg" alt="">
              <div>
                <p>火花是好还</p>
                <p class="colorY fontSm">青铜LV1</p>
              </div>
            </div>
            <div class="view_div_card" style="background: #fdb873;">
              <p>12天</p>
              <p>打卡</p>
            </div>
            <!--<div class="view_div_card" style="background: #F75656;">-->
              <!--<p>替身</p>-->
              <!--<p>符文</p>-->
            <!--</div>-->
            <!--<div class="view_div_card" style="background: #00CCFF;">-->
              <!--<p>功成</p>-->
              <!--<p>身退</p>-->
            <!--</div>-->
          </div>
          <div class="view_div_content">
            <div>
              <span class="colorY">#</span>
              <h4>每天坚持背单词30个</h4>
              <span class="fontSm">进度12/20</span>
              <span class="colorY">#</span>
            </div>
            <div class="view_div_text" :style="{'-webkit-line-clamp':lineNum}">只因这夜色太迷人然而在哪里跌倒就在哪里爬起来,
              只因这夜色太迷人，只因这夜色太迷人,只因这夜色太迷人,我没能忍住尘世的诱惑，
              然而在哪里跌倒就在哪里爬起来，所以我还会回来的，谢谢哪里跌倒就在哪里爬起来，所以我还会回来的，谢谢所有鼓励我的人。</div>
            <p class="colorY" @click="openShow" v-if="lineNum<=4">展开</p>
            <div class="view_div_content_wrap" :style="lineNum<=4?{'margin-top':20 + 'px'}:{'margin-top':0 + 'px'}">
              <span>昨天 23:24</span>
              <div>
                <span>205人鼓励</span>
                <div>
                  <i class="iconfont icon-xin"></i>
                  <span>21</span>
                </div>
                <div>
                  <i class="iconfont icon-weibiaoti-"></i>
                  <span>23</span>
                </div>
              </div>
            </div>
          </div>
          <div class="view_div_bottom">
            <div>
              <div>
                <img src="http://t1.27270.com/uploads/tu/201809/1174/fb7147568c.jpg" alt="">
                <p>火花是好还是坏</p>
              </div>
              <p class="colorY">青铜LV5</p>
            </div>
            <p>今天背诵单词成果35个,态度决定一切,消极对待的注重基础知识当你看到这里的时候。</p>
            <p @click="seeDiscuss()">
              <span>更多23条评论</span>
              <i class="iconfont icon-next"></i>
            </p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import headers from '../../components/public/top'
    export default {
      data(){
          return{
            imgArr:[{'src':'http://t1.27270.com/uploads/tu/201809/1293/9ac2098a9f.jpg'},
              {'src':'http://t1.27270.com/uploads/tu/201809/1330/691c69c0f2.jpg'},
              {'src':'http://t1.27270.com/uploads/tu/201809/1170/9054d6a1cd.jpg'}],
            tabbarIndex:0,
            lineNum:4
          }
      },
      components:{
        headers
      },
      methods:{
        tabbarClick(index){
          this.tabbarIndex = index;
        },
        //点击展开
        openShow(){
          this.lineNum = 99
        },
        //查看所有评论
        seeDiscuss(){
          this.$router.push({path: '/discuss'});
        }
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
  .view_div {
    padding: 15px 15px 8px;
    border-bottom: 1px #eae3e3 solid;

    .view_div_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>ul {
        display: flex;
        li {
          margin-right: 15px;
        }
        .activeColor {
          color: #ff9800;
        }
      }
    }
  }
  .view_div_list {
    li {
      width: 100%;
      border-bottom: 1px #f4f1f1 solid;
      padding: 24px 10px 24px 15px;
      box-sizing: border-box;

      &>div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        .view_div_user {
          display: flex;
          div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
          }
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 7px;
          }
        }
        .view_div_card {
          width: 40px;
          height: 40px;
          border: 1px #bbb solid;
          border-radius: 6px;
          font-size: 12px;
          text-align: center;
          line-height: 20px;
          &>p:nth-child(1){
            border-bottom: 1px #bbb solid;
          }
        }
      }
      .view_div_content {
        &>div:first-child {
          display: flex;
          align-items: flex-end;
          margin: 10px 0 6px;
          background: #f4f1f1;
          height: 25px;
          line-height: 25px;
          &>h4 {
            margin: 0 4px;
          }
          .colorY {
            font-weight: bolder;
            margin-left: 6px;
          }
        }
        .view_div_text {
          text-align: left;
          overflow: hidden;
          text-overflow: clip;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        &>p {
          float: right;
        }
        .view_div_content_wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>div {
            width: 170px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &>div {
              display: flex;
              align-items: center;
            }
            i {
              font-size: 20px;
              margin-right: 7px
            }
          }
        }
      }
      .view_div_bottom {
        margin: 20px 0 0 20px;
        width: 309px;
        background: #f2f2f2;
        padding: 12px 10px;
        font-size: 12px;
        box-sizing: border-box;
        &>div {
          display: flex;
          justify-content: space-between;
          &>div {
            display: flex;
            align-items: center;
          }
          img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 7px;
          }
        }
        &>p:nth-child(2) {
          margin: 8px 0;
          text-align: left;
          padding-left: 30px;
          line-height: 20px;
        }
        &>p:nth-child(3){
          text-align: right;
        }
      }
    }
  }
</style>
