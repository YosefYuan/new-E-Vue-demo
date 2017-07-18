import Vue from 'vue'
import Layout from './components/layout01'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.1'
import DetailPage from './pages/detail'
import DetailAnalysis from './pages/detail/analysis'
import DetailCount from './pages/detail/count'
import DetailForecast from './pages/detail/forecast'
import DetailPublish from './pages/detail/publish'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: IndexPage
        },
        {
            path: '/detail',
            component: DetailPage,
            redirect:'/detail/analysis',
            children: [{
                    path: 'analysis',
                    component: DetailAnalysis
                },
                {
                    path: 'count',
                    component: DetailCount
                },
                {
                    path: 'forecast',
                    component: DetailForecast
                },
                {
                    path: 'publish',
                    component: DetailPublish
                },
            ]
        }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout }
})