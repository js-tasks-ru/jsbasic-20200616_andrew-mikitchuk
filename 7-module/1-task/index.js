import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.divContainer = document.createElement('div');
    this.divContainer.classList.add('ribbon');

    this.elem = this.divContainer;


    this.currentRibbonArrowState = 0;

    //left button
    this.button = document.createElement('button');
    this.button.classList.add('ribbon__arrow');
    this.button.classList.add('ribbon__arrow_left');
    // this.button.classList.add('ribbon__arrow_visible');
    this.divContainer.appendChild(this.button);

    this.img = document.createElement('img');
    this.img.src = '/assets/images/icons/angle-icon.svg';
    this.img.alt = 'icon';
    this.button.appendChild(this.img);

    this.button.addEventListener('click', () => {
      this.nav.scrollBy(-350, 0);
      this.currentRibbonArrowState--;
      const button = document.querySelector('.ribbon__arrow_right');
      button.classList.add('ribbon__arrow_visible');
      if(this.currentRibbonArrowState == 0) {
        const button = document.querySelector('.ribbon__arrow_left');
        button.classList.remove('ribbon__arrow_visible');
      }
    })

    //nav with categories
    this.nav = document.createElement('nav');
    this.nav.classList.add('ribbon__inner');
    this.divContainer.appendChild(this.nav);

    this.categories.forEach( (category, index) => {
      this.nav.appendChild(this.createTagA(category, index));
    });



    //button right
    this.button = document.createElement('button');
    this.button.classList.add('ribbon__arrow');
    this.button.classList.add('ribbon__arrow_right');
    this.button.classList.add('ribbon__arrow_visible');
    this.divContainer.appendChild(this.button);

    this.img = document.createElement('img');
    this.img.src = '/assets/images/icons/angle-icon.svg';
    this.img.alt = 'icon';
    this.button.appendChild(this.img);


    this.button.addEventListener('click', () => {
      this.nav.scrollBy(350, 0);
      this.currentRibbonArrowState++;
      const button = document.querySelector('.ribbon__arrow_left');
      button.classList.add('ribbon__arrow_visible');
      if(this.currentRibbonArrowState == 2) {
        const button = document.querySelector('.ribbon__arrow_right');
        button.classList.remove('ribbon__arrow_visible');
      }
    })
   
  }
  createTagA(category, index){
    this.link = document.createElement('a');
    this.link.href = '#';
    this.link.classList.add('ribbon__item');

    if(index == 0) {
      this.link.classList.add('ribbon__item_active'); //TODO for ALL
    }

    this.link.setAttribute('data-id', category.id);
    this.link.textContent = category.name;

    this.link.addEventListener('click', () => {
      event.preventDefault();
      
      const currentActiveDiv = document.querySelector('.ribbon__item_active');
      currentActiveDiv.classList.remove('ribbon__item_active');

      event.target.classList.add('ribbon__item_active');


      let customEvent = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
        detail: category.id, // уникальный идентификатора категории из её объекта
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      });

      this.elem.dispatchEvent(customEvent);
    })

    return this.link;
  } 
}
