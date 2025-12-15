// Simple accessible carousel with lazy-loading
(function(){
  'use strict';
  const root = document.documentElement;
  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.project-carousel');
    carousels.forEach(initCarousel);
  });

  function initCarousel(container){
    const track = container.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prev = container.querySelector('.carousel-btn.prev');
    const next = container.querySelector('.carousel-btn.next');
    const indicators = Array.from(container.querySelectorAll('.indicator'));
    const viewport = container.querySelector('.carousel-viewport');

    let current = 0;
    const slideWidth = () => slides[0] ? slides[0].getBoundingClientRect().width : 0;

    // set slides position
    function layout(){
      const w = slideWidth();
      slides.forEach((s,i) => s.style.transform = `translateX(${i * w}px)`);
    }

    // lazy load current and neighbours
    function lazyLoad(index){
      [index-1, index, index+1].forEach(i => {
        if(i >=0 && i < slides.length){
          const img = slides[i].querySelector('img');
          if(img && img.dataset.src && !img.src){ img.src = img.dataset.src; }
        }
      });
    }

    function goTo(index){
      current = Math.max(0, Math.min(index, slides.length-1));
      const w = slideWidth()*2;
      track.style.transform = `translateX(${-current * w}px)`;
      indicators.forEach((b,i) => b.classList.toggle('active', i === current));
      lazyLoad(current);
    }

    // events
    prev.addEventListener('click', () => goTo(current-1));
    next.addEventListener('click', () => goTo(current+1));
    indicators.forEach((b) => b.addEventListener('click', e => goTo(Number(e.currentTarget.dataset.index))));

    // swipe support
    let startX = 0;
    let isDown = false;
    viewport.addEventListener('pointerdown', (e)=>{ isDown=true; startX=e.clientX; viewport.setPointerCapture(e.pointerId); });
    viewport.addEventListener('pointerup', (e)=>{ if(!isDown) return; isDown=false; const dx = e.clientX - startX; if(dx>30) goTo(current-1); else if(dx < -30) goTo(current+1); });

    // resize
    window.addEventListener('resize', layout);

    // init
    layout();
    lazyLoad(0);
    goTo(0);
  }
})();
