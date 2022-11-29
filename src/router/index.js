import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ModifyUser from '@/components/ModifyUser'
import BuyBook from '@/components/BuyBook'
import CreateBook from '@/components/CreateBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/edit-user/:id',
      name: 'ModifyUser',
      component: ModifyUser
    },
    {
      path: '/buyBook',
      name: 'BuyBook',
      component: BuyBook
    },
    {
      path: '/add-book',
      name: 'CreateBook',
      component: CreateBook
    },

  ]
})
