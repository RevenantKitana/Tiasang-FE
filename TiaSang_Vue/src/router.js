import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NenTangKienTaoPage from './pages/categories/NenTangKienTaoPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
