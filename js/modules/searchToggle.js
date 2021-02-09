import searchOverlay from "./searchOverlay"

class searchToggle{
    constructor(){
        this.body = document.querySelector('body')
        this.span = document.querySelector('.search-bar__btn')
        this.searchBar = document.querySelector('.search-bar')
        this.searchOverlay = document.querySelector('.search-overlay')
        console.log(this.searchOverlay)
        this.searchToggle = gsap.timeline({reversed:true, paused: true })
        this.toggleIn()
        this.events()
    }
    events(){
        this.span.addEventListener("click", ()=>this.searching())
        //s key to open search and overlay
        document.addEventListener("keydown", (e)=>this.keyDown(e))
        //esc key to close search and overlay
        document.addEventListener("keydown", (e)=>this.closeSearch(e))
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
                                                }}, '<')
    }
    
    
}
export default searchToggle