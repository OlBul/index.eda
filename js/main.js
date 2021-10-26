const swiper = new Swiper('.swiper', {
    // Optional parameters    
    loop: true, 
   
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },     
  });

  let tabsLink = document.querySelectorAll('.tabs__link');

  tabsLink.addEventListener('click', function(){
    tabsLink.classList.add('active');
  });