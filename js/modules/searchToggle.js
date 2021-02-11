// import searchOverlay from "./searchOverlay"

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
        this.results= document.querySelector('#results') 
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
            if(this.input.value != ''){
                if(!this.isWaiting){
                    this.results = document.querySelector('#results') 
                    this.results.innerHTML = "<div class='is-waiting'>Getting results ..</div>"
                    this.isWaiting = true
                }
                this.typingTimer = setTimeout(()=>{
                    let normalRecipes = fetch(mainData.root_url+'/wp-json/wp/v2/recipe?search='+this.input.value)
                    let ketoRecipes = fetch(mainData.root_url+'/wp-json/wp/v2/keto?search='+this.input.value)
                    let lowCarbRecipes = fetch(mainData.root_url+'/wp-json/wp/v2/low-carb?search='+this.input.value)
                    let drinkRecipes = fetch(mainData.root_url+'/wp-json/wp/v2/drink?search='+this.input.value)
                    Promise.all([ketoRecipes , lowCarbRecipes,  normalRecipes, drinkRecipes])
                    .then( recipes =>{
                        
                        //returned promise from response obj
                        recipes.forEach(recipe =>{
                            // file.json is a promise passed into the display function
                            // console.log(recipe.json())  
                            display( recipe.json() )
                        })
                        
                    })
                    .catch(err=>{
                        console.log(err)
                        
                    })
                    
                    // display is being called twice
                    let display = (prom) =>{
                        
                        // wait until promise is resolved
                        prom.then(data=>{
                            console.log(data)
                            if(data.length != 0 && data != 'undefined'){
                                console.log(data)
                                var combine = new Array() 
                                combine.concat(data)
                                //console.log(combine)
                                //console.log("there is data")
                                //console.log(data[0].id)
                                //console.log(data[0].acf.image)
                                
                                var imgURL = data[0].acf.image
                                var link = data[0].link
                                var title = data[0].title.rendered
                                var type = data[0].type
                                var carbs = data[0].acf.carbohoydrates
                                this.results.innerHTML += `<div class="search">
                                                            <li class="search__list-item" ">
                                                            <img class="search__img" src="${imgURL}" alt="no img available"/>
                                                                <div class="search__description">
                                                                    <a href="${link}"><h2 class="search__description--title">${title}</h2></a>
                                                                    <h4 class="search__description--type" >Type: ${type}</h4>        
                                                                    <h4 class="search__description--carbs" >Carbs: ${carbs}</h4>        
                                                                </div>
                                                            </li>
                                                        </div>`
                                
                            }
                            
                        })
                        .catch(err=>{
                            console.log(err)
                            this.results.innerHTML = "No results for your search"
                        })
                    }
                    this.results.innerHTML = "Results are here"
                    this.isWaiting = false 
                },850)
            }else{
                this.results.innerHTML = ' '
                this.isWaiting = false
            }
            
            
        }
        this.previousValue = this.input.value
    }
    
    //METHODS
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
                                                
                                                // this.body.classList.add('no-scroll')
                                                
                                                this.input.focus()
                                                
                                                }}, '<')
                        
    }
    addOverlay(){
        console.log("overlay")
        this.body.insertAdjacentHTML("afterend", 
                `<div class="search-overlay">
                    <div class="search-overlay--active__wrapper">
                        <h1 class="search-overlay--active__headline">Search recipes</h1>
                    </div>
                    <div class="container" >
                        <div id='results' class="search-overlay--active__results">
                        </div>
                    </div>
                </div>`)
        // this.body.append()
    }

}
export default searchToggle