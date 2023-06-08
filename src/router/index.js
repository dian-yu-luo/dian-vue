import {createRouter, createWebHistory} from 'vue-router'
import repeatWord from "@/components/RepeatWord.vue";
import repeatMain from "@/views/repeat/RepeatMain.vue";


const routes = [
    {
        path: "/",
        component: repeatMain,
        children: []
    },
    {
        path: "/main",
        component: repeatMain,
        children: [{
            path:"repeat",
            component:repeatWord
        }]

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
