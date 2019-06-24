let basket = {
    hearphones: 325,
    charger: 187,
    usb: 220,
    price: 0,
    priceCounter: function () {
  
      this.price = this.hearphones + this.charger + this.usb
      console.log("Общая сумма товаров: " + this.price);
  
    }
  }
  
  basket.priceCounter();