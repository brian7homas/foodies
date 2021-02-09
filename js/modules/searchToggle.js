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
                    var xhr = new XMLHttpRequest()
                    var xhrKeto = new XMLHttpRequest()
                    let combine = new Array()
                    xhr.onreadystatechange = ()=>{
                        if(xhr.readyState === 4){
                            var obj = JSON.parse(xhr.response);
                            combine = combine.concat(obj)
                            console.log(combine)
                            if(combine.length == 0){
                                // console.log("empty")
                                console.log(combine)
                                this.results.innerHTML = `${combine.length == 0 ? '<p>no results</p>' :'<div class="search">'}`
                            }else{
                            // this.results.innerHTML = obj[0].acf.image
                            for(var x=0; x < combine.length; x++){
                                this.results.innerHTML += `${combine.length == 0 ? '<p>no results</p>' :'<div class="search">'}
                                                            <ul class="search__list">
                                                                <li class="search__list-item" ">
                                                                    <img class="search__img" src="${combine[x].acf.image}" alt="no img available"/>
                                                                    <div class="search__description">
                                                                        <a href="${combine[x].link}"><h2 class="search__description--title">${combine[x].title.rendered}</h2></a>
                                                                        <h4 class="search__description--type" >Type: ${combine[x].type}</h4>        
                                                                        <h4 class="search__description--carbs" >Carbs: ${combine[x].acf.carbohoydrates}</h4>        
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            ${combine.length == 0? '</div>`' :''}
                                                        `
                                
                                }//end for loop
                            }
                        }   
                    }
                    xhrKeto.onreadystatechange=()=>{
                        if(xhrKeto.readyState===4 ){
                            var keto = JSON.parse(xhrKeto.response);
                            combine = combine.concat(keto)
                            console.log(combine)
                            
                            
                            console.log(combine)
                            if(combine.length == 0){
                                // console.log("empty")
                                console.log(combine)
                                this.results.innerHTML = `${combine.length == 0 ? '<p>no results</p>' :'<div class="search">'}`
                            }else{
                            // this.results.innerHTML = obj[0].acf.image
                            for(var x=0; x < combine.length; x++){
                                this.results.innerHTML += `${combine.length == 0 ? '<p>no results</p>' :'<div class="search">'}
                                                            <ul class="search__list">
                                                                <li class="search__list-item" ">
                                                                    <img class="search__img" src="${combine[x].acf.image}" alt="no img available"/>
                                                                    <div class="search__description">
                                                                        <a href="${combine[x].link}"><h2 class="search__description--title">${combine[x].title.rendered}</h2></a>
                                                                        <h4 class="search__description--type" >Type: ${combine[x].type}</h4>        
                                                                        <h4 class="search__description--carbs" >Carbs: ${combine[x].acf.carbohoydrates}</h4>        
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            ${combine.length == 0? '</div>`' :''}
                                                        `
                                
                                }//end for loop
                            }
                        }
                        
                    }
                    
                    xhr.open('GET', mainData.root_url + '/wp-json/wp/v2/recipe?search='+this.input.value, true)
                    xhrKeto.open('GET', mainData.root_url + '/wp-json/wp/v2/keto?search='+this.input.value, true)
                    //http://localhost:10058/wp-json/wp/v2/keto?search=cake
                    xhr.send()
                    xhrKeto.send()
                    
                    
                    
                    // this.results.innerHTML = "Results are here"
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
        this.searchToggle.fromTo(this.searchOverlay, 1.2, { duration: 1, opacity: 0}, {duration: 1, display:"flex", opacity:1} )
                        .to(this.searchBar, {display:'block', onComplete:()=>this.input.value = " "}, '<')
                        .to(this.searchBar, .5,{ 
                                                top: '0em', 
                                                onComplete:()=>{
                                                this.searchOverlay.classList.add('search-overlay--active')
                                                this.body.classList.add('no-scroll')
                                                
                                                this.input.focus()
                                                
                                                }}, '<')
                        
    }
    addOverlay(){
        this.body.append(`
                        <div class="search-overlay">
                            <div class="search-overlay--active__wrapper">
                                <h1 class="search-overlay--active__headline">Search recipes</h1>
                            </div>
                            <div class="container" >
                                <div id='results' class="search-overlay--active__results">
                                </div>
                            
                            </div>
                        </div>
                        `)
    }

}
export default searchToggle