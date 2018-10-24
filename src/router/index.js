import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '@/components/my/index'
import plan from '@/components/plan/index'
import study from '@/components/study/index'
import zixun from '@/components/zixun/index'
import find from '@/components/find/index'
import dynamic from '@/components/plan/dynamic'
import discuss from '@/components/plan/discuss'
import invite from '@/components/plan/invite'
import custom from '@/components/plan/custom'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: plan,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/study', //学习
      component: study,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/zixun',  //资讯
      component: zixun,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/plan', //计划
      component: plan,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/find', //发现
      component: find,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/my',  //我的
      component: myIndex,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path:'/dynamic', //动态
      component:dynamic,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path:'/discuss', //评论
      component:discuss
    },
    {
      path: '/invite', //邀请
      component: invite,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/custom',//自定义计划
      component: custom
    },
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
