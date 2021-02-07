
class navbarToggle{
    constructor(){
        //get all nav menu items
        this.navItems = document.querySelectorAll('.nav-menu__item')
        
        this.btn = document.querySelector('.btn__nav')
        this.navContainer = document.querySelector('.nav-menu')
        this.toggle = gsap.timeline({ reversed:true, paused: true})
        this.pageContainer = document.querySelector('div[data-barba="container"]')
        // this.slideDown()
        this.slideUp()
        // this.bodyEventremove()
        this.events()
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
        // if(this.toggle.reversed()){
        //     this.toggle.play()
        //     this.pageContainer.classList.add('current')
        // }else{
        //     this.toggle.reverse()
        //     this.pageContainer.classList.remove('current')
        // }
         this.toggle.reversed()?this.toggle.play():this.toggle.reverse()
        
        //GSAP SNIPPET ADDING/REMOVING EVENT TO BODY -- DOES NOT WORK
        // onComplete: ()=>!this.bodyEventadd()?this.bodyEventremove():this.bodyEventadd()
    }
    slideUp(){
        this.toggle.to(this.navContainer, .3,{duration: .1, bottom:'-16em', })
                    .from('.nav-menu__item', { duration: .3, stagger: .2}, "<")
    }
    
}
export default navbarToggle