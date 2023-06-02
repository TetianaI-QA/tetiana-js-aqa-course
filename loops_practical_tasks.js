//Виведіть в консоль числа від 1 до n використовуючи цикл for. (Дано: n = 10)
for (let i = 1; i < 11; i++) {
    console.log (i)
}
console.log(` `)

//Напишіть цикл, який обчислює суму чисел від 1 до n. (Дано: n = 100)
let counter = 0;
for (let a = 1; a < 101; a++) {
    counter = counter+a;
}
console.log(`Сума чисел від 1 до 100 дорівнює ${counter}`)
console.log(` `)

//Використовуючи цикл while, виведіть в консоль числа від n до 1. (Дано: n = 10)
let n = 10;
while (n > 0){
    console.log (n)
    n = n - 1;
}
console.log(` `)

//Напишіть цикл, який виводить всі парні числа від 1 до n. (Дано: n = 50)
let b = 1; 
while (b < 51){
    if(b%2===0){
        console.log(b)
    }
    b++;
}
console.log(` `)

//Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли. (Дано: n = 10)
const m = 10;
console.log(`Таблиця множення від 1 до ${m}`)
for (let c = 1; c <= m; c++) {
  for (let d = 1; d <= m; d++) {
    const result = c * d;
    console.log(`${c} * ${d} = ${result},`)
  }
}
console.log(` `)

//Обчисліть факторіал числа n, використовуючи цикл. (Дано: n = 7)
const o = 7;
let f = 1;
for(let e = 1; e <= o; e++){
    f = e * f;
}
console.log(`Факторіал числа ${o} рівняється ${f}`)
console.log(` `)

//Виведіть перші n чисел послідовності Фібоначчі. (Дано: n = 10)
const p = 10;
let first = 0;
let next = 1;
console.log(first); 
for (let g = 2; g <= p; g++) {
  console.log(next); 
  let summ = first + next;
  first = next;
  next = summ;
}
console.log(` `)


//Виведіть всі прості числа від 1 до n. (Дано: n = 100)
console.log(`прості числа:`)
for(let a = 2; a <= 100; a++){
    let view = true;
    for(let b = 2; b < a; b++){
        if(a%b === 0){
            view = false;
            break;
        }
    }
    if(view){
        console.log(a)
    }
}
console.log(` `)

//Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)
let a = 100;
let arr = [];
for(let b = 1; b <= a; b++){
    arr.push(b)
    if(b%5 === 0){
        console.log(b);
    }
}

console.log(` `)

//Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let a = 0; a < arr1.length; a++){
    sum += arr1[a]
}
console.log(`Сума чисел в заданому масиві: `, sum)