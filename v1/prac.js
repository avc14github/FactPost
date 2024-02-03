const votes = 10;

if (votes <= 9) console.log("amazing");
else console.log("not amazing");

const calcFactAge = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal to ${new Date().getFullYear()}`;
console.log(calcFactAge(2040));

const arr = new Array(1, 2, 45, 61);

arr.pop(61);
arr.unshift(3);
arr.shift(3);

console.log(arr);
console.log(arr.length);
let array2 = [34, 78, 90];
console.log([...arr, ...array2]);

[2, 4, 6, 8].forEach(function (el) {
  console.log(el * 10);
});

const time = [2, 4, 6, 8].map((x) => x * 10);

console.log(time);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategory = CATEGORIES.map((el) => el.name);

console.log(allCategory);
