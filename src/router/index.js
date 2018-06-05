import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import RunnerCheckIn from '@/components/RunnerCheckIn'
import Access from '@/views/Access'
import Roster from '@/components/Roster'
import RunnerTrackingConsole from '@/views/RunnerTrackingConsole'
import AidStation from '@/views/AidStation'
import RunnerList from '@/components/RunnerList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
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
      path: '/runnertrackingconsole',
      name: 'RunnerTrackingConsole',
      component: RunnerTrackingConsole
    },
    {
      path: '/aid-station',
      name: 'AidStation',
      component: AidStation
    }
  ]
})
