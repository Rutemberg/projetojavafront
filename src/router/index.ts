import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import('../views/Produto/ListarView.vue')
  },
  {
    path: '/produto',
    name: 'cadastro produto',
    component: () => import('../views/Produto/CadastroView.vue')
  },
  {
    path: '/produto/:id',
    props: true,
    name: 'alterar produto',
    component: () => import('../views/Produto/AlterarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
