// const userAnswer = prompt("Введіть офіційну назву JS");
// if (userAnswer === " ") {
//     alert("Правильно!");
// } else {
//     alert("Не знаєте! ECMAScript!");
// }

// const hours = 14;
// const minutes = 26;
// let time = "";
// if (minutes === 0) time = `${hours} г`;
// else time = `${hours} г. ${minutes} хв.`
// console.log(time);
// const user = {
//     name: "Mango",
//     age: 25,
//     hobby: "html",
//     premium: true,
// }

// user.mood="happy";
// user["mood"] = "happy";
// console.log("🚀 ~ file: index.js:22 ~ user:", user)
// for (const key in user) {
//    console.log(`${key}: ${user[key]}`)
// }
// console.log(Object.keys(user));
// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

// const salaries = {
//     Piter: 5500,
//     Victory: 6600,
//     Iryna: 77700,
// }
// console.log(Object.values(salaries));
// let sum = 0;
// for (const salarie of Object.values(salaries)) {
//     sum += salarie;
// }
// console.log(sum);

// const stones = [
//     { name: "ametist", price: 800, quantity: 4 },
//     { name: "perl", price: 1800, quantity: 3 },
//     { name: "rubin", price: 2300, quantity: 1 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//     }
//     return alert("Такого не існує");
// };
// const total = calcTotalPrice(stones, "щебень");
// console.log(total);

// const TRANSACTIONS = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
// }

// const account = {
//     balance: 0,

    //!===Історія транзакцій
    // transactions: [],

    //!===Метод створює та повертає об'єкт транзакції.
    //!===Приймає суму та тип транзакції.
    //!===Кожна транзакція - це об'єкт з властивостями: id, type, amount


    //!===додає суму до балансу
    //!===приймає суму транзакції
    //!===викликає метод CreateTransaction, для створення об'єкту транзакції
    //!===після чого додає його до історії транзакцій
    // deposit(amount) {
    //     this.balance += amount;
    //     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
    //     this.transactions.push(transaction);
    // },
    // withdraw(amount) {
    //     if (amount > this.balance) {
    //         console.error("Недостатньо коштів!");
    //         return;
    //     }
    //     this.balance -= amount;
    //     const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
    //     this.transactions.push(transaction); 
    // },

    //!===Функція повертає поточний баланс
//     getBalance() {
//         return this.balance;
//     },

//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (id === transaction.id) {
//                 return transaction;
//             }
//         }
//         return [];
//     },

//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (type === transaction.type) {
//                 sum += transaction.amount;
//             }
//         }
//         return sum;
//     },
// }

// console.log(account.createTransaction(100, TRANSACTIONS.DEPOSIT));
// account.deposit(500);
// account.deposit(400);
// account.withdraw(1000);

// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));

// const user = {
//     email: "mango@mail.com",
//     age: 20,
// };
// const { userName = "User" } = user;
// console.log(userName);
// console.log(user);

// class User{
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return "ха-ха приватне поле";
//     }
// }

// const mango = new User({
//     login: "Mango",
//     email: "mango@dog.woof",
// });

// console.log(mango);
// console.log(mango.login);
// mango.login = "MAngodog";
// console.log(mango.login);


// 
// Модальне вікно
