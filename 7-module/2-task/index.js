import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.divModal = document.createElement('div');
    this.divModal.classList.add('modal');
  

    this.modalOverlay = document.createElement('div');
    this.modalOverlay.classList.add('modal__overlay');
    this.divModal.appendChild(this.modalOverlay);

    this.modalInner = document.createElement('div');
    this.modalInner.classList.add('modal__inner');
    this.divModal.appendChild(this.modalInner);

    this.modalHeader = document.createElement('div');
    this.modalHeader.classList.add('modal__header');
    this.modalInner.appendChild(this.modalHeader);

    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.classList.add('modal__close');
    this.modalHeader.appendChild(this.button);

    this.button.addEventListener('click', () => {
      this.close();
    })


    this.img = document.createElement('img');
    this.img.src = '/assets/images/icons/cross-icon.svg';
    this.img.alt = 'close-icon';
    this.button.appendChild(this.img);

    this.h3 = document.createElement('h3');
    this.h3.classList.add('modal__title');
    this.modalHeader.appendChild(this.h3);

    this.modalBody = document.createElement('div');
    this.modalBody.classList.add('modal__body');
    this.modalBody.textContent = 'A сюда нужно добавлять содержимое тела модального окна';
    this.modalInner.appendChild(this.modalBody);


    document.onkeydown = () => {
      if(event.code === 'Escape') {
        this.close();
      }
    }
  }
  open() {
    document.body.appendChild(this.divModal);
    document.body.classList.add('is-modal-open');
  }
  setTitle(title) {
    this.h3.textContent = title;
  }
  setBody(node) {
    this.modalBody.innerHTML = '';
    this.modalBody.appendChild(node);
  }
  close() {
    document.body.classList.remove('is-modal-open');
    this.divModal.remove();
  }
}
