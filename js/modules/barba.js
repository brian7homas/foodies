const animateIn = (container) =>{
  return gsap.from(container, { duration: 1, yPercent: 100})
}
const animateOut = (container, done) =>{
  return gsap.to(container, { duration: 1, yPercent:-100, onComplete: ()=>done()})
}

barba.init({
    transitions: [
          {
          once({next}){
            animateIn(next.container)
          },
          leave({current}){
            
            console.log('leaving')
            const done = this.async()
            animateOut(current.container, done)
          },
          enter({next}){
            console.log(next.container)
            console.log('entering')
            animateIn(next.container)
          }
          
        }
      ]
  });