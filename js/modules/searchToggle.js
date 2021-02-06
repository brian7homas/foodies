class searchToggle{
    constructor(){
        
        this.span = document.querySelector('.search-bar__btn')
        this.searchBar = document.querySelector('.search-bar')
        this.searchToggle = gsap.timeline({reversed:true, paused: true })
        this.toggleIn()
        this.events()
    }
    events(){
        this.span.addEventListener("click", ()=>this.searching())
    }
    searching(){
        this.searchToggle.reversed()?this.searchToggle.play():this.searchToggle.reverse()
    }
    toggleIn(){
        
        this.searchToggle.to(this.searchBar, .5,{ top: '0em'})
    }
    
}
export default searchToggle