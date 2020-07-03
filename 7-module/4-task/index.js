export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.divSlider = document.createElement('div');
    this.divSlider.classList.add('slider');

    this.elem = this.divSlider;

    this.divSlider.addEventListener('click', () => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);

      document.querySelector('.slider__value').textContent = value;

      let valuePercents = value / segments * 100;

      document.querySelector('.slider__progress').style.width = valuePercents + '%';
      document.querySelector('.slider__thumb').style.left = valuePercents + '%';


      let customEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      });

      this.elem.dispatchEvent(customEvent);

    })


    this.sliderThumb = document.createElement('div');
    this.sliderThumb.classList.add('slider__thumb');
    this.sliderThumb.style.left = '0%';
    this.divSlider.appendChild(this.sliderThumb);


    this.span = document.createElement('span');
    this.span.classList.add('slider__value');
    this.span.textContent = '0';
    this.sliderThumb.appendChild(this.span);

    this.sliderProgress = document.createElement('div');
    this.sliderProgress.classList.add('slider__progress');
    this.sliderProgress.style.width = '0%';
    this.divSlider.appendChild(this.sliderProgress);

    this.sliderSteps = document.createElement('div');
    this.sliderSteps.classList.add('slider__steps');
    this.divSlider.appendChild(this.sliderSteps);

    for (let i = 0; i < steps; i++) {
      this.span = document.createElement('span');
      if (i == 0) {
        this.span.classList.add('slider__step-active');
      }
      this.sliderSteps.appendChild(this.span);
    }


    let thumb = this.elem.querySelector('.slider__thumb');

    thumb.ondragstart = () => false;

    thumb.onpointerdown = (event) => { // (1) отследить нажатие 
      this.elem.classList.add('slider_dragging');

      thumb.onpointermove = (event) => {
        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / this.elem.offsetWidth;

        if (leftRelative < 0) {
          leftRelative = 0;
        }

        if (leftRelative > 1) {
          leftRelative = 0;
        }

        let leftPercents = leftRelative * 100;

        let thumb = this.elem.querySelector('.slider__thumb');
        let progress = this.elem.querySelector('.slider__progress');

        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;

        let segments = steps - 1;
        let approximateValue = leftRelative * segments;

        let value = Math.round(approximateValue);

        document.querySelector('.slider__value').textContent = value;

        thumb.onpointerup = (event) => {
          let customEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
          detail: value, // значение 0, 1, 2, 3, 4
          bubbles: true // событие всплывает - это понадобится в дальнейшем
        });
  
         this.elem.dispatchEvent(customEvent);

         this.elem.classList.remove('slider_dragging');
        }


      }
    }


  }
}
