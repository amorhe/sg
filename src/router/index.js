import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '@/components/my/index'
import plan from '@/components/plan/index'
import study from '@/components/study/index'
import shequ from '@/components/shequ/index'
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
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/study',
      component: study,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/shequ',
      component: shequ,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/plan',
      component: plan,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/find',
      component: find,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/my',
      component: myIndex,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path:'/dynamic',
      component:dynamic,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path:'/discuss',
      component:discuss
    },
    {
      path: '/invite',
      component: invite,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
      path: '/custom',
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
