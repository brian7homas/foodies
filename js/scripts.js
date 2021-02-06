import '../css/style.css'

import navbarToggle from './modules/navbarToggle'
import searchToggle from './modules/searchToggle'
import barba from './modules/barba'

const toggle = new navbarToggle
const search = new searchToggle


if (module.hot) {
    module.hot.accept()
  }