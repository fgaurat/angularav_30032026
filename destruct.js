const a = [10, 20, 30, 40];

const [b, ...c] = a;

console.log(a);
console.log(b);
console.log(c);

const d = [...a, 50];

const o = { theName: "GAURAT", firstName: "fred", age: "22", job: "Dev" };

const { theName, age, ...leReste } = o;
const { theName} = o;
console.log(theName);
console.log(age);
console.log(leReste);

const o2 = { ...o, age: 49 };

const theNumber = 12;

const o3 = { theNumber };

function f({firstName}) {
  console.log(firstName);
}

const o4 = { firstName: "fred" };
f(o4);
