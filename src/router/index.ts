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
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: () => import('../views/Cliente/ListarView.vue')
  },
  {
    path: '/cliente',
    name: 'cadastro cliente',
    component: () => import('../views/Cliente/CadastroView.vue')
  },
  {
    path: '/cliente/:id',
    props: true,
    name: 'alterar cliente',
    component: () => import('../views/Cliente/AlterarView.vue')
  },
  {
    path: '/funcionarios',
    name: 'funcionarios',
    component: () => import('../views/Funcionario/ListarView.vue')
  },
  {
    path: '/funcionario',
    name: 'cadastro funcionario',
    component: () => import('../views/Funcionario/CadastroView.vue')
  },
  {
    path: '/funcionario/:id',
    props: true,
    name: 'alterar funcionario',
    component: () => import('../views/Funcionario/AlterarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
