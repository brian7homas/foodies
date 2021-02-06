
class navbarToggle{
    constructor(){
        this.btn = document.querySelector('.btn__nav')
        this.navContainer = document.querySelector('.nav-menu')
        this.toggle = gsap.timeline({ reversed:true, paused: true})
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
        this.toggle.reversed()?this.toggle.play():this.toggle.reverse()
        
    }
    slideUp(){
        this.toggle.to(this.navContainer, .3,{duration: .1, bottom:'4em', onComplete: ()=>!this.bodyEventadd()?this.bodyEventremove():this.bodyEventadd()})
                    .from('.nav-menu__item', { duration: .3, autoAlpha:0, top: '0em', stagger: .2}, "<")
                    .set('body', {overflowY:'visible'})
    }
    
}
export default navbarToggle