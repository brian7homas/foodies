
class navbarToggle{
    constructor(){
        //get all nav menu items
        this.navItems = document.querySelectorAll('.nav-menu__item')
        this.menuItemsArray = Array.prototype.slice.call(this.navItems)
        this.btn = document.querySelector('.btn__nav')
        this.navContainer = document.querySelector('.nav-menu')
        this.toggle = gsap.timeline({ reversed:true, paused: true})
        this.pageContainer = document.querySelector('div[data-barba="container"]')
        this.width = window.innerWidth
        this.height = window.innerHeight
        window.onresize = ()=>this.windowEvent()
        this.slideUp()
        this.events()
        
        
    }
    windowEvent(){
        if(this.height == window.innerHeight){
            console.log('same height')
        }
        if(this.height != window.innerHeight && this.width == window.innerWidth){
            this.height = window.innerHeight
            console.log('height changeing when width does not')
        }else if(this.height != window.innerHeight && this.width != window.innerWidth){
            this.width == window.innerWidth
            if(this.width > 568){
                console.log('remove navbar animation')
            }
            console.log('changing ')
        }
    }
    events(){
        this.btn.addEventListener("click" , (e)=>this.menuToggle(e))
        this.menuItemsArray.forEach(element => element.addEventListener("click", (e)=>this.menuToggle(e)))
    }
    menuToggle(e){
        console.log(e.target)
        this.toggle.reversed()?this.toggle.play():this.toggle.reverse()
    }
    // removeEvent(){
    //     this.menuItemsArray.forEach(element => element.removeEvent("click"))
    // }
    slideUp(){
        this.toggle.from(this.navContainer, {display:'none'})
                    .fromTo(this.navContainer, { duration: .1,  opacity: 0}, { opacity: 1}, "<")
                    .from(this.menuItemsArray, .2, { autoAlpha: 0, duration: .3,   stagger: .2})
    }
    
}
export default navbarToggle