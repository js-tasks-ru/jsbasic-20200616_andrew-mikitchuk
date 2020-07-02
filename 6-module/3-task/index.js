import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.divCarouselContainer = document.createElement('div');
    this.divCarouselContainer.classList.add('carousel');

    this.elem = this.divCarouselContainer;

    
    //adding right arrow
    this.divArrowRight = document.createElement('div');
    this.divArrowRight.classList.add('carousel__arrow');
    this.divArrowRight.classList.add('carousel__arrow_right');
    this.divCarouselContainer.appendChild(this.divArrowRight);

    this.img = document.createElement('img');
    this.img.src = '/assets/images/icons/angle-icon.svg';
    this.img.alt = 'icon';
    this.divArrowRight.appendChild(this.img);


    //adding left arrow
    this.divArrowLeft = document.createElement('div');
    this.divArrowLeft.classList.add('carousel__arrow');
    this.divArrowLeft.classList.add('carousel__arrow_left');
    this.divCarouselContainer.appendChild(this.divArrowLeft);

    this.img = document.createElement('img');
    this.img.src = '/assets/images/icons/angle-left-icon.svg';
    this.img.alt = 'icon';
    this.divArrowLeft.appendChild(this.img);


    this.divCarouselInner = document.createElement('div');
    this.divCarouselInner.classList.add('carousel__inner');
    this.divCarouselContainer.appendChild(this.divCarouselInner);


    this.slidesCouner = 0;

    this.slides.forEach(slide => {
      this.divCarouselInner.appendChild(this.createSlide(slide));
      this.slidesCouner++;
    });


    // //switching slides
    const slideOffsetWidth = 500;
    
    let currentSlide = 1;
    const maxNumberOfSlides = this.slidesCouner;
    const minNumberOfSlides = 1;
  
    this.divArrowRight.addEventListener( "click", () =>  {
     
     
      if(currentSlide < maxNumberOfSlides) {
        currentSlide++;
        this.divCarouselInner.style.transform = `translateX(${slideOffsetWidth * (currentSlide-1) * -1}px)`
      } 
  
      if (currentSlide == minNumberOfSlides+1) {
        this.divArrowLeft.style.display = '';
      } else if (currentSlide == maxNumberOfSlides) {
        this.divArrowRight.style.display = 'none';
        }
    })
  
  
    this.divArrowLeft.style.display = 'none';
  
    this.divArrowLeft.addEventListener( "click", () =>  {
      if(currentSlide > minNumberOfSlides) {
        currentSlide--;
        this.divCarouselInner.style.transform = `translateX(${slideOffsetWidth * (currentSlide-1) * -1}px)`
      }
  
      if (currentSlide == maxNumberOfSlides-1) {
        this.divArrowRight.style.display = '';
      } else if (currentSlide == minNumberOfSlides) {
        this.divArrowLeft.style.display = 'none';
      }
  
    })

  }
  createSlide(slide) {
    this.divSlide = document.createElement('div');
    this.divSlide.classList.add('carousel__slide');
    this.divSlide.setAttribute('data-id', slide.id);

    const root = '/assets/images/carousel/';

    this.img = document.createElement('img');
    this.img.src = root + slide.image;
    this.img.classList.add('carousel__img');
    this.img.alt = 'slide';
    this.divSlide.appendChild(this.img);

    this.divCarouselCaption = document.createElement('div');
    this.divCarouselCaption.classList.add('carousel__caption');
    this.divSlide.appendChild(this.divCarouselCaption);

    this.span = document.createElement('span');
    this.span.classList.add('carousel__price');
    this.span.textContent = `€${slide.price.toFixed(2)}`;
    this.divCarouselCaption.appendChild(this.span);

    this.divCarouselName = document.createElement('div');
    this.divCarouselName.classList.add('carousel__title');
    this.divCarouselName.textContent = slide.name;
    this.divCarouselCaption.appendChild(this.divCarouselName);

    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.classList.add('carousel__button');
    this.divCarouselCaption.appendChild(this.button);

    let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: slide.id, // Уникальный идентификатора товара из объекта слайда
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });

    this.button.addEventListener('click', () => {
      this.elem.dispatchEvent(event);
    })

    this.img = document.createElement('img');
    this.img.src = '/assets/images/icons/plus-icon.svg';
    this.img.alt = 'icon';
    this.button.appendChild(this.img);

    return this.divSlide;
  }

}
