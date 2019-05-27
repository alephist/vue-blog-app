import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail';
import EditComment from './components/EditComment';
import Login from './components/Login';
import Register from './components/Register';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Posts', component: Posts },
    { path: '/add-post', name: 'AddPost', component: AddPost },
    { path: '/posts/:id', name: 'PostDetail', component: PostDetail },
    { path: '/posts/:id/edit', name: 'EditPost', component: EditPost },
    { path: '/posts/:id/comments/:commentId', name: 'EditComment', component: EditComment },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '*', redirect: '/' }
  ]
});
