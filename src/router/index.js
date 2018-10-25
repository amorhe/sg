import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '@/pages/my/index'
import plan from '@/pages/plan/index'
import study from '@/pages/study/index'
import zixun from '@/pages/zixun/index'
import find from '@/pages/find/index'
import dynamic from '@/pages/plan/dynamic'
import discuss from '@/pages/plan/discuss'
import invite from '@/pages/plan/invite'
import custom from '@/pages/plan/custom'
import messageIndex from '@/pages/message/index'
import messageChange from '@/pages/message/change'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: plan,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path: '/study', //学习
      component: study,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path: '/zixun',  //资讯
      component: zixun,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path: '/plan', //计划
      component: plan,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path: '/find', //发现
      component: find,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path: '/my',  //我的
      component: myIndex,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path:'/dynamic', //动态
      component:dynamic,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path:'/discuss', //评论
      component:discuss
    },
    {
      path: '/invite', //邀请
      component: invite,
      meta: { navShow: true, cname: '底部bannar' }
    },
    {
      path: '/custom',//自定义计划
      component:custom
    },
    {
      path: '/message', //消息中心
      component: messageIndex,
    },
    {
      path:'/messageChange',
      component:messageChange
    }
  ],
  //跳转页面scrolltop为0
  scrollBehavior
    (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  // mode: "history"
})
