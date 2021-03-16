


class Scroll{
    constructor(select, max){
       this.$select = document.querySelectorAll(select)
        this.max = max
        

       this.render()
    }
   
    render(){
      
        if(this.$select.length > 0){
            this.scroll()
     
            }
        }
       
   
    scroll(){
    
        this.$select.forEach((item) => {
     
        window.addEventListener('scroll',()=>{

             const  windowScroll = window.scrollY
            const boxTop = item.offsetTop  
            const startAnim = boxTop - this.max

            if(  windowScroll > startAnim    ) {
                    item.classList.add('scroll-active')
                  }else {
                     
                        item.classList.remove('scroll-active')
                   
                    
                  }
         })

       
 })
        
        

}
}


const scroll = new Scroll('.title__taitl',400)


