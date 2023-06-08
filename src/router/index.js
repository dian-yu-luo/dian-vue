import {createRouter, createWebHistory} from 'vue-router'
import repeatWord from "@/components/RepeatWord.vue";
import repeatMain from "@/views/repeat/RepeatMain.vue";
import mainPage from "@/views/demodir/MainPage.vue";

const routes = [
    {
        path: "/",
        component: repeatMain,
        children: []
    },
    {
        path: "/main",
        component: mainPage,
        children: []

    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/repeat/AboutView.vue')
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
