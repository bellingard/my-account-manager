import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

alert('foo')

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/MainPage').default,
      children: [
        {
          path: '/',
          component: require('@/components/pages/Dashboard').default
        },
        {
          path: 'dashboards',
          component: require('@/components/pages/Dashboard').default
        },
        {
          path: 'accounts/:accountId',
          component: require('@/components/pages/Accounts').default,
          props: true
        },
        {
          path: 'accounts',
          component: require('@/components/pages/Accounts').default,
          props: true
        },
        {
          path: 'categories',
          component: require('@/components/pages/Categories').default
        },
        {
          path: 'institutions',
          component: require('@/components/pages/Institutions').default
        },
        {
          path: 'payees',
          component: require('@/components/pages/Payees').default
        },
        {
          path: 'payeefinders',
          component: require('@/components/pages/PayeeFinders').default
        },
        {
          path: 'settings',
          component: require('@/components/pages/Settings').default
        }
      ]
    },
    // And the default routes
    {
      path: '*',
      redirect: '/'
    }
  ]
})
