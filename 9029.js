// Hightlight Project 0 //
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

// Highlight Project 1 //
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

// Highlight Project 2 //
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