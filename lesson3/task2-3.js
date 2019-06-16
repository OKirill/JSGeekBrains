var basket = {
    "Наушники:": 325,
    "Зарядное устройство:": 187,
    "Чехол для телефона": 220
};

var thresh = {
    "Наушники:": 2,
    "Зарядное устройство:": 3,
    "Чехол для телефона": 4
};

var basketItems = 0;                                                 

function priceCounter(x){
    for (var items in x) {
        basketItems++;
    }

    console.log("Всего товаров в корзине: " + basketItems);

    var totalCost = 0;

    for (var item in x) {
            totalCost += x[item];
    }

    console.log("Общая сумма товаров: " + totalCost);
}

priceCounter(basket);

priceCounter(thresh);