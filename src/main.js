import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router' 


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faBars, faCalendarAlt,faCalendarCheck,faCalendarPlus,faClose,faExternalLink,faLocationPin, faStar} from '@fortawesome/free-solid-svg-icons'











/* add icons to the library */
library.add(faLocationPin, faCalendarAlt,faCalendarCheck, faCalendarPlus, faExternalLink, faClose, faStar, faBars)

const app= createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')