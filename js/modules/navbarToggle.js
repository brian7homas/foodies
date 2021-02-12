
class navbarToggle{
    constructor(){
        //get all nav menu items
        this.navItems = document.querySelectorAll('.nav-menu__item')
        this.menuItemsArray = Array.prototype.slice.call(this.navItems)
        this.btn = document.querySelector('.btn__nav')
        this.navContainer = document.querySelector('.nav-menu')
        this.toggle = gsap.timeline({ reversed:false, paused: true})
        this.pageContainer = document.querySelector('div[data-barba="container"]')
        this.slideUp()
        this.events()
        // console.log(this.menuItemsArray)             TEST
        this.iterate()
        
    }
    events(){
        this.btn.addEventListener("click" , ()=>this.menuToggle())
        
    }
    menuToggle(){
        this.toggle.reversed()?this.toggle.play():this.toggle.reverse()
    }
    iterate(){
        this.menuItemsArray.forEach(element =>{
            // console.log(element.classList.contains('current'))           TEST
            if(element.classList.contains('current')){
                console.log(element)
            }else{
                console.log('no current detected')
            }
        })
    }
    slideUp(){
        this.toggle.to(this.navContainer, {display:'flex'})
                    .fromTo(this.navContainer, { duration: .2,  opacity: 0}, { opacity: 1}, "<")
                    .from(this.menuItemsArray, .3, { autoAlpha: 0, duration: .3, top: '10em', opacity:1, stagger: .2})
    }
    
}
export default navbarToggle