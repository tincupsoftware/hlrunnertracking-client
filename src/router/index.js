import Vue from 'vue'
import Router from 'vue-router'
import SplashPage from '@/components/SplashPage'
import RunnerCheckIn from '@/components/RunnerCheckIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SplashPage',
      component: SplashPage
    },
    {
      path: '/runnercheckin',
      name: 'RunnerCheckIn',
      component: RunnerCheckIn
    }
  ]
})
