//! Navbar Menu.......................................................

const menu = document.getElementById('menu');
const links = document.querySelector('.links');
const hide = document.querySelectorAll('.links li');
const nav = document.getElementById('navbar');

menu.addEventListener('click', () => {
  links.classList.toggle('active');
  menu.classList.toggle('active');
  nav.classList.toggle('show-animation');
});

hide.forEach((hideLinks) => {
  hideLinks.addEventListener('click', () => {
    links.classList.remove('active');
    menu.classList.remove('active');
    nav.classList.remove('show-animation');
  });
});

//! Show Navbar when mouseover............................................. 

document.addEventListener('mousemove', (e) => {
  let mousePosY = e.clientY;
  if (mousePosY <= 50) {
    nav.style.top = 0;
  } 
})

//! parallax............................................................

const moveRight = document.getElementById('myimg');
const moveLeft = document.getElementById('intro');
const line = document.getElementById('line');
const aboutImg = document.getElementById('about-img');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.links li a');

let prevScroll = 0;

window.addEventListener('scroll', () => {
  let scrollVal = window.scrollY;

  if (scrollVal < prevScroll) {
    nav.style.top = 0;
    goTop.classList.remove('active');
  } else {
    nav.style.top = '-60px';
    goTop.classList.add('active');
  }

  //! Remove active menu when scroll..................................................

  if (scrollVal) {
    links.classList.remove('active');
    menu.classList.remove('active');
    nav.classList.remove('show-animation');
  }

  
  prevScroll = scrollVal;
  
  moveRight.style.right = scrollVal * -0.3 + 'px';
  moveLeft.style.left = scrollVal * -0.3 + 'px';
  line.style.top = scrollVal * -0.4 + 'px';

  sections.forEach((sec) => {
    let ofsTop = sec.offsetTop - 20;
    let ofsHeight = sec.offsetHeight - 150;
    let act = sec.getAttribute('id');

    if (scrollVal >= ofsTop && scrollVal <= ofsTop + ofsHeight) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('.links li a[href*=' + act + ']')
          .classList.add('active');
      });
    }

    //! Remove the active animation...............................

    let ofsWidth = sec.offsetWidth;

    if (ofsWidth <= 627) {
      aboutImg.classList.remove('scroll-left');
      moveLeft.style.left = 0;
      aboutImg.classList.add('scroll-scale');
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('item-show');
    } else {
      entry.target.classList.remove('item-show');
    }
  });
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el));

const scrollLeft = document.querySelectorAll('.scroll-left');
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll('.scroll-right');
scrollRight.forEach((el) => observer.observe(el));

//! cv_download................................................................

const cv = document.getElementById('cv-btn');
const hiddenLink = document.getElementById('hidden-link');

const downloadCv = () => {
  cv.classList.toggle('active');

  const fileUrl =
    'https://drive.google.com/uc?export=download&id=1eAMrMfsypn44HmzsAQIi-OVOLoh0whG_';
  const fileName = 'cv_form.pdf';

  hiddenLink.href = fileUrl;
  hiddenLink.download = fileName;

  hiddenLink.click();
};

cv.addEventListener('click', downloadCv);

//! show_skills................................................................

