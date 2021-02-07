const tl = gsap.timeline()
const animateTab = (current) =>{
  return tl.to('.current',{ top: '-17em', height: '100vh'})
}
const animateIn = (container) =>{
  return tl.from(container, { duration: 1,   yPercent: 100})
}
const animateOut = (container, done) =>{
  return tl.to(container, { duration: 1, yPercent:100,onComplete: ()=>done() })
}

barba.init({
    transitions: [
          {
          once({next}){
            animateIn(next.container)
          },
          leave({current}){
            
            // console.log('leaving')
            const done = this.async()
            animateOut(current.container, done)
          },
          enter({next}){
            // console.log(next.container)
            // console.log('entering')
            animateIn(next.container)
          },
          // afterEnter({current}){
          //   console.log("afterEnter")
          //   animateTab(current)
          // }
          
        }
      ]
  });