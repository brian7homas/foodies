

class searchToggle{
    constructor(){
        this.body = document.querySelector('body')
        this.addOverlay()
        this.span = document.querySelector('.search-bar__btn')
        this.searchBar = document.querySelector('.search-bar')
        this.searchOverlay = document.querySelector('.search-overlay')
        this.input = document.querySelector('.search-bar__input')
        this.typingTimer;
        this.searchToggle = gsap.timeline({reversed:true, paused: true })
        this.toggleIn()
        this.events()
        this.isWaiting = false
        this.foodResults= document.querySelector('#all-food-items') 
        this.drinkResults = document.querySelector('#all-drink-items')
        this.generalInfo = document.querySelector('#other')
        
        //keep loading from restarting timeer
        this.previousValue
        //var used to select all input and textareas
        //this.userInput = document.querySelectorAll('input, textarea') // removed from checking for s key because -- this.userInput.activeElement -- disables the overlay due to it's default autofocus attr
    }
    events(){
        this.span.addEventListener("click", ()=>this.searching())
        
        //s key to open search and overlay
        document.addEventListener("keydown", (e)=>this.keyDown(e))
        //esc key to close search and overlay
        document.addEventListener("keydown", (e)=>this.closeSearch(e))
        
        this.input.addEventListener("keyup", ()=>this.typingLogic())
    }
    typingLogic(){
        
        if(this.input.value != this.previousValue){
            clearTimeout(this.typingTimer) //reset the timer
            this.foodResults.innerHTML = ''
            this.drinkResults.innerHTML = ''
            this.generalInfo.innerHTML = ''
            if(this.input.value != '' ){
                if(!this.isWaiting){
                    this.results = document.querySelector('#results') 
                    this.results.innerHTML = "<div class='is-waiting'>Getting results ..</div>"
                    this.isWaiting = true
                }
                this.typingTimer = setTimeout(()=>{
                    let customRoute = fetch(mainData.root_url+'/wp-json/recipe/v1/search?term='+this.input.value)
                    Promise.all([customRoute])
                    .then( recipes =>{
                        recipes.forEach(recipe =>{
                            // console.log(recipe)
                            display( recipe.json() )
                        }) 
                    })
                    // display is being called twice
                    let display = (prom) =>{
                        // wait until promise is resolved
                        prom.then(data=>{
                            // parameters
                            //.title)
                            //.link)
                            //.img)
                            //.carbs)
                            //? data contains all defined arrays in             ./inc/search-route.php
                            // console.log(data.generalInfo)
                            // console.log(data.lowCarb)
                            // console.log(data.keto)
                            // console.log(data.normal)
                            // console.log(data.drinks)
                            // console.log(data.desserts)
                            
                            if(data.generalInfo !=0){
                                data.generalInfo.forEach(element => {
                                    this.generalInfo.innerHTML += `<li class="search__list-item">
                                                                            <div class="search__description">
                                                                                <a href="${element.link}"><h2 class="search__description--title">${element.title}</h2></a>
                                                                                
                                                                                <h4 class="search__description--carbs" >Posts:  ${element.post}</h4>        
                                                                            </div>
                                                                    </li>`
                                });
                            }else{
                                this.generalInfo.innerHTML = "No results for misc inforamtion"
                            }
                            
                            
                            
                            if(data.drinks !=0){
                                console.log(data.drinks)
                                data.drinks.forEach(element => {
                                    console.log(element.category)
                                this.drinkResults.innerHTML += `<li class="search__list-item">
                                                                    <img class="search__img" src="${element.img}" alt="no img available"/>
                                                                        <div class="search__description">
                                                                            <a href="${element.link}"><h2 class="search__description--title">${element.title}</h2></a>
                                                                            <h4 class="search__description--type" >Type: ${element.type}</h4>        
                                                                            <h4 class="search__description--carbs" >Carbs: ${element.carbs}</h4>        
                                                                        </div>
                                                                </li>`
                                });
                            }else{
                                this.drinkResults.innerHTML = "No drink recipes to show"
                            }
                            
                            
                            
                            //all recipes in normal lowCarb and keto
                            const foodRecipes = data.normal.concat(data.desserts.concat(data.lowCarb.concat(data.keto)))
                            if(foodRecipes != 0 ){
                                foodRecipes.forEach(element => {
                                    // console.log(element)
                                    // console.log(element.title)
                                    // console.log(element.type)
                                    // console.log(element.link)
                                    this.foodResults.innerHTML += ` <li class="search__list-item">
                                                                    <img class="search__img" src="${element.img}" alt="no img available"/>
                                                                        <div class="search__description">
                                                                            <a href="${element.link}"><h2 class="search__description--title">${element.title}</h2></a>
                                                                            <h4 class="search__description--type" >Type: ${element.type}</h4>        
                                                                            <h4 class="search__description--carbs" >Carbs: ${element.carbs}</h4>        
                                                                        </div>
                                                                </li>`
                                });
                            }else{
                                this.foodResults.innerHTML = "No food results to show"
                            }
                            
                            
                            this.isWaiting = false
                            
                        })
                        .catch(err=>{
                            console.log(err)
                            this.results.innerHTML = "No results for your search"
                        })
                    }
                    this.results.innerHTML = "Results are here"
                    this.isWaiting = false 
                },450)
            }else{
                this.foodResults.innerHTML = ''
                this.drinkResults.innerHTML = ''
                this.generalInfo.innerHTML = ''
                this.isWaiting = false
            }
            this.previousValue = this.input.value
        }
    }
    
    //METHODS
    deleteKeyevent(e){
        console.log(e.keyCode);
    }
    keyDown(e){
        if(e.keyCode == 83 && this.searchToggle.reversed() ){
            this.searching()
        }
    }
    closeSearch(e){
        if(e.keyCode == 27 && this.searchToggle.play()){
            this.searching()
        }
    }
    searching(){
        this.searchToggle.reversed()?this.searchToggle.play():this.searchToggle.reverse()
    }
    toggleIn(){
        this.searchToggle.fromTo(this.searchOverlay, 1, { duration: .5, opacity: 0}, {duration: .5, display:"flex", opacity:1} )
                        .to(this.searchBar, {display:'block', onComplete:()=>this.input.value = " "}, '<')
                        .to(this.searchBar, .5,{ 
                                                top: '0em', 
                                                onComplete:()=>{
                                                this.searchOverlay.classList.add('search-overlay--active')
                                                
                                                // /this.body.classList.add('no-scroll')
                                                
                                                this.input.focus()
                                                
                                                }}, '<')
                        
    }
    addOverlay(){
        this.body.insertAdjacentHTML("afterend", 
                `<div class="search-overlay">
                    <div class="search-overlay--active__wrapper">
                        <h1 class="search-overlay--active__headline">Search recipes</h1>
                    </div>
                    <div class="container" >
                        <div  class="search-overlay--active__results">
                            <div id="results"></div>
                            <div id='all-food-items'>
                                <h2>All food items</h2>
                            </div>
                            <div id='all-drink-items'>
                                <h2>All drink items</h2>
                            </div>
                            <div id='other'>
                                <h2>Misc</h2>
                            </div>
                        </div>
                    </div>
                </div>`)
        // this.body.append()
    }

}
export default searchToggle