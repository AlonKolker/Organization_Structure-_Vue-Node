import { createRouter, createWebHashHistory } from 'vue-router'


import employeeInfo from '../views/employee-info.vue'
import Employee from '../views/employee.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/Employee/:id',
      name: 'employeeInfo',
      component: employeeInfo
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: about
    // },
    // {
    //   path: '/details/:id',
    //   name: 'details',
    //   component: details
    // },
    // {
    //   path: '/edit/:id?',
    //   name: 'edit',
    //   component: edit
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: loginPage,
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: signupPage,
    // },
  ]
})

export default router
