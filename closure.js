// function createCounter(){

//     function increment(){
//         console.log("Increment")
//     }

//     return increment;
// }

// const res = createCounter();
// res();

// let user = {
//   balance: 500,
//   deposit: function (amount) {
//     if (typeof amount === "number" && amount > 0) {
//       this.balance += amount;
//       return this.balance;
//     }
//   },
//   withdraw: function (amount) {
//     if (typeof amount === "number" && amount > 0 && this.balance >= amount) {
//       this.balance -= amount;
//       return this.balance;
//     }
//   },
//   getBalance: function () {
//     return this.balance;
//   },
// };

function createBankAccount() {
  let balance = 500;
  const user = {
    deposit: function (amount) {
      if (typeof amount === "number" && amount > 0) {
        balance += amount;
        return balance;
      }
    },
    withdraw: function (amount) {
      if (typeof amount === "number" && amount > 0 && this.balance >= amount) {
        balance -= amount;
        return balance;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
  return user;
}

const customer = createBankAccount();

console.log(customer.deposit(400));
