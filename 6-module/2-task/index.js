import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.divCardContainer = document.createElement('div'); 
    this.divCardContainer.classList.add('card');

    this.divCardTop = document.createElement('div');
    this.divCardTop.classList.add('card__top');
    this.divCardContainer.appendChild(this.divCardTop);

    const root = '/assets/images/products/';

    this.img = document.createElement('img'); 
    this.img.classList.add('card__image');
    this.img.alt = 'product';
    this.img.src = root + product.image;
    this.divCardTop.appendChild(this.img);

    this.span = document.createElement('span');
    this.span.classList.add('card__price');
    this.span.textContent = `€${product.price.toFixed(2)}`;
    this.divCardTop.appendChild(this.span);

    this.divCardBody = document.createElement('div');
    this.divCardBody.classList.add('card__body');
    this.divCardContainer.appendChild(this.divCardBody);

    this.divProductName = document.createElement('div');
    this.divProductName.classList.add('card__title');
    this.divProductName.textContent = product.name;
    this.divCardBody.appendChild(this.divProductName);

    this.button = document.createElement('button');
    this.button.classList.add('card__button');
    this.button.type = 'button';
    this.divCardBody.appendChild(this.button);

    this.img = document.createElement('img'); 
    this.img.alt = 'icon';
    this.img.src = '/assets/images/icons/plus-icon.svg';
    this.button.appendChild(this.img);

    this.elem = this.divCardContainer;

    let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });

    this.button.addEventListener('click', () => {
      this.elem.dispatchEvent(event);
    })



  }
}
