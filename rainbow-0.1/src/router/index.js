import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index";
import Teacher from "../views/Teacher";
import Course from "../views/Course";
import Team from "../views/Team";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'hash', // 默认值hash，路由为 localhost：8080/#/，此为localhost：8080
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/teacher',
            component: Teacher
        },
        {
            path: '/course',
            component: Course
        },
        {
            path: '/team',
            component: Team
        }
    ]
})
