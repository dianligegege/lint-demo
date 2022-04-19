const fun1 = () => {
    console.log(23232);
};
fun1();

const str1 = "name";
const fun2 = () => {
    if (str1 === "name") {
        console.log("name");
        return str1;
    }
};

fun2();

const obj1 = {
    a: 1,
    b: 2,
};

console.log(obj1);
