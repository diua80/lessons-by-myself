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
// const refs = {
//     overlay: document.getElementById("overlay"),
//     modalWindow: document.getElementById("modalWindow"),
//     modalCloseBtn: document.getElementById("modalCloseBtn"),
//     modalOpenBtn: document.getElementById("openModalBtn"),
// }


// const openClass = "open";

// refs.modalOpenBtn.addEventListener("click", modalOpen);
// refs.modalCloseBtn.addEventListener("click", modalClose);
// window.addEventListener("keydown", closeModalOnEsc);

// // зараз на body нема класу "open", а ми його задамо
// function modalOpen() {
//     document.body.classList.add(openClass); //додає клас "open"
// }
// function modalClose() {
//     document.body.classList.remove(openClass); //додає клас "open"
// }

// function closeModalOnEsc(ev) {
//     if (ev.code === "Escape") {
//         modalClose();
//     }
// }

// Калькулятор - задача

const refs = {
    form: document.getElementById("form"),
    price: document.getElementById("price"),
    amount: document.getElementById("amount"),
    quantity: document.getElementById("quantity"),
    total: document.getElementById("total"),
}

// цей об'єкт буде керувати рахунком totalPrice, не обов'язково створювати багато функцій, можна обійтись таким от об'єктом.
// тепер коли він є його треба наповнити правильними значеннями дійсними, як це зробити..
// якщо виникає якась подія! треба викликати метод calcTotalPrice, а щоб у поля price та quantity записались актуальні значення
// створимо відповідну функцію, що буде оновляти поля цього об'єкту, беручи їх з атрибутів input-ов.

const data = {
    price: 0,
    quantity: 0,
    calcTotalPrice() {
        return Number((this.price * this.quantity).toFixed(2));
    },
}
fillData();//тут ми не з атрибутів беремо значення а з звичайного value.. і це буде тип даних "string", тому треба обернути у Number..
console.log(data);
displayTotal();
refs.amount.textContent = data.quantity;

refs.form.addEventListener("input", handleFormInput); // відслідковуємо будь які зміни на формі, які можуть відбутись у всіх input-ах;

function handleFormInput({ target }) {
    const { value } = target;
    // console.log(target, value);
    if (target === refs.quantity) {
        refs.amount.textContent = value;
    }
    target.setAttribute("value", value); // Змінюємо значення атрибуту "value", на значення value з об'єкту, що є target-ом.
    fillData();
    displayTotal();
}

// у цієї функції не буде на вході event-у бо він є у колбек функціях
function fillData() {
    data.price = Number(refs.price.value);
    data.quantity = Number(refs.quantity.value);
}

// створимо функцію, що буде оновлювати значення <p> з цифрою загальною вартості, вже підрахованої. І не забуваємо викликати
// цю функцію у потрібному місці.. де воно?
function displayTotal() {    
    refs.total.textContent=data.calcTotalPrice() + "грн";
};