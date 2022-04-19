const a = function () { return 1 };

const obj1 = {
    name: lintName,
    age: 1,
};

console.log(a, obj1);

const str1 = "13131";

console.log("str1", str1);

const fun1 = (name) => `我的名字是${name}`;

console.log(fun1());

// const str2 = str3;

const num1 = 1;

const fun2 = () => {
    if (1 + 1 < num1) {
        return 1;
    }
    if (num1 > 1) {
        return 2;
    }

    if (num1 === 3) {
        return 3;
    }
    return 3;
};

fun2();

// 写点es6预发
const obj2 = { name: "12" };
const obj3 = { ...obj2, age: 1213 };
console.log(obj3);
