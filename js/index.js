

const swiper = new Swiper('.f-sl', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickableClass:	'swiper-pagination-clickable',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrol',
    },
    autoplay: {
        delay: 5000,
      },
  });


  const slaid = new Swiper('.h-sv', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickableClass:	'swiper-pagination-clickable',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 5000,
      },
  });

  let title = document.querySelectorAll('.title__taitl')


  title.forEach((item) => {
   
    item.addEventListener('click',()=>{
      
      item.classList.add('title__taitl-anim')
      
      //  item.classList.remove('title__taitl-anim')
      
      console.log('anim')
    }
   
    )
  })