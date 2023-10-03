//! Navbar Menu.......................................................

const menu = document.getElementById('menu');
const links = document.querySelector('.links');
const hide = document.querySelectorAll('.links li');

menu.addEventListener('click', () => {
  links.classList.toggle('active');
  menu.classList.toggle('active');
});

hide.forEach((hideLinks) => {
  hideLinks.addEventListener('click', () => {
    links.classList.remove('active');
    menu.classList.remove('active');
  });
});

//! parallax............................................................

const moveRight = document.getElementById('myimg');
const moveLeft = document.getElementById('intro');
const line = document.getElementById('line');
const aboutImg = document.getElementById('about-img');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.links li a');

window.addEventListener('scroll', () => {
  const val = window.scrollY;

  moveRight.style.right = val * -0.3 + 'px';
  moveLeft.style.left = val * -0.3 + 'px';
  line.style.top = val * -0.4 + 'px';

  sections.forEach((sec) => {
    let ofsTop = sec.offsetTop - 20;
    let ofsHeight = sec.offsetHeight - 150;
    let act = sec.getAttribute('id');

    if (val >= ofsTop && val <= ofsTop + ofsHeight) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('.links li a[href*=' + act + ']')
          .classList.add('active');
      });
    }

    //! Remove the active animation...............................

    let ofsWidth = sec.offsetWidth;

    if (ofsWidth <= 425) {
      aboutImg.classList.remove('scroll-left');
      moveLeft.style.left = 0;
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
    'https://drive.google.com/uc?export=download&id=1XEHolwit0vhTbUXmwH1EVm8nYa3900Q7';
  const fileName = 'cv_form.pdf';

  hiddenLink.href = fileUrl;
  hiddenLink.download = fileName;

  hiddenLink.click();
};

cv.addEventListener('click', downloadCv);

//! show_skills................................................................

const iconDiv = document.querySelectorAll('.icons div');
const showIcon = document.querySelector('.show-icon');
const iconContent = document.querySelector('.body');
const iconTitle = document.querySelector('.icon-title');
const showBg = document.querySelector('.show');
const skillSection = document.getElementById('skills');
const hideShow = document.querySelector('.show small');


iconDiv.forEach((iconBtn) => {
  iconBtn.addEventListener('click', () => {
    switch (iconBtn.id) {
      case 'html':
        showBg.style.backgroundImage = `linear-gradient(145deg, #FFD63C 20%, #F9B118 80%)`;
        showBg.style.boxShadow = `5px -5px 30px #FFD63C,
                                  -5px 5px 20px #F9B118`;
        showIcon.innerHTML = `<img src="icons/html.svg">`;
        iconTitle.innerHTML = 'HTML';
        iconContent.innerHTML =
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, asperiores. Cum dicta eos aspernatur quibusdam magnam illum dolores ipsum, id amet distinctio! Accusantium fugiat alias';
        break;
      case 'css':
        showBg.style.backgroundImage = `linear-gradient(145deg, #F99F1A 20%, #F16123 80%)`;
        showBg.style.boxShadow = `5px -5px 30px #F99F1A,
                                  -5px 5px 20px #F16123`;
        showIcon.innerHTML = `<img src="icons/css.svg">`;
        iconTitle.innerHTML = 'CSS';
        iconContent.innerHTML =
          'Wit amet consectetur adipisicing elit. Lorem ipsum dolorNesciunt, asperiores. Cum dicta eos aspernatur quibusdam magnam amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis!';
        break;
      case 'js':
        showBg.style.backgroundImage = `linear-gradient(145deg, #B84A87 20%, #A62290 80%)`;
        showBg.style.boxShadow = `5px -5px 30px #B84A87,
                                  -5px 5px 20px #A62290`;
        showIcon.innerHTML = `<img src="icons/js.svg">`;
        iconTitle.innerHTML = 'JavaScript';
        iconContent.innerHTML =
          'Lor possimus velit. Unde, quos corporis! sit amet consectetur adipisicing elit. Nesciunt, asperiores. Cum dicta eos aspernatur dolores ipsum, id Lorem ipsum do amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis!';
        break;
      case 'react':
        showBg.style.backgroundImage = `linear-gradient(145deg, #67559F 20%, #473E8F 80%)`;
        showBg.style.boxShadow = `5px -5px 30px #67559F,
                                  -5px 5px 20px #473E8F`;
        showIcon.innerHTML = `<img src="icons/react.svg">`;
        iconTitle.innerHTML = 'REACT';
        iconContent.innerHTML =
          'Dolor sit amet consectetur adipisicing elit. Lorem ipsum d Nesciunt, asperiores. Cum dicta eos aspernatur illum dolores ipsum, id magnam illum dolores ipsum, id amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis!';
        break;
      case 'php':
        showBg.style.backgroundImage = `linear-gradient(145deg, #01A8CB 30%, #00A8A8 70%)`;
        showBg.style.boxShadow = `5px -5px 30px #01A8CB,
                                  -5px 5px 20px #00A8A8`;
        showIcon.innerHTML = `<img src="icons/php.svg">`;
        iconTitle.innerHTML = 'PHP';
        iconContent.innerHTML =
          'Nesciunt, asperiores. Cum dicta eos aspernatur quibusdam magnam illum dolores ipsum,Lorem ipsum dolor sit amet consectetur adipisicing elit. od amet distinctio! Accusantium fugiat alias possimus';
        break;
      case 'laravel':
        showBg.style.backgroundImage = `linear-gradient(145deg, #A5B726 30%, #61BA47 70%)`;
        showBg.style.boxShadow = `5px -5px 30px #A5B726,
                                  -5px 5px 20px #61BA47`;
        showIcon.innerHTML = `<img src="icons/laravel.svg">`;
        iconTitle.innerHTML = 'LARAVEL';
        iconContent.innerHTML =
          'Amet consectetur adipisicing elit. Nesciunt, asperiores. Cum dicta eos aspernatur quibusdam ipsum, id amet distinctio! Lorem ipsum dolor sit Accusantium fugiat alias possimus velit. Unde, quos corporis!';
        break;
      case 'database':
        showBg.style.backgroundImage = `linear-gradient(145deg, #748c96 20%, #323786  80%)`;
        showBg.style.boxShadow = `5px -5px 30px #748c96,
                                    -5px 5px 20px #323786`;
        showIcon.innerHTML = `<img src="icons/my_sql.svg">`;
        iconTitle.innerHTML = 'MySQL';
        iconContent.innerHTML =
          'Qdipisicing elit. Nesciunt, asperiores. Cum dicta eos Lorem ipsum dolor sit amet consectetur a illum dolores ipsum, id amet distinctio! Accusantium fugiat alias possimus velit. Unde, quos corporis!';
        break;
      default:
        break;
    }

    if (skillSection.offsetWidth <= 425) {
      showBg.classList.add('active');
      showBg.classList.remove('scroll-right');
      showBg.classList.add('scroll-scale');
    }

    hideShow.addEventListener('click', () => {
      showBg.classList.remove('active');
    });

  });
});

//! image slider ...............................................................

document.addEventListener('DOMContentLoaded', () => {
  const cardSlider = document.querySelector('.card-slider');
  const cards = document.querySelectorAll('.card');
  const moveBtn = document.querySelectorAll('.card-container button');
  const cardWidth = cardSlider.querySelector('.card').offsetWidth;

  let isDraging = false;
  let startPoint = 0;
  let startScrollLeft = 0;

  moveBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      infiniteLoop();
      cardSlider.scrollLeft += btn.id === 'prev' ? -cardWidth : cardWidth;
    });
  });

  const cloneCards = [...cards].map((clone) => clone.cloneNode(true));
  cloneCards.forEach((card) => {
    cardSlider.appendChild(card);
  });

  const startDraging = (e) => {
    isDraging = true;
    cardSlider.classList.add('dragging');
    startPoint = e.pageX;
    startScrollLeft = cardSlider.scrollLeft;
  };

  const draging = (e) => {
    if (!isDraging) return;
    cardSlider.scrollLeft = startScrollLeft - (e.pageX - startPoint);
  };

  const stopDraging = () => {
    isDraging = false;
    cardSlider.classList.remove('dragging');
  };

  const infiniteLoop = () => {
    if (cardSlider.scrollLeft === 0) {
      cardSlider.classList.add('no-tran');
      cardSlider.scrollLeft =
        cardSlider.scrollWidth - 2 * cardSlider.offsetWidth;
      cardSlider.classList.remove('no-tran');
    } else if (
      Math.ceil(cardSlider.scrollLeft) ===
      cardSlider.scrollWidth - cardSlider.offsetWidth
    ) {
      cardSlider.classList.add('no-tran');
      cardSlider.scrollLeft = cardSlider.offsetWidth;
      cardSlider.classList.remove('no-tran');
    }
  };

  cardSlider.addEventListener('mousedown', startDraging);
  cardSlider.addEventListener('mousemove', draging);
  cardSlider.addEventListener('mouseup', stopDraging);
  cardSlider.addEventListener('scroll', infiniteLoop);
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
