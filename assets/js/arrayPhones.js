// 6 Задано масив з описом телефонів з полями id, brand, model, color, price, RAM, ... (можна обрати будь-яку іншу сутність). Можна згенерувати дані за допомогою ШІ.
// - Сформувати розмітку для карток. (*Застилізувати картки.)
// - Знайти середню ціну телефонів.
// - *Знайти кількість телефонів з RAM 4, 6, 8, 12 ГБ (можна спробувати накопичити дані в об'єкт вигляду: ключ - обсяг RAM, значення - кількість телефонів з цим обсягом RAM).

const phones = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 14",
    color: "Black",
    price: 999,
    RAM: 6,
    image: "https://content1.rozetka.com.ua/goods/images/big/284913535.jpg",
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S23",
    color: "White",
    price: 899,
    RAM: 8,
    image: "https://content.rozetka.com.ua/goods/images/big/320499894.jpg",
  },
  {
    id: 3,
    brand: "Google",
    model: "Pixel 7",
    color: "Green",
    price: 799,
    RAM: 8,
    image: "https://content2.rozetka.com.ua/goods/images/big/417935859.jpg",
  },
  {
    id: 4,
    brand: "OnePlus",
    model: "9 Pro",
    color: "Silver",
    price: 699,
    RAM: 12,
    image: "https://content2.rozetka.com.ua/goods/images/big/194862977.jpg",
  },
  {
    id: 5,
    brand: "Xiaomi",
    model: "Mi 11",
    color: "Blue",
    price: 599,
    RAM: 6,
    image: "https://content1.rozetka.com.ua/goods/images/big/160643974.jpg",
  },
  {
    id: 6,
    brand: "Oppo",
    model: "Find X7",
    color: "Brown",
    price: 549,
    RAM: 8,
    image: "https://content.rozetka.com.ua/goods/images/big/414753872.jpg",
  },
  {
    id: 7,
    brand: "Sony",
    model: "Xperia 5 III",
    color: "Red",
    price: 649,
    RAM: 8,
    image: "https://content.rozetka.com.ua/goods/images/big/221214566.jpg",
  },
  {
    id: 8,
    brand: "Huawei",
    model: "P50",
    color: "Gold",
    price: 699,
    RAM: 8,
    image: "https://content2.rozetka.com.ua/goods/images/big/275435381.jpg",
  },
  {
    id: 9,
    brand: "Asus",
    model: "ROG Phone 6",
    color: "Black",
    price: 999,
    RAM: 12,
    image: "https://content.rozetka.com.ua/goods/images/big/433900663.jpg",
  },
  {
    id: 10,
    brand: "Realme",
    model: "GT Master",
    color: "Grey",
    price: 399,
    RAM: 6,
    image: "https://content1.rozetka.com.ua/goods/images/big/279053385.jpg",
  },
  {
    id: 11,
    brand: "Nokia",
    model: "G50",
    color: "Grey",
    price: 349,
    image: "https://content2.rozetka.com.ua/goods/images/big/363240555.jpg",
    RAM: 4,
  },
  {
    id: 12,
    brand: "Motorola",
    model: "Edge 30",
    color: "White",
    price: 499,
    RAM: 6,
    image: "https://images.prom.ua/4371410327_w528_h473_motorola-edge-30.jpg",
  },
];

function addPhone(phone) {
  document.write(`
  <article class='phone-card'>
  <img class="phone-img" src=${phone.image} alt="">
      <h2 class='title'>${phone.brand} ${phone.model}</h2>
      <p class='discriprion'>Color: ${phone.color}</p>
      <p class='discriprion'>RAM: ${phone.RAM}GB</p>
      <p class='discriprion'>Price: $${phone.price}</p>
      <button class = 'btn'>BUY!</button>
    </article>
  `);
}

document.write("<section class='card-list'>");
phones.forEach(addPhone);
document.write("</section>");

// - Знайти середню ціну телефонів.

function midllePrice(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum / arr.length;
}

console.log("Cередня ціна телефона:", midllePrice(phones), "$");

// - *Знайти кількість телефонів з RAM 4, 6, 8, 12 ГБ (можна спробувати накопичити дані в об'єкт вигляду: ключ - обсяг RAM, значення - кількість телефонів з цим обсягом RAM).

const ramCount = {};

for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  const ram = phone.RAM;

  if (ram in ramCount) {
    ramCount[ram]++;
  } else {
    ramCount[ram] = 1;
  }
}

console.log(ramCount);