const showLang = [
  {
    id: '1',
    logo: 'icons/html.svg',
    name: 'HTML',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, asperiores. Cum dicta eos aspernatur quibusdam magnam illum dolores ipsum, id amet distinctio! Accusantium fugiat alias',
    style: {
      shadow: `5px -5px 30px #FFD63C,
              -5px 5px 20px #F9B118`,
      bg: `linear-gradient(145deg, #FFD63C 20%, #F9B118 80%)`,
    },
  },
  {
    id: '2',
    logo: 'icons/css.svg',
    name: 'CSS',
    content:
      'Wit amet consectetur adipisicing elit. Lorem ipsum dolorNesciunt, asperiores. Cum dicta eos aspernatur quibusdam magnam amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis',
    style: {
      shadow: `5px -5px 30px #F99F1A,
                                  -5px 5px 20px #F16123`,
      bg: `linear-gradient(145deg, #F99F1A 20%, #F16123 80%)`,
    },
  },
  {
    id: '3',
    logo: 'icons/js.svg',
    name: 'JavaScript',
    content:
      'Lor possimus velit. Unde, quos corporis! sit amet consectetur adipisicing elit. Nesciunt, asperiores. Cum dicta eos aspernatur dolores ipsum, id Lorem ipsum do amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis',
    style: {
      shadow: `5px -5px 30px #B84A87,
              -5px 5px 20px #A62290`,
      bg: `linear-gradient(145deg, #B84A87 20%, #A62290 80%)`,
    },
  },
  {
    id: '4',
    logo: 'icons/react.svg',
    name: 'REACT',
    content:
      'Dolor sit amet consectetur adipisicing elit. Lorem ipsum d Nesciunt, asperiores. Cum dicta eos aspernatur illum dolores ipsum, id magnam illum dolores ipsum, id amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis',
    style: {
      shadow: `5px -5px 30px #67559F,
              -5px 5px 20px #473E8F`,
      bg: `linear-gradient(145deg, #67559F 20%, #473E8F 80%)`,
    },
  },
  {
    id: '5',
    logo: 'icons/php.svg',
    name: 'PHP',
    content:
      'Nesciunt, asperiores. Cum dicta eos aspernatur quibusdam magnam illum dolores ipsum,Lorem ipsum dolor sit amet consectetur adipisicing elit. od amet distinctio! Accusantium fugiat alias possimus',
    style: {
      shadow: `5px -5px 30px #01A8CB,
              -5px 5px 20px #00A8A8`,
      bg: `linear-gradient(145deg, #01A8CB 30%, #00A8A8 70%)`,
    },
  },
  {
    id: '6',
    logo: 'icons/laravel.svg',
    name: 'LARAVEL',
    content:
      'Amet consectetur adipisicing elit. Nesciunt, asperiores. Cum dicta eos aspernatur quibusdam ipsum, id amet distinctio! Lorem ipsum dolor sit Accusantium fugiat alias possimus velit. Unde, quos ',
    style: {
      shadow: `5px -5px 30px #A5B726,
              -5px 5px 20px #61BA47`,
      bg: `linear-gradient(145deg, #A5B726 30%, #61BA47 70%)`,
    },
  },
  {
    id: '7',
    logo: 'icons/my_sql.svg',
    name: 'MySQL',
    content:
      'Qdipisicing elit. Nesciunt, asperiores. Cum dicta eos Lorem ipsum dolor sit amet consectetur a illum dolores ipsum, id amet distinctio! Accusantium fugiat alias possimus velit. Unde',
    style: {
      shadow: `5px -5px 30px #748c96,
              -5px 5px 20px #323786`,
      bg: `linear-gradient(145deg, #748c96 20%, #323786  80%)`,
    },
  },
];

const iconDiv = document.querySelectorAll('.icons div');
const showIcon = document.querySelector('.show-icon');
const iconContent = document.querySelector('.body');
const iconTitle = document.querySelector('.icon-title');
const showBg = document.querySelector('.show');
const skillSection = document.getElementById('skills');
const hideShow = document.querySelector('.show small');


iconDiv.forEach((iconBtn) => {
  iconBtn.addEventListener('click', () => {
    
    showLang.map(lang => {
      if (lang.id === iconBtn.id) {
        showBg.style.backgroundImage = `${lang.style.bg}`;
        showBg.style.boxShadow = `${lang.style.shadow}`;
        showIcon.innerHTML = `<img src="${lang.logo}">`;
        iconTitle.innerHTML = `${lang.name}`;
        iconContent.innerHTML = `${lang.content}`;
      }
    })
        

    if (skillSection.offsetWidth <= 768) {
      showBg.classList.add('active');
      showBg.classList.remove('scroll-right');
      showBg.classList.add('scroll-scale');
    }

    hideShow.addEventListener('click', () => {
      showBg.classList.remove('active');
    });

  });
});



//! links................................................................

const linkedin = document.getElementById('linkedin');

linkedin.addEventListener('click', () => {
  window.location.href = 'https://www.linkedin.com/in/swan-htet-103334283/';
});

const github = document.getElementById('github');

github.addEventListener('click', () => {
  window.location.href = 'https://github.com/Rupic240';
});

const facebook = document.getElementById('fb');

facebook.addEventListener('click', () => {
  window.location.href =
    'https://www.facebook.com/profile.php?id=100049234651725';
});

const instagram = document.getElementById('insta');

instagram.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/_rupicflynn_/';
});

