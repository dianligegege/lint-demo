const fun1 = (a) => a;

fun1();

const str1 = "age";
const str2 = "id";
const obj1 = { name: 1 };
const obj2 = { ...obj1, [str1]: [str1], str2 };
console.log(obj2);

const num = 0;
const num1 = num ?? 12;
console.log(num1); // 0

let num3 = 0;
num3 ??= 10;
console.log(num3); // 0

if (num3 === 1) {
    console.log("1313");
}
