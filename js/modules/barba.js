const tl = gsap.timeline()
const animateIn = (container) =>{
  return tl.from(container,
                { duration: 1, 
                  opacity: 0,
                  autoAlpha: 0,
                  onComplete: ()=>gsap.set('body',
                    {overflow:'visible'}
                  )
                }
              )
}
const animateOut = (container, done) =>{
  return tl.set('body', { overflow:'hidden'})
            .to(container,
                {autoAlpha:0,
                 duration: 1,
                 opacity: 0,
                 onComplete: ()=>done() })
}

barba.init({
    transitions: [
          {
          once({next}){
            animateIn(next.container)
          },
          leave({current}){
            
            const done = this.async()
            animateOut(current.container, done)
          },
          enter({next}){
            animateIn(next.container)
          },
        }
      ]
  });