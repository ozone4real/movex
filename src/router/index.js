import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Home from '../views/Home.vue'
import ViewMoviePage from '../views/ViewMoviePage.vue'
import EditMoviePage from '../views/EditMoviePage.vue'
import AddMoviePage from '../views/AddMoviePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Home
  },
  {
    path: '/movies/:id',
    name: 'movie',
    component: ViewMoviePage
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movies/:id/edit',
    name: 'editMovie',
    component: EditMoviePage,
    props: (r) => ({ id:  parseInt(r.params.id)})
  },
  {
    path: '/add-movie',
    name: 'addMovie',
    component: AddMoviePage
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    return {x: 0, y: 0 }
  }
})

export default router
