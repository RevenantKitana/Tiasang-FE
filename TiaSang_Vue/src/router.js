import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NenTangKienTaoPage from './pages/categories/NenTangKienTaoPage.vue'
import DetailPostPage from './pages/DetailPostPage.vue'
import ForumPage from './pages/ForumPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/category/nen-tang-kien-tao',
    name: 'NenTangKienTao',
    component: NenTangKienTaoPage
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumPage
  },
  {
    path: '/post/:id',
    name: 'DetailPost',
    component: DetailPostPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
