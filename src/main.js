import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Intro from './components/intro.vue'
import Content from './components/content.vue'
import Item from './components/item.vue'

Vue.use(Router)
Vue.transition('fade', {
	enterClass: 'fadeInUp',
	leaveClass: 'fadeOutDown'
})

Vue.transition('slide', {
	enterClass: 'slideInLeft',
	leaveClass: 'slideOutLeft',
})

Vue.transition('flip', {
	enterClass: 'myFlipInX',
	leaveClass: 'myFlipOutX',
})

var router = new Router({})

router.map({
	'/intro': {
		component: Intro,
		subRoutes: {
			'/:id': {
				component: Content,
				subRoutes: {
					'/:name': {
						component: Item
					}
				}
			}
		}
	}
})

router.redirect({
	'*': '/intro'
})

router.start(App, '#app')