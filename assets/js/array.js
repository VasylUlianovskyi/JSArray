// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
// 2 Вивести розмір масиву.
// 3 Зробити копію масиву.

// Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли
// 4 Вивести елементи з парними індексами. ///
// 5 Знайти добуток елементів масиву ///

const numbers = [1, 2, 3, -6, -3, 10, 0];

console.log(numbers);

const numbers2 = [...numbers];
numbers2.shift();
numbers2.pop();
numbers2.unshift(-3);
numbers2.push(-5);

console.log("numbers >>", numbers);
console.log("Розмір масиву =", numbers.length);

console.log("numbers2 >>", numbers2);

let pairIndex = [];
for (let i = 0; i < numbers.length; i += 2) {
  pairIndex.push(numbers[i]);
}

console.log(pairIndex);

function numbersMult(num) {
  let sum = 1;
  for (let i = 0; i < num.length; i++) {
    sum *= num[i];
  }
  return sum;
}

console.log(numbersMult(numbers));

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter

const possitiveNumbers = numbers.filter((number) => number !== 0);
console.log(possitiveNumbers);

// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map

const numbersMultipy100 = numbers.map((number) => number / 100);
console.log(numbersMultipy100);

// 10 Вивести елементи масиву, зведені у куб. // forEach

const numbersCubed = [];
numbers.forEach((number) => {
  const inCube = number ** 3;
  numbersCubed.push(inCube);
});

console.log(numbersCubed);

// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex

const numbersSquared100 = numbers.findIndex(
  (number) => number * number === 100
);

if (numbersSquared100 !== -1) {
  console.log(numbersSquared100);
  numbers.splice(5, 1);
  console.log(numbers);
} else {
  console.log("Елемент, квадрат якого дорівнює 100, не існує.");
}

// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every

function isNumbersSimple(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const isSimpleNumbers = numbers.every(isNumbersSimple);
console.log(isSimpleNumbers);

//13 *Перевірити, чи є у масиві бодай один від'ємний елемент. // some

const isNegNumber = numbers.some((number) => number < 0);
console.log(isNegNumber);
