import '../css/style.css'

import barba from './modules/barba'
import navBarEvents from './modules/navBarEvents'
import navbarToggle from './modules/navbarToggle'
import searchToggle from './modules/searchToggle'




new navBarEvents
const toggle = new navbarToggle
const search = new searchToggle



if (module.hot) {
    module.hot.accept()
  }