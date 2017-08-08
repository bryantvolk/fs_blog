import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Blog from '@/components/Blog'
import Nav from '@/components/Nav'
import Post from '@/components/Post'
import About from '@/components/About'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      components: { default: Blog, nav: Nav}
    },
    {
      path:'/posts/:id',
      name: 'Post',
      components: { default: Post, nav: Nav}
    },
    {
      path:'/about',
      name: 'About',
      components: { default: About, nav: Nav}
    }
  ]
})
