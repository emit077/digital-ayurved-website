import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: "Home"},
    component: () => import(/* webpackChunkName: "home" */ '../views/LandingPage')
  },
  {
    path: '/about-us',
    name: 'about_us',
    meta: {title: "About Us"},
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs')
  },
  {
    path: '/contact-us',
    name: 'contact_us',
    meta: {title: "Contact Us"},
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs')
  },
  {
    path: '/blogs',
    name: 'blogs',
    meta: {title: "Blogs"},
    component: () => import(/* webpackChunkName: "blogs" */ '../views/BlogHome')
  },
  {
    path: '/blogs/post/:id',
    name: 'blog_feed',
    meta: {title: "Post"},
    component: () => import(/* webpackChunkName: "blogs" */ '../views/BlogFeed')
  },
  {
    path: '/inquiry',
    name: 'inquiry',
    meta: {title: "inquiry"},
    component: () => import(/* webpackChunkName: "inquiry" */ '../views/InquiriesPage')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return {top: 0}
  },
})

/* redirecting to home page if access token is not provided*/
router.beforeEach((to, from, next) => {
  next()
  //setting the title
  if (to && to.meta && to.meta.title)
    window.document.title = "Spidertech | " + to.meta.title;

});


export default router
