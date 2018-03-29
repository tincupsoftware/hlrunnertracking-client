import Vue from 'vue';
import Router from 'vue-router';
import SplashPage from '@/components/SplashPage';
import RunnerCheckIn from '@/components/RunnerCheckIn';
import Access from '@/components/Access';
import RunnerList from '@/components/RunnerList';
import Trail from '@/components/Trail';
import AidStation from '@/components/AidStation';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SplashPage',
      component: SplashPage,
    },
    {
      path: '/runnercheckin',
      name: 'RunnerCheckIn',
      component: RunnerCheckIn,
    },
    {
      path: '/access',
      name: 'Access',
      component: Access,
    },
    {
      path: '/runnerlist',
      name: 'Runner List',
      component: RunnerList
    },
    {
      path: '/trail',
      name: 'Trail',
      component: Trail,
    },
    {
      path: '/aid-station',
      name: 'AidStation',
      component: AidStation,
    },
  ],
});
