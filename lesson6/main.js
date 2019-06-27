let basket = {
  headphones: 325,
  charger: 187,
  usb: 220,
  price: 0,
  priceCounter: function () {
    this.price = this.headphones + this.charger + this.usb;
  }
}

basket.priceCounter();

let div = document.getElementsByTagName('div')[0];
div.className = 'wrapper';
let wrapper = document.querySelector('.wrapper');
let msg = document.createElement('div');
let btn1 = document.querySelector('.good');
let btn2 = document.querySelector('.good-2');
let btn3 = document.querySelector('.show-price');

btn1.addEventListener('click', () => {
  basket.socks = 345;
  basket.priceCounter = function() {
    basket.price = basket.headphones + basket.charger + basket.usb + basket.socks;
  }
  basket.priceCounter();
});

btn3.addEventListener('click', function() {
  let counter = -2;
  for (let key in basket) {
    counter++;
  }
  if (basket.price == 0) {
    msg.innerHTML = 'Корзина пуста';
    wrapper.appendChild(msg);
  } else {
    msg.innerHTML = `В корзине: ${counter} товарa на сумму ${basket.price} рубля`;
    wrapper.appendChild(msg);
  }
});