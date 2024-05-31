function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

console.table(users);

// * прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип.

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Отримати масив користувачів, які не підписані (not subscribed).

const notSubscribedUsers = users.filter((user) => !user.isSubscribed);
console.table(notSubscribedUsers);

// Вивести список повних імен користувачів.

users.forEach((user) => {
  console.log(user.getFullName());
});

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

const schoolAgeGirlArray = users.filter(
  (user) => !user.isMale && user.age >= 6 && user.age <= 18
);
if (schoolAgeGirlArray.length === 0) {
  console.log("Відповдних данних в масиві немає");
} else {
  schoolAgeGirlArray.forEach((u) => {
    console.log("Шкільного віку дівчата:", u.getFullName());
  });
}

// Видалити з масиву користувача з email  useremail5@gmail.com.

const deleteUserWhithEmail5 = users.filter(
  (user) => user.email !== "useremail5@gmail.com"
);
console.table(deleteUserWhithEmail5);

// Змінити email користувачу з id 2 (можна спробувати використати find).

const changeEmail = users.find((user) => user.id === 2);
if (changeEmail) {
  changeEmail.email = "changed@mail.com";
}

console.log(changeEmail);

// *Визначити, який відсоток користувачів підписані (subscribed).

const subscribedUsers = users.filter((user) => user.isSubscribed);

const percentageSigned = (subscribedUsers.length / users.length) * 100;
console.log("Відсоток підписаних користувачів складає:", percentageSigned, "%");

// АБО
const percentageSigned1 =
  ((users.length - notSubscribedUsers.length) / users.length) * 100;
console.log(
  "Відсоток підписаних користувачів складає:",
  percentageSigned1,
  "%"
);

// *Знайти середній вік користувачів (спробувати використати reduce).
const totalAge = users.reduce((accum, user) => accum + user.age, 0);
const middleAge = totalAge / users.length;
console.log("Середній вік користувачів:", middleAge, "років");

// *Впорядкувати користувачів за віком (sort).
const sortAge = users.sort((a, b) => a.age - b.age);

console.table(sortAge);

// *Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.

const isEmailExist = users.some(
  (user) => user.email === "useremail7@gmail.com"
);
console.log("Є користувач з мейлом ...?:", isEmailExist);

// *Перевірити, чи всі користувачі підписані (subscribed).

const isAllSubscribed = users.every((user) => user.isSubscribed);

console.log("Чи всі користувачі підписані", isAllSubscribed);
