function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");

  const sliderContainer = document.querySelector(".carousel__inner");
  const slides = sliderContainer.children;
  const slideOffsetWidth = sliderContainer.children[0].offsetWidth;

  let currentSlide = 1;
  const maxNumberOfSlides = 4;
  const minNumberOfSlides = 1;

  arrowRight.addEventListener( "click", () =>  {
   
   
    if(currentSlide < maxNumberOfSlides) {
      currentSlide++;
      sliderContainer.style.transform = `translateX(${slideOffsetWidth * (currentSlide-1) * -1}px)`
    } 

    if (currentSlide == minNumberOfSlides+1) {
      arrowLeft.style.display = '';
    } else if (currentSlide == maxNumberOfSlides) {
        arrowRight.style.display = 'none';
      }
  })


  arrowLeft.style.display = 'none';

  arrowLeft.addEventListener( "click", () =>  {
    if(currentSlide > minNumberOfSlides) {
      currentSlide--;
      sliderContainer.style.transform = `translateX(${slideOffsetWidth * (currentSlide-1) * -1}px)`
    }

    if (currentSlide == maxNumberOfSlides-1) {
      arrowRight.style.display = '';
    } else if (currentSlide == minNumberOfSlides) {
      arrowLeft.style.display = 'none';
    }

  })
}
