
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: 'video/:id?', component: () => import('pages/VideoPage.vue'), name: 'video' },
      { path: 'season/:id', component: () => import('pages/SeasonPage.vue'), name: 'season' },
      { path: 'sport/:id', component: () => import('pages/SportPage.vue'), name: 'sport', props: true },
      { path: 'view-all-episodes', component: () => import('pages/ViewAllEpisodesPage.vue'), name: 'view-all-episodes' },
      { path: 'view-all-seasons', component: () => import('pages/ViewAllSeasonsPage.vue'), name: 'view-all-seasons' },
      { path: 'view-all-live', component: () => import('pages/LivePage.vue'), name: 'live-page' }
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
