import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Intro from './components/intro.vue'
import Content from './components/content.vue'
import About_site from './components/about_site.vue'

Vue.use(Router)
Vue.transition('fade', {
	enterClass: 'fadeInUp',
	leaveClass: 'fadeOutDown'
})

Vue.transition('slide', {
	enterClass: 'slideInLeft',
	leaveClass: 'slideOutLeft',
})

var router = new Router({})

router.map({
	'/intro': {
		component: Intro,
			subRoutes: {
			'/:id': {
				component: Content
			}
		}
	},
	'/about_site':{
		component: About_site
	},

})

router.redirect({
	'*': '/intro'
})

router.start(App, '#app')