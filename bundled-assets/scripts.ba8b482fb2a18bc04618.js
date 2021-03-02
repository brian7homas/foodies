!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wp-content/themes/recipes/bundled-assets/",s(s.s=2)}([function(e,t,s){},function(e,t){const s=gsap.timeline(),i=e=>s.from(e,{duration:1,opacity:0,autoAlpha:0,onComplete:()=>gsap.set("body",{overflow:"visible"})});barba.init({transitions:[{once({next:e}){i(e.container)},leave({current:e}){const t=this.async();((e,t)=>{s.set("body",{overflow:"hidden"}).to(e,{autoAlpha:0,duration:1,opacity:0,onComplete:()=>t()})})(e.container,t)},enter({next:e}){i(e.container)}}]})},function(e,t,s){"use strict";s.r(t);s(0),s(1);var i=class{constructor(){this.navItems=document.querySelectorAll(".nav-menu__item"),this.menuItemsArray=Array.prototype.slice.call(this.navItems),this.events(),this.current,this.homePage=document.querySelector("a[href='/']")}setDefaultPage(){window.onload=()=>{this.menuItemsArray[3].classList.add("current")}}events(){this.menuItemsArray.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),e.classList.contains("current"),this.current&&this.current.classList.remove("current"),e.classList.add("current"),this.current=document.querySelector(".current")})})}animateNavbar(){this.toggle()}};var n=class{constructor(){this.body=document.querySelector("body"),this.searchIcon=document.querySelector(".icon-basic-magnifier"),this.navItems=document.querySelectorAll(".nav-menu__item"),this.menuItemsArray=Array.prototype.slice.call(this.navItems),this.btn=document.querySelector(".btn__nav"),this.navContainer=document.querySelector(".nav-menu"),this.toggle=gsap.timeline({reversed:!0,paused:!0}),this.pageContainer=document.querySelector('div[data-barba="container"]'),this.width=window.innerWidth,this.height=window.innerHeight,window.onresize=()=>this.windowEvent(),this.slideUp(),this.events()}windowEvent(){this.height,window.innerHeight,this.height!=window.innerHeight&&this.width==window.innerWidth?this.height=window.innerHeight:this.height!=window.innerHeight&&this.width!=window.innerWidth&&(this.width,window.innerWidth,this.width)}events(){this.btn.addEventListener("click",e=>this.menuToggle(e)),this.menuItemsArray.forEach(e=>e.addEventListener("click",e=>this.menuToggle(e)))}menuToggle(e){this.toggle.reversed()?this.toggle.play():this.toggle.reverse()}slideUp(){this.toggle.from(this.navContainer,{display:"none"}).to(this.searchIcon,{display:"none"},"<").to(this.body,{overflow:"hidden"},"<").fromTo(this.navContainer,{duration:.1,opacity:0},{opacity:1},"<").from(this.menuItemsArray,.2,{autoAlpha:0,duration:.3,stagger:.2})}};var r=class{constructor(){this.body=document.querySelector("body"),this.menuButton=document.querySelector(".nav-toggle"),this.footer=document.querySelector("footer"),this.addOverlay(),this.span=document.querySelector(".search-bar__btn"),this.searchBar=document.querySelector(".search-bar"),this.searchOverlay=document.querySelector(".search-overlay"),this.input=document.querySelector(".search-bar__input"),this.typingTimer,this.searchToggle=gsap.timeline({reversed:!0,paused:!0}),this.toggleIn(),this.events(),this.isWaiting=!1,this.foodResults=document.querySelector("#all-food-items"),this.drinkResults=document.querySelector("#all-drink-items"),this.generalInfo=document.querySelector("#other"),this.lunchContainer=document.querySelector(".lunch-container"),this.dinnerContainer=document.querySelector(".dinner-container"),this.dessertContainer=document.querySelector(".desserts-container"),this.previousValue}events(){this.span.addEventListener("click",()=>this.searching()),document.addEventListener("keydown",e=>this.keyDown(e)),document.addEventListener("keydown",e=>this.closeSearch(e)),this.input.addEventListener("keyup",()=>this.typingLogic())}typingLogic(){this.input.value!=this.previousValue&&(clearTimeout(this.typingTimer),this.foodResults.innerHTML="",this.drinkResults.innerHTML="",this.generalInfo.innerHTML="",""!=this.input.value?(this.isWaiting||(this.results=document.querySelector("#results"),this.results.innerHTML="<div class='is-waiting'>Getting results ..</div>",this.isWaiting=!0),this.typingTimer=setTimeout(()=>{let e=fetch(mainData.root_url+"/wp-json/recipe/v1/search?term="+this.input.value);Promise.all([e]).then(e=>{e.forEach(e=>{t(e.json())})});let t=e=>{e.then(e=>{console.log(e.lunch),0!=e.desserts?e.desserts.forEach(e=>{this.dessertContainer.innerHTML+=` <li class="search__list-item">\n                                                                        <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                            <div class="search__description">\n                                                                                <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                                <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                                <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4> \n                                                                                <h4 class="search__description--carbs" >Category: ${e.category}</h4> \n                                                                            </div>\n                                                                    </li>`}):this.dessertContainer.innerHTML="No results for desserts",0!=e.breakfast?e.breakfast.forEach(e=>{this.generalInfo.innerHTML+=` <li class="search__list-item">\n                                                                        <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                            <div class="search__description">\n                                                                                <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                                <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                                <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4> \n                                                                                <h4 class="search__description--carbs" >Category: ${e.category}</h4> \n                                                                            </div>\n                                                                    </li>`}):this.generalInfo.innerHTML="No results for breakfast",0!=e.lunch?e.lunch.forEach(e=>{this.lunchContainer.innerHTML+=`<li class="search__list-item">\n                                                                            <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                                <div class="search__description">\n                                                                                    <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                                    <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                                    <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4> \n                                                                                    <h4 class="search__description--carbs" >Category: ${e.category}</h4> \n                                                                                </div>\n                                                                        </li>`}):this.lunchContainer.innerHTML="No results for Lunch",0!=e.dinner?e.dinner.forEach(e=>{this.dinnerContainer.innerHTML+=`<li class="search__list-item">\n                                                                            <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                                <div class="search__description">\n                                                                                    <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                                    <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                                    <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4> \n                                                                                    <h4 class="search__description--carbs" >Category: ${e.category}</h4> \n                                                                                </div>\n                                                                        </li>`}):this.dinnerContainer.innerHTML="No results for Dinner",0!=e.drinks?e.drinks.forEach(e=>{this.drinkResults.innerHTML+=`<li class="search__list-item">\n                                                                    <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                        <div class="search__description">\n                                                                            <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                            <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                            <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4> \n                                                                            <h4 class="search__description--carbs" >Category: ${e.category}</h4> \n                                                                        </div>\n                                                                </li>`}):this.drinkResults.innerHTML="No drink recipes to show";const t=e.normal.concat(e.lowCarb.concat(e.keto));0!=t?t.forEach(e=>{this.foodResults.innerHTML+=` <li class="search__list-item">\n                                                                    <img class="search__img" src="${e.img}" alt="no img available"/>\n                                                                        <div class="search__description">\n                                                                            <a href="${e.link}"><h2 class="search__description--title">${e.title}</h2></a>\n                                                                            <h4 class="search__description--type" >Type: ${e.type}</h4>        \n                                                                            <h4 class="search__description--carbs" >Carbs: ${e.carbs}</h4>        \n                                                                            <h4 class="search__description--carbs" >Category: ${e.category}</h4>        \n                                                                        </div>\n                                                                </li>`}):this.foodResults.innerHTML="No food results to show",this.isWaiting=!1}).catch(e=>{console.log(e),this.results.innerHTML="No results for your search"})};this.results.innerHTML="Results are here",this.isWaiting=!1},450)):(this.foodResults.innerHTML="",this.drinkResults.innerHTML="",this.generalInfo.innerHTML="",this.isWaiting=!1),this.previousValue=this.input.value)}deleteKeyevent(e){console.log(e.keyCode)}keyDown(e){83==e.keyCode&&this.searchToggle.reversed()&&this.searching()}closeSearch(e){27==e.keyCode&&this.searchToggle.play()&&this.searching()}searching(){this.searchToggle.reversed()?this.searchToggle.play():this.searchToggle.reverse()}toggleIn(){this.searchToggle.fromTo(this.searchOverlay,1,{duration:.5,opacity:0},{duration:.5,display:"flex",opacity:1}).to(this.menuButton,{duration:.5,opacity:0,display:"none"},"<").to(this.searchBar,{display:"block",onComplete:()=>this.input.value=" "},"<").to(this.body,{overflow:"hidden"},"<").to(this.searchBar,.5,{top:"0em",onComplete:()=>{this.searchOverlay.classList.add("search-overlay--active"),this.input.focus()}},"<")}addOverlay(){this.footer.insertAdjacentHTML("afterend",'<div class="search-overlay">\n                    <div class="search-overlay--active__wrapper">\n                        <h1 class="search-overlay--active__headline">Search recipes</h1>   \n                        <div class="container" >\n                            <div id="results"></div>\n                            <div  class="search-overlay--active__results">\n                            \n                                <div class="row">\n                                    <div class="food-container">\n                                        <h2 class="food-container__title">All food items</h2>\n                                        <div id=\'all-food-items\'>\n                                        </div>\n                                    </div>\n                                    \n                                    <div class="drink-container">\n                                        <h2 class="food-container__title">All drink items</h2>\n                                        <div id=\'all-drink-items\'>\n                                        </div>\n                                    </div>\n                                    \n                                        \n                                    <div class="breakfast-container">\n                                        <h2 class="food-container__title">BreakFast</h2>\n                                        <div id=\'other\'>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class="row">\n                                    <div class="lunch-container">\n                                        <h2 class="food-container__title">Lunch</h2>\n                                        <div id=\'lunch\'>\n                                        </div>\n                                    </div>\n                                    \n                                    <div class="dinner-container">\n                                        <h2 class="food-container__title">dinner</h2>\n                                        <div id=\'dinner\'>\n                                        </div>\n                                    </div>\n                                    \n                                    <div class="desserts-container">\n                                        <h2 class="food-container__title">desserts</h2>\n                                        <div id=\'desserts\'>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>')}};var a=class{constructor(){}events(){}};new i;new n,new r,new a;window.navigator.userAgent}]);