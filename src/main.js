import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { store } from './store/store'
import routes from './router.js'

import flickityAsNavFor from 'flickity-as-nav-for';
import flickityFade from 'flickity-fade';
// Vue.use(flickityAsNavFor)

// _______________
// Markdown parser
// import VueSimpleMarkdown from 'vue-simple-markdown'
// Vue.use(VueSimpleMarkdown)
// import 'vue-simple-markdown/dist/vue-simple-markdown.css'

// import Marked from 'marked'
// Vue.use(Marked)

// ________________
// Parallax library
import VueRellax from 'vue-rellax'
Vue.use(VueRellax)

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
});

new Vue({
	router,
	store: store,
	el: '#app',
	render: h => h(App)	
})

