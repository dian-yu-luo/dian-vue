import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import repeatWord from "@/components/RepeatWord.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, {
        path: "/repeatword",
        component: repeatWord
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
