import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from "../views/Students.vue"
import Module from "../views/ModuleAcademic.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Module',
    component: Module
  },
  {
    path: '/list-students',
    name: 'Students',
    component: Students
  },
  {
    path: '/form-register',
    name: 'FormRegister',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    props: true
  },
  {
    path: '/form-edit',
    name: 'FormEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
