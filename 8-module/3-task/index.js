export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {

    if (!this.cartItems.includes(product)) {
      let count = 1;
      this.cartItems.push(product);
      this.cartItems.push(count);
    } else {
      let currentItem = this.cartItems.indexOf(product);
      let currentItemCounter = currentItem + 1;

      this.cartItems[currentItemCounter]++;
    }

    this.onProductUpdate(product);
  }

  updateProductCount(productId, amount) {
    let productToReturn;

    this.cartItems.forEach((product, index) => {
      if(product.id === productId) {
        this.cartItems[index+1] += amount;

        if(this.cartItems[index+1] === 0) {
          this.cartItems.splice(index, 2);
        }


        productToReturn = product;
      }
    });

    this.onProductUpdate(productToReturn);
  }

  isEmpty() {
    return this.cartItems.length ? false : true;
  }

  getTotalCount() {
    return this.cartItems.filter(item => typeof item === 'number')
    .reduce((sum, item) => sum + item, 0);
  }

  getTotalPrice() {
    let sum = 0;
    
    for(let i = 0; i < this.cartItems.length; i++) {
      if(i % 2 === 0) {
        sum += this.cartItems[i].price * this.cartItems[i+1];
      }
    }
    return sum;
  }

  onProductUpdate() {
    this.cartIcon.update(this);
  }
}

