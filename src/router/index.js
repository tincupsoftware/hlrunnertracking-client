import Vue from 'vue'
import Router from 'vue-router'
import SplashPage from '@/components/SplashPage'
import RunnerCheckIn from '@/components/RunnerCheckIn'
import Access from '@/components/Access'
import Roster from '@/components/Roster'
import Trail from '@/components/Trail'
import AidStation from '@/components/AidStation'
import RunnerList from '@/components/RunnerList'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/access',
      name: 'Access',
      component: Access
    },
    {
      path: '/roster',
      name: 'Roster',
      component: Roster
    },
    {
      path: '/runnerlist',
      name: 'RunnerList',
      component: RunnerList
    },
    {
      path: '/trail',
      name: 'Trail',
      component: Trail
    },
    {
      path: '/aid-station',
      name: 'AidStation',
      component: AidStation
    }
  ]
})
