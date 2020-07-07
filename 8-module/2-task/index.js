import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};

    this.productGrid = document.createElement('div');
    this.productGrid.classList.add('products-grid');

    this.elem = this.productGrid;

    this.productGridInner = document.createElement('div');
    this.productGridInner.classList.add('products-grid__inner');
    this.productGrid.appendChild(this.productGridInner);

    this.createProducts(this.products);

  }

  createProducts(products) {
    products.forEach((el) => {
      let card = new ProductCard(el);
      this.productGridInner.append(card.elem);
    });
  }

  updateFilter(filters) {
    this.productGridInner.innerHTML = '';

    Object.assign(this.filters, filters);

    this.filteredProducts = (this.products).filter(item => (this.filters.noNuts != item.nuts) || !(this.filters.noNuts))
      .filter(item => ((this.filters.vegeterianOnly || this.filters.vegetarian) && item.vegeterian) || !(this.filters.vegeterianOnly || this.filters.vegetarian))
      .filter(item => (this.filters.maxSpiciness >= item.spiciness) || !(this.filters.maxSpiciness))
      .filter(item => (this.filters.category === item.category) || !(this.filters.category));

    if (this.filteredProducts) {
      this.createProducts(this.filteredProducts);
    }

  }
}
