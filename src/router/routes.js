
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Dashboard', component: () => import('pages/Index.vue') },
      { path: '/checkup', name: 'Quick Checkup', component: () => import('pages/Checkup.vue') },
      { path: '/reference', name: 'Quick Reference', component: () => import('pages/Reference.vue') },
      { path: '/about', name: 'About', component: () => import('pages/About.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
