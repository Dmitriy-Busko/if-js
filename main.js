let user = 'John Doe';
console.log(user);

const student = 'Dimitriy';
console.log(student);

user = student;
// сейчас переменной user присвоено значение student
console.log(user);

let test = 1;
test += 1;
test += '1';
// в переменной test значение 21
console.log(test);
test -= 1;
// в переменной test значение 20
console.log(test);

// bool
if (test >= 1) {
  test = 'true';
} else {
  test = 'false';
}
// в переменной test значение не изменится
console.log(test);

const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i += 1) {
  result *= arr[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] > 5 && arr2[i] < 10);
  console.log(arr2[i]);
}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i += 1) {
  if (i % 2 === 0) {
    console.log(arr3[i]);
  }
}
