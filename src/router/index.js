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
import messageDiscuss from '@/pages/message/discuss'
import incite from '@/pages/message/guli'
import makePlan from '@/pages/plan/makePlan'
import planRule from '@/pages/plan/planRule'
import planDynamic from '@/pages/plan/planDynamic'
import youxuan from '@/pages/plan/youxuan'
import inviteGroup from '@/pages/plan/inviteGroup'
import punch from '@/pages/plan/punch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: plan,
      meta: { navShow: true, cname: '底部bannar',index:1}
    },
    {
      path: '/study', //学习
      component: study,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/zixun',  //资讯
      component: zixun,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/plan', //计划
      component: plan,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/find', //发现
      component: find,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/my',  //我的
      component: myIndex,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path:'/dynamic', //动态
      component:dynamic,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path:'/discuss', //评论
      component:discuss,
      meta:{index:2}
    },
    {
      path: '/invite', //邀请
      component: invite,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/custom',//自定义计划
      component:custom,
      meta:{index:2}
    },
    {
      path: '/message', //消息中心
      component: messageIndex,
      meta:{index:2}
    },
    {
      path:'/messageChange', //变动提醒
      component:messageChange,
      meta:{index:3}
    },
    {
      path:'/messageDiscuss', //评论你
      component:messageDiscuss,
      meta:{index:4}
    },
    {
      path:'/incite',  //鼓励你
      component:incite,
      meta:{index:4}
    },
    {
      path:'/makePlan',  //制定计划
      component:makePlan,
      children:[
        {
          path:'planRule',
          component:planRule,
          meta:{index:3}
        },
        {
          path:'planDynamic',
          component:planDynamic,
          meta:{index:3}
        },
        {
          path:'youxuan',
          component:youxuan,
          meta:{index:3}
        }
      ]
    },
    {
      path:'/inviteGroup',  //邀请组队
      component:inviteGroup,
      meta:{index:4}
    },
    {
      path:'/punch',
      component: punch,
      meta:{index:4}
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
