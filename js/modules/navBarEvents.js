
class navBarEvents{
    constructor(){
        // collect the nav-menu__items
        this.navItems = document.querySelectorAll('.nav-menu__item')
        // console.log(this.navItems)
        
        // convert to array of items
        this.menuItemsArray = Array.prototype.slice.call(this.navItems)
        // console.log(this.menuItemsArray)
        this.events()
        this.current
        
    }
    events(){
        this.menuItemsArray.forEach(element => {    
            element.addEventListener("click", (e)=>{
                e.preventDefault()
                if(element.classList.contains('current')){
                    console.log('same page')
                }
                // ifthe current page is set
                if(this.current){
                    console.log('this is the prev page: ' + this.current)
                    this.current.classList.remove('current')
                }
                element.classList.add("current")
                this.current = document.querySelector('.current')
                console.log('this is the current page' + this.current)
                
                
            })
        });
    }
    animateNavbar(){
        this.toggle()
    }
    
    
}
export default navBarEvents