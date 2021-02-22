import '../css/style.css'

import barba from './modules/barba'
import navBarEvents from './modules/navBarEvents'
import navbarToggle from './modules/navbarToggle'
import searchToggle from './modules/searchToggle'
import searchOverlay from './modules/searchOverlay'



new navBarEvents
const toggle = new navbarToggle
const search = new searchToggle
const magicalSearch = new searchOverlay

//browser test
var navigator = window.navigator.userAgent
console.log(navigator)

if (module.hot) {
    module.hot.accept()
  }