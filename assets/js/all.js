document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById('filter')) {
    const btn = document.querySelector('#filter .dropdown-toggle');
    const menu = document.querySelector('#filter .dropdown-menu');

    btn.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        const item = document.querySelectorAll('#filter .dropdown-item');
        item.forEach(i => {
          i.addEventListener('click', (e) => {
            item.forEach(_item => {
              _item.classList.remove('active')
            })
            e.target.classList.add('active')
            btn.classList.add('noIcon')
            btn.textContent = e.target.textContent;
          })
        })
      }
    })
  }

  if (document.getElementById('sort-latest')) {
    const btn = document.querySelector('#sort-latest .dropdown-toggle');
    const menu = document.querySelector('#sort-latest .dropdown-menu');

    btn.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        console.log('menu opened');
        const item = document.querySelectorAll('#sort-latest .dropdown-item');
        item.forEach(i => {
          i.addEventListener('click', e => {
            btn.textContent = e.target.textContent
          })
        })
      }
    })
  }

  if(document.getElementsByClassName('accordion-button')) {
    const btns = document.querySelectorAll('.accordion-button');

    btns.forEach( btn => {
      btn.addEventListener('click', e => {
        const el = e.target.parentNode.nextElementSibling
        e.target.parentNode.parentNode.classList.remove('active')
        if(!e.target.classList.contains('collapsed') && !el.classList.contains('show')){
          e.target.parentNode.parentNode.classList.add('active')
        } 
      })
    })
  }

  if(document.querySelector('#toTop')) {
    document.querySelector('#toTop').addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({top: 0, behavior: 'smooth'});
      e.target.blur();
      
    })
  } 

  if(document.querySelector('#partnership-3')) {
    const swiper = new Swiper('#partnership-3.swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      breakpoints: {
        // when window width is >= 320pxs
        767: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        // when window width is >= 480px
        992: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      },
      pagination: {
        el: "#partnership-3 .swiper-pagination",
        clickable: true,
      },
    })
    console.log('fn')
  }


});