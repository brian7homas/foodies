// import searchOverlay from "./searchOverlay"

class searchToggle{
    constructor(){
        
        this.body = document.querySelector('body')
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
                    var xhr = new XMLHttpRequest()
                    xhr.onreadystatechange = ()=>{
                        if(xhr.readyState===4){
                            var obj = JSON.parse(xhr.response);
                            console.log(obj)
                            if(obj.length == 0){
                                console.log("empty")
                                this.results.innerHTML = `${obj.length == 0 ? '<p>no results</p>' :'<div class="search">'}`
                            }else{
                                // this.results.innerHTML = obj[0].acf.image
                            for(var x=0; x < obj.length; x++){
                                
                                this.results.innerHTML += `${obj.length == 0 ? '<p>no results</p>' :'<div class="search">'}
                                                            <ul class="search__list">
                                                                <li class="search__list-item" ">
                                                                    <img class="search__img" src="${obj[x].acf.image}" alt="no img available"/>
                                                                    <div class="search__description">
                                                                        <a href="${obj[x].link}"><h2 class="search__description--title">${obj[x].title.rendered}</h2></a>
                                                                        <h4 class="search__description--type" >Type: ${obj[x].type}</h4>        
                                                                        <h4 class="search__description--carbs" >Carbs: ${obj[x].acf.carbohoydrates}</h4>        
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            ${obj.length == 0? '</div>`' :''}
                                                        `
                                
                                }//end for loop
                            }
                            
                            
                            
                        }
                        
                    }
                    xhr.open('GET', mainData.root_url + '/wp-json/wp/v2/recipe?search='+this.input.value, true)
                    // xhr.open('GET', 'http://localhost:10058/wp-json/wp/v2/keto/', true)
                    //http://localhost:10058/wp-json/wp/v2/keto?search=cake
                    xhr.send()
                    
                    // this.results.innerHTML = "Results are here"
                    this.isWaiting = false 
                },2000)
            }else{
                this.results.innerHTML = ''
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
        this.searchToggle.fromTo(this.searchOverlay, .3, { duration: .2, opacity: 0}, {display:"flex", opacity:1} )
                        .to(this.searchBar, {display:'block'}, '<')
                        .to(this.searchBar, .5,{ 
                                                top: '0em', 
                                                onComplete:()=>{
                                                this.searchOverlay.classList.add('search-overlay--active')
                                                this.body.classList.add('no-scroll')
                                                this.searchBar.setAttribute('autofocus', 'true')
                                                }}, '<')
                        
    }
}
export default searchToggle