// ------- Hightlight Project Section ------- //

// ------- Hightlight Project 0 ------- //
const boxGlow0 = document.querySelector('.highlight-project-0');

boxGlow0.addEventListener('mouseenter', () => {
  boxGlow0.classList.add('hovered');
});

boxGlow0.addEventListener('mouseleave', () => {
  boxGlow0.classList.add('leaving');
  setTimeout(() => {
    boxGlow0.classList.remove('hovered', 'leaving');
  }, 600);
});

// ------- Highlight Project 1 ------- //
const boxGlow1 = document.querySelector('.highlight-project-1');

boxGlow1.addEventListener('mouseenter', () => {
  boxGlow1.classList.add('hovered');
});

boxGlow1.addEventListener('mouseleave', () => {
  boxGlow1.classList.add('leaving');
  setTimeout(() => {
    boxGlow1.classList.remove('hovered', 'leaving');
  }, 600);
});

// ------- Highlight Project 2 ------- //
const boxGlow2 = document.querySelector('.highlight-project-2');

boxGlow2.addEventListener('mouseenter', () => {
  boxGlow2.classList.add('hovered');
});

boxGlow2.addEventListener('mouseleave', () => {
  boxGlow2.classList.add('leaving');
  setTimeout(() => {
    boxGlow2.classList.remove('hovered', 'leaving');
  }, 600);
});


// ------- Video Hover Play/Pause Section ------ //

// ------- Search Anywhere ------- //
const svideo = document.querySelector('.video-search');
const sbox = document.querySelector('.highlight-project-0');

sbox.addEventListener('mouseenter', () => {
  svideo.play();
});

sbox.addEventListener('mouseleave', () => {
  svideo.pause();
  resetTimer = setTimeout(() => {
    svideo.currentTime = 0;
  }, 5000);
});
// ------- PATHon ------- //
const pvideo = document.querySelector('.video-pathon');
const pbox = document.querySelector('.highlight-project-1');

pbox.addEventListener('mouseenter', () => {
  pvideo.play();
});

pbox.addEventListener('mouseleave', () => {
  pvideo.pause();
  resetTimer = setTimeout(() => {
    pvideo.currentTime = 0;
  }, 5000);
});
// ------- Kali Yuga ------- //
//const video = document.querySelector('.video-kaliyug');
//const box = document.querySelector('.highlight-project-2');

//box.addEventListener('mouseenter', () => {
//  video.play();
//});

//box.addEventListener('mouseleave', () => {
//  video.pause();
//  resetTimer = setTimeout(() => {
//    video.currentTime = 0;
//  }, 5000);
//});


// ------- Floating Icons Section ------- //

// ------- Floating Social Box -------// 
const socialBox = document.querySelector('.social-box');
const contactBadge = document.querySelector('.contact-badge');

socialBox.addEventListener('mouseenter', () => {
  socialBox.classList.add('hovered');
});

socialBox.addEventListener('mouseleave', () => {
  socialBox.classList.remove('hovered');
});

contactBadge.addEventListener('click', () => {
  socialBox.classList.toggle('hovered');
});


// ------- Mobile Autoplay -------//
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Mobile video playing automatically');
        })
        .catch(() => {
          console.log('Autoplay blocked, user interaction required');
        });
    }
  });
}



/////////

