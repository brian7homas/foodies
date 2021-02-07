import '../css/style.css'

import barba from './modules/barba'
import navbarToggle from './modules/navbarToggle'
import searchToggle from './modules/searchToggle'
import navBarEvents from './modules/navBarEvents'



new navBarEvents
const toggle = new navbarToggle
const search = new searchToggle



if (module.hot) {
    module.hot.accept()
  }