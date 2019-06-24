let basket = {
  headphones: 325,
  charger: 187,
  usb: 220,
  price: 0,
  priceCounter: function () {
    this.price = this.headphones + this.charger + this.usb;
    console.log("Общая сумма товаров: " + this.price);
  }
}

basket.priceCounter();

let counter = -2;
for (let key in basket) {
  counter++;
}

let div = document.getElementsByTagName('div')[0];
console.log("TCL: div", div)
div.className = 'wrapper';
let wrapper = document.querySelector('.wrapper');
let msg = document.createElement('div');

(function showMsg() {
  if (basket.price == 0) {
    msg.innerHTML = 'Корзина пуста';
    wrapper.appendChild(msg);
  } else {
    msg.innerHTML = `В корзине: ${counter} товарa на сумму ${basket.price} рубля`;
    wrapper.appendChild(msg);
  }
})();