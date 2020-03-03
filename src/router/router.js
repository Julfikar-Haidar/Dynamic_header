/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*Custom Components Importing*/
// import Home from '../components/pages/Home'
import HelloWorld from '../components/HelloWorld'
// import Header from '../components/Header'






/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);


const routes = [

    {path: '/', component: HelloWorld, name: 'HelloWorld'},
    // {path: '/header', component: Header, name: 'Header'},


];

export const router = new VueRouter({
    // mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});
