const a = 4;
const b = 10;
const c = 2;
const d = 12;

// console.log(a + b);
// console.log(c + d);
// console.log(a + d);
// console.log(a + c);
// console.log(a + a);

function Addition(num1, num2) {
  console.log("Addition");
  console.log(num1 + num2);
}

// Addition(a, b);
// Addition(a, a);
// Addition(a, c);
// Addition(a, d);

const sub = function (num1, num2) {
  console.log(num1 * num2);
};

// sub(1234, 1);

const Drive = (age) => {
  if (age >= 18) {
    console.log("ALLOWED TO DRIVE");
  } else {
    console.log("NOT ALLOWED TO DRIVE");
  }
};

// Drive(18);
// Drive(1);

const Add = function (...num) {
  //   console.log(...num);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  console.log(sum);
};

// Add(12, 3, 123, 45234, 566356, 4567, 5678, 223456, 43456, 44);

// ********************************************************** //

//ARRAY CONCEPT
// const Friends = ["Raju", "Ramu", "Harsh", "Mohon"];
// console.log(Friends[0]);
// console.log(Friends[2]);

// for (let i = 0; i < Friends.length; i++) {
//   console.log(Friends[i]);
// }

// console.log("___________________________________");

// let i = 0;
// while (i < Friends.length) {
//   console.log(Friends[i]);
//   i++;
// }

// console.log("___________________________________");

// i = 0;
// do {
//   console.log(Friends[i]);
//   i++;
// } while (i < Friends.length);

// ********************************************************** //

// let My_Drawer_books = ["A", "B", "C"];
// console.log(My_Drawer_books);

// My_Drawer_books.push("D");
// console.log(My_Drawer_books);

// My_Drawer_books.unshift("AA");
// console.log(My_Drawer_books);

// My_Drawer_books.pop();
// console.log(My_Drawer_books);

// My_Drawer_books.shift();
// console.log(My_Drawer_books);

// ********************************************************** //

// let arr = ["a", "b", "c", "d"];
// console.log(arr.slice(1));
// console.log(arr.slice(3));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(1, 2));
// console.log(arr.slice(2, 3));

// ********************************************************** //

// const Marks = [78, 60, 80, 12, 24, 56, 67, 23, 29];
// console.log(Marks.length);

// Marks.map((student_mark, index) => {
//   console.log(`Student ${index + 1} -->  ${student_mark}`);
// });

// const Good_student = Marks.filter((student_mark) => student_mark >= 60);
// const Bad_student = Marks.filter((student_mark) => student_mark < 60);
// console.log(Good_student);
// console.log(Bad_student);

// Good_student.map((studentMark, index) => {
//   console.log(`Student ${index + 1} --> ${studentMark}`);
// });

// Marks.filter((student_mark) => student_mark >= 60).map(
//   (student_mark, index) => {
//     console.log(`Student ${index + 1} -->  ${student_mark}`);
//   }
// );

// const Price = [90, 234, 234, 5, 53, 456, 45, 2];
// const Value = Price.reduce((sum, individual_price) => {
//   return sum + individual_price;
// });
// console.log(Value);

// ********************************************************** //
