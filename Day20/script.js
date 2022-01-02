let arr = ["Abhishek", "Bharat", "Pankaj"];
//// REVERSE
// console.log(arr.reverse());

//// SPLICE
// arr.splice(-2);
// console.log(arr);

//// CONCAT
let arr2 = ["Rabi Teja", "Allu Arjun", "Akhil Akinnei"];
let MainArr = arr.concat(arr2);
// console.log(MainArr);

////JOIN
// console.log(MainArr.join("___"));

//// LOOPING
//// FOR LOOPS ARE UP OF 3 Types
//// => Simple for loop
//// => for of loop
//// => forEach

//// FOR OF LOOP
// let Cars = ["ferrari", "Swift", "Rolls Royace", "Lamborgini"];
// for (const i of Cars) {
//   console.log(i);
// }

//// FOR EACH
// let UniqueCars = ["ferrari", "Swift", "Rolls Royace", "Lamborgini"];
// UniqueCars.forEach(function (ele) {
//   console.log(`MY CAR COLLECTION HAVE ${ele.toUpperCase()}`);
// });

// console.log("VISNU".toLowerCase());
// console.log("VISNU".lastIndexOf("N"));

// console.log(
//   "ABHISHEK IS A SENIOR WEB DEVELOPER ROLE SDE #3"
//     .toLowerCase()
//     .lastIndexOf("dev")
// );

//// ARRAY OF OBJECT ASSESING
// let names = ["Abhishek", "Rabi", "Ranjan", "Sumit"];

// let Animal = [
//   { owner: "Jessica", pet: "kutta" },
//   { owner: "Rehaman", pet: "Bili" },
// ];

// console.log(Animal[1].owner);

//// FLAT
// let KuchBhi = [123, 34, 234, [923, 23, 4166, 25], ["Abhishek", "Nayak"]];
// console.log(KuchBhi.flat());

// let PlotNumber = [12, [1, 4, 4, ["Ramesh", "Dinesh", ["Pankaj"]]]];
// console.log(PlotNumber.flat(3));

//// SORT
// let ShopOwners = ["Xylo", "Jonas", "Jessica", "Adam", "Scott", "Pankaj"];
// console.log(ShopOwners.sort());

//// SET TIME OUT
// setTimeout(() => console.log("10 Seconds Ho Gaye"), 60 * 1000);

//// SET INTERVAL
// setInterval(() => {
//   const time = Date.now();
//   console.log(time);
// }, 3000);

//// DATE
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getDay());
console.log(now.getMinutes());
console.log(now.getHours());
