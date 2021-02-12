!function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wp-content/themes/recipes/bundled-assets/",s(s.s=2)}([function(e,t,s){},function(e,t){const s=gsap.timeline(),i=e=>s.from(e,{duration:1,yPercent:100,autoAlpha:0});barba.init({transitions:[{once({next:e}){i(e.container)},leave({current:e}){const t=this.async();((e,t)=>{s.to(e,{autoAlpha:0,duration:1,yPercent:100,onComplete:()=>t()})})(e.container,t)},enter({next:e}){i(e.container)}}]})},function(e,t,s){"use strict";s.r(t);s(0),s(1);var i=class{constructor(){this.navItems=document.querySelectorAll(".nav-menu__item"),this.menuItemsArray=Array.prototype.slice.call(this.navItems),this.events(),this.current,this.homePage=document.querySelector("a[href='/']")}setDefaultPage(){window.onload=()=>{this.menuItemsArray[3].classList.add("current")}}events(){this.menuItemsArray.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),e.classList.contains("current")&&console.log("same page"),this.current&&(console.log("this is the prev page: "+this.current),this.current.classList.remove("current")),e.classList.add("current"),this.current=document.querySelector(".current"),console.log("this is the current page"+this.current)})})}animateNavbar(){this.toggle()}};var r=class{constructor(){this.navItems=document.querySelectorAll(".nav-menu__item"),this.menuItemsArray=Array.prototype.slice.call(this.navItems),this.btn=document.querySelector(".btn__nav"),this.navContainer=document.querySelector(".nav-menu"),this.toggle=gsap.timeline({reversed:!0,paused:!0}),this.pageContainer=document.querySelector('div[data-barba="container"]'),this.slideUp(),this.events(),this.iterate()}events(){this.btn.addEventListener("click",()=>this.menuToggle())}bodyEventadd(){this.toggle.isActive()&&(console.log("body event added"),document.querySelector("body").addEventListener("click",()=>this.menuToggle()))}bodyEventremove(){console.log("body event removed"),document.querySelector("body").removeEventListener("click",()=>this.menuToggle())}menuToggle(){this.toggle.reversed()?this.toggle.play():this.toggle.reverse()}iterate(){this.menuItemsArray.forEach(e=>{e.classList.contains("current")&&console.log(e)})}slideUp(){this.toggle.fromTo(this.navContainer,{duration:.2,opacity:0},{opacity:1}).from(this.menuItemsArray,.3,{autoAlpha:0,duration:.3,top:"10em",opacity:1,stagger:.2})}};var n=class{constructor(){this.body=document.querySelector("body"),this.addOverlay(),this.span=document.querySelector(".search-bar__btn"),this.searchBar=document.querySelector(".search-bar"),this.searchOverlay=document.querySelector(".search-overlay"),this.input=document.querySelector(".search-bar__input"),this.typingTimer,this.searchToggle=gsap.timeline({reversed:!0,paused:!0}),this.toggleIn(),this.events(),this.isWaiting=!1,this.foodResults=document.querySelector("#all-food-items"),this.drinkResults=document.querySelector("#all-drink-items"),this.generalInfo=document.querySelector("#other"),this.previousValue}events(){this.span.addEventListener("click",()=>this.searching()),document.addEventListener("keydown",e=>this.keyDown(e)),document.addEventListener("keydown",e=>this.closeSearch(e)),this.input.addEventListener("keyup",()=>this.typingLogic())}typingLogic(){this.input.value!=this.previousValue&&(clearTimeout(this.typingTimer),this.foodResults.innerHTML="",this.drinkResults.innerHTML="",this.generalInfo.innerHTML="",""!=this.input.value?(this.isWaiting||(this.results=document.querySelector("#results"),this.results.innerHTML="<div class='is-waiting'>Getting results ..</div>",this.isWaiting=!0),this.typingTimer=setTimeout(()=>{let e=fetch(mainData.root_url+"/wp-json/recipe/v1/search?term="+this.input.value);Promise.all([e]).then(e=>{e.forEach(e=>{t(e.json())})});let t=e=>{e.then(e=>{0!=e.generalInfo?e.generalInfo.forEach(e=>{this.generalInfo.innerHTML+=`<li class="search__list-item">\n                                                                            <div class="search__description">\n                                                                                <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                                \n                                                                                <h4 class="search__description--carbs" >Posts:  ${e.post}</h4>        \n                                                                            </div>\n                                                                    </li>`}):this.generalInfo.innerHTML="No results for misc inforamtion",0!=e.drinks?(console.log(e.drinks),e.drinks.forEach(e=>{console.log(e.category),this.drinkResults.innerHTML+=`<li class="search__list-item">\n                                                                    <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                        <div class="search__description">\n                                                                            <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                            <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                            <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4>        \n                                                                        </div>\n                                                                </li>`})):this.drinkResults.innerHTML="No drink recipes to show";const t=e.normal.concat(e.lowCarb.concat(e.keto));0!=t?t.forEach(e=>{this.foodResults.innerHTML+=` <li class="search__list-item">\n                                                                    <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                        <div class="search__description">\n                                                                            <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                            <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                            <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4>        \n                                                                        </div>\n                                                                </li>`}):this.foodResults.innerHTML="No food results to show",this.isWaiting=!1}).catch(e=>{console.log(e),this.results.innerHTML="No results for your search"})};this.results.innerHTML="Results are here",this.isWaiting=!1},450)):(this.foodResults.innerHTML="",this.drinkResults.innerHTML="",this.generalInfo.innerHTML="",this.isWaiting=!1),this.previousValue=this.input.value)}deleteKeyevent(e){console.log(e.keyCode)}keyDown(e){83==e.keyCode&&this.searchToggle.reversed()&&this.searching()}closeSearch(e){27==e.keyCode&&this.searchToggle.play()&&this.searching()}searching(){this.searchToggle.reversed()?this.searchToggle.play():this.searchToggle.reverse()}toggleIn(){this.searchToggle.fromTo(this.searchOverlay,1,{duration:.5,opacity:0},{duration:.5,display:"flex",opacity:1}).to(this.searchBar,{display:"block",onComplete:()=>this.input.value=" "},"<").to(this.searchBar,.5,{top:"0em",onComplete:()=>{this.searchOverlay.classList.add("search-overlay--active"),this.input.focus()}},"<")}addOverlay(){console.log("overlay"),this.body.insertAdjacentHTML("afterend",'<div class="search-overlay">\n                    <div class="search-overlay--active__wrapper">\n                        <h1 class="search-overlay--active__headline">Search recipes</h1>\n                    </div>\n                    <div class="container" >\n                        <div  class="search-overlay--active__results">\n                            <div id="results"></div>\n                            <div id=\'all-food-items\'>\n                                <h2>All food items</h2>\n                            </div>\n                            <div id=\'all-drink-items\'>\n                                <h2>All drink items</h2>\n                            </div>\n                            <div id=\'other\'>\n                                <h2>Misc</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>')}};var o=class{constructor(){}events(){}};new i;new r,new n,new o}]);