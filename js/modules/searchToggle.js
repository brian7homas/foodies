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
        this.results
        //keep loading from restarting timeer
        this.previousValue
    }
    events(){
        this.span.addEventListener("click", ()=>this.searching())
        
        //s key to open search and overlay
        document.addEventListener("keydown", (e)=>this.keyDown(e))
        //esc key to close search and overlay
        document.addEventListener("keydown", (e)=>this.closeSearch(e))
        
        this.input.addEventListener("keydown", ()=>this.typingLogic())
    }
    typingLogic(){
        if(this.input.value != this.previousValue){
            clearTimeout(this.typingTimer) //reset the timer
        
            if(!this.isWaiting){
                this.results = document.querySelector('#results') 
                this.results.innerHTML = "<div class='is-waiting'>Getting results ..</div>"
                this.isWaiting = true
            }
            this.typingTimer = setTimeout(()=>{
                this.results.innerHTML = "Results are here"
                this.isWaiting = false 
            },2000)
        }
        this.previousValue = thie.input.value
    }
    
    //METHODS
    keyDown(e){
        if(e.keyCode == 83 && this.searchToggle.reversed()){
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