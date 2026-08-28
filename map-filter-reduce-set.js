// const arr = [20, 30, 10, 50];

// let sum = 0;

// arr.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

//filter

// const filteredArray = arr.filter(num=>num>20);
// console.log(filteredArray)

// const arr = [20, 30, 10, 50];

// Array.prototype.filtering = function (compare) {
//   const ans = [];
//   for (let num of this) {
//     if (compare(num)) {
//       ans.push(num);
//     }
//   }
//   return ans;
// };

// const newArray = arr.filtering((num) => num > 20);
// console.log(newArray);

//map

const data = [
  {
    id: "prod_01",
    title: "Wireless Headphones",
    price: 500,
    category: "Electronics",
    inStock: true,
    tags: ["audio", "gadgets", "wireless"],
  },
  {
    id: "prod_02",
    title: "Leather Journal Notebook",
    price: 700,
    category: "Stationery",
    inStock: true,
    tags: ["office", "paper"],
  },
  {
    id: "prod_03",
    title: "Stainless Steel Water Bottle",
    price: 1000,
    category: "Fitness",
    inStock: false,
    tags: ["eco", "outdoor", "water"],
  },
];

// const filteredItem = data.filter((prod)=>prod.price>20.0).sort((a,b)=>a.price-b.price)
// console.log(filteredItem)

// const filteredItem = data.map(prod=>({title:prod.title,price:prod.price}));
// console.log(filteredItem);

// const totalSum = data.reduce((acc, curr) => {
//   if (curr.inStock) return acc + curr.price;
//   else return acc;
// }, 0);

// console.log(totalSum);

const arr = [10,20,30,10,25,15,10,20];

const set1 = new Set(arr);
console.log(set1)
