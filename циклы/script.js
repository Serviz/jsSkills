//Вывести от 4 до 400

let out = document.getElementById('out');
let tmp ='';


for(let i=4; i<=400; i++){
  tmp = tmp + i + ' '
}
out.innerHTML =tmp;

//Вывести числа в последовательности : 2,4,6,8,10

for (let i = 4; i <= 10; i=i+2) {
  tmp = tmp + i + ' ';
}
out.innerHTML = tmp;

//Вывести числа 654 653 652 до нуля

for(let i=654; i>=0;i=i-1){
  tmp = tmp + i + ' ';
}
out.innerHTML = tmp;
//Вывеси годы с 1983 до 2019

for(let i=1983;i<=2019;i=i+1){
  tmp = tmp + i +' ';
}
out.innerHTML = tmp;


// Умножить от 1 до 9 на 7

for(let i=1;i<9;i=i+1){
  tmp = tmp + ' * '+i+'='+7*i + '<br>';
}

out.innerHTML =tmp;