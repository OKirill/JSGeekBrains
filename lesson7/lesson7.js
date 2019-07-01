var cart = [];

var products = [
  {
    id: 1,
    name: 'Фубтолка',
    price: 1000,
    color: 'Желтый',
  },
  {
    id: 2,
    name: 'Джинсы',
    price: 3000,
    color: 'Синий',
  },
  {
    id: 3,
    name: 'Носки',
    price: 300,
    color: 'Черный',
  },
];

var $cart = document.getElementById('cart');
var $catalog = document.getElementById('catalog');
var $template = document.getElementById('template').children[0];

$catalog.addEventListener('click', handleBuyClick);
$cart.addEventListener('click', handleRemoveClick);

function indexOf(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].id === item.id) {
      return i;
    }
  }

  return -1;
}

function handleRemoveClick(event) {
  if(event.target.classList.contains('remove')) {
    var idx = indexOf({ id: +event.target.dataset.id });

    if(cart[idx].quantity > 1) {
      cart[idx].quantity--;
    } else {
      cart.splice(idx, 1);
    }

    countBasketPrice(cart);
  }
}

function handleBuyClick(event) {
  if(event.target.classList.contains('buy')) {
    var cartItem = {
      id: +event.target.dataset.id,
      name: event.target.dataset.name,
      price: event.target.dataset.price,
    }

    var idx = indexOf(cartItem);

    if(idx === -1) {
      // товара в корзине еще нет
      cartItem.quantity = 1;
      cart.push(cartItem);
    } else {
      cart[idx].quantity++;
    }

    countBasketPrice(cart);
  }
  event.preventDefault();
}

function countBasketPrice(cart) {
  $cart.innerHTML = '';
  if (cart && cart.length > 0) {
    var $ul = document.createElement('ul');
    var sum = 0;
    var count = 0;

    for (var i = 0; i < cart.length; i++) {
      var $li = document.createElement('li');
      var $span = document.createElement('span');
      var $remove = document.createElement('button');

      $span.textContent = cart[i].name + ' (' + cart[i].quantity + ')';
      $remove.textContent = 'x';
      $remove.dataset.id = cart[i].id;
      $remove.classList.add('remove');
      $li.appendChild($span);
      $li.appendChild($remove);
      $ul.appendChild($li);

      sum += cart[i].price * cart[i].quantity;
      count += cart[i].quantity;
    }

    var $total = document.createElement('div');
    $total.textContent = 'В корзине: ' + count + ' товаров на сумму ' + sum + ' рублей';

    $cart.appendChild($ul);
    $cart.appendChild($total);
  } else {
    $cart.textContent = 'Корзина пуста';
  }
}

function buildCatalog(products) {
  for(var i = 0; i < products.length; i++) {
    var $item = $template.cloneNode(true);
    var keys = Object.keys(products[i]);
    var $button = $item.querySelector('.buy');

    for(var j = 0; j < keys.length; j++) {
      var key = keys[j];
      var $element = $item.querySelector('.' + key);
      if($element) {
        $element.textContent = products[i][key];
      }
      $button.dataset[key] = products[i][key];
    }
    
    $catalog.appendChild($item);
  }
}

buildCatalog(products);
countBasketPrice(cart);