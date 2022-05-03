
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: 'video/:id', component: () => import('pages/VideoPage.vue'), name: 'video' },
      { path: 'season/:id', component: () => import('pages/SeasonPage.vue'), name: 'season' },
      { path: 'sport/:name', component: () => import('pages/SportPage.vue'), name: 'sport' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
