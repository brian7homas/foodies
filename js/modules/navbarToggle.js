
class navbarToggle{
    constructor(){
        //get all nav menu items
        
        this.navItems = document.querySelectorAll('.nav-menu__item')
        this.menuItemsArray = Array.prototype.slice.call(this.navItems)
        
        this.btn = document.querySelector('.btn__nav')
        this.navContainer = document.querySelector('.nav-menu')
        this.toggle = gsap.timeline({ reversed:true, paused: true})
        this.pageContainer = document.querySelector('div[data-barba="container"]')
        // this.slideDown()
        this.slideUp()
        // this.bodyEventremove()
        this.events()
        
        // console.log(this.menuItemsArray)
        this.iterate()
    }
    events(){
        this.btn.addEventListener("click" , ()=>this.menuToggle())
    }
    bodyEventadd(){
        
        if(this.toggle.isActive()){
            console.log("body event added")
            document.querySelector('body').addEventListener("click", ()=>this.menuToggle())
        }
        
    }
    bodyEventremove(){
            console.log("body event removed")
            document.querySelector('body').removeEventListener("click", ()=>this.menuToggle())
    }
    menuToggle(){
        this.toggle.reversed()?this.toggle.play():this.toggle.reverse()
        
        //GSAP SNIPPET ADDING/REMOVING EVENT TO BODY -- DOES NOT WORK
        // onComplete: ()=>!this.bodyEventadd()?this.bodyEventremove():this.bodyEventadd()
    }
    iterate(){
        this.menuItemsArray.forEach(element =>{
            // console.log(element.classList.contains('current'))
            if(element.classList.contains('current')){
                console.log(element)
            }else{
                // console.log('no current detected')
            }
        })
    }
    slideUp(){
        this.toggle.from(this.menuItemsArray, { duration: .3, top: '10em', opacity:1, stagger: .2, })
                    
    }
    
}
export default navbarToggle