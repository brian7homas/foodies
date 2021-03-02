const tl = gsap.timeline()
const animateTab = (current) =>{
  return tl.to('.current',{ top: '-17em', height: '100vh', autoAlpha:1})
}
const animateIn = (container) =>{
  return tl.from(container, { duration: 1,   opacity: 0, autoAlpha: 0, onComplete: ()=>gsap.set('body', {overflow:'visible'})})
}
const animateOut = (container, done) =>{
  return tl.set('body', { overflow:'hidden'})
            .to(container, {autoAlpha:0, duration: 1, opacity: 0,onComplete: ()=>done() })
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