const emailButton = document.getElementById('mail');

emailButton.addEventListener('click', () => {
  const email = 'swanhtetpaing240@gmail.com';
  const subject = 'Hello! Hire Me';
  const body = '';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});


//! go to home page................................................................

const goTop = document.getElementById('go-top');

goTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

//! image slider ...............................................................

const swiperEl = document.querySelector('swiper-container');
Object.assign(swiperEl, {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();

// document.addEventListener('DOMContentLoaded', () => {
//   const cardSlider = document.querySelector('.card-slider');
//   const cards = document.querySelectorAll('.card');
//   const moveBtn = document.querySelectorAll('.card-container button');
//   const cardWidth = cardSlider.querySelector('.card').offsetWidth;

//   let isDraging = false;
//   let startPoint = 0;
//   let startScrollLeft = 0;

//   moveBtn.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       infiniteLoop();
//       cardSlider.scrollLeft += btn.id === 'prev' ? -cardWidth : cardWidth;
//     });
//   });

//   const cloneCards = [...cards].map((clone) => clone.cloneNode(true));
//   cloneCards.forEach((card) => {
//     cardSlider.appendChild(card);
//   });

//   const startDraging = (e) => {
//     isDraging = true;
//     cardSlider.classList.add('dragging');
//     startPoint = e.pageX;
//     startScrollLeft = cardSlider.scrollLeft;
//   };

//   const draging = (e) => {
//     if (!isDraging) return;
//     cardSlider.scrollLeft = startScrollLeft - (e.pageX - startPoint);
//   };

//   const stopDraging = () => {
//     isDraging = false;
//     cardSlider.classList.remove('dragging');
//   };

//   const infiniteLoop = () => {
//     if (cardSlider.scrollLeft === 0) {
//       switch (cardSlider.offsetWidth) {
//         case 561:
//           cardSlider.classList.add('no-tran');
//           cardSlider.scrollLeft =
//             cardSlider.scrollWidth - 3 * cardSlider.offsetWidth;
//           cardSlider.classList.remove('no-tran');
//           break;
//         case 299:
//           cardSlider.classList.add('no-tran');
//           cardSlider.scrollLeft =
//             cardSlider.scrollWidth - 6 * cardSlider.offsetWidth;
//           cardSlider.classList.remove('no-tran');
//           break;
//         default:
//           cardSlider.classList.add('no-tran');
//           cardSlider.scrollLeft =
//             cardSlider.scrollWidth - 2 * cardSlider.offsetWidth;
//           cardSlider.classList.remove('no-tran');
//           break;
//       }
//     } else if (
//       Math.ceil(cardSlider.scrollLeft) ===
//       cardSlider.scrollWidth - cardSlider.offsetWidth
//     ) {
//       switch (cardSlider.offsetWidth) {
//         case 561:
//           cardSlider.classList.add('no-tran');
//           cardSlider.scrollLeft = 2 * cardSlider.offsetWidth;
//           cardSlider.classList.remove('no-tran');
//           break;
//         case 299:
//           cardSlider.classList.add('no-tran');
//           cardSlider.scrollLeft = 5 * cardSlider.offsetWidth;
//           cardSlider.classList.remove('no-tran');
//           break;
//         default:
//           cardSlider.classList.add('no-tran');
//           cardSlider.scrollLeft = cardSlider.offsetWidth;
//           cardSlider.classList.remove('no-tran');
//           break;
//       }
//     }
//   };


//   const navAnimation = () => {

//     let interval;

//     const startAni = () => {
//       interval = setInterval(() => {
//         cardSlider.scrollLeft += cardWidth;
//       }, 3000);
//     }
//     startAni();

//     const stopAni = () => {
//       clearInterval(interval);
//     }

//     cardSlider.addEventListener('mouseover', stopAni);
//     cardSlider.addEventListener('mouseleave', startAni);
//     moveBtn.forEach(btn => {
//       btn.addEventListener('mouseover', stopAni);
//       btn.addEventListener('mouseleave', startAni);
//     })

//   };

//   navAnimation();
  
//   cardSlider.addEventListener('mousedown', startDraging);
//   cardSlider.addEventListener('mousemove', draging);
//   cardSlider.addEventListener('mouseup', stopDraging);
//   cardSlider.addEventListener('scroll', infiniteLoop);
// });