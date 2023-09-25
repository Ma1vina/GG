// //Задача 1
// //Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for (let elem of arr) {
// 	if (elem == 'c') {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag === true) {
// 	console.log('есть');
// } else {
// 	console.log('нет');
// }

//Простое или составное число
// В num хранится простое число, задача выявить действительно ли оно просто
let num = 100;
let flag = true; // да, простое (изначально)
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false; //если условие выполняется хотя бы раз, то нет -это составное и обратим flag в false
		break; // закроем на этом цикл
	}
}
console.log(flag);

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат
// умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.
// let num = 50;
// while (num < 1000) {// число БОЛЬШЕ должно быть,но указ МЕНЬШЕ .т.к. цикл прератится когда уловие перестанет быть верным
// 	num = num * 3;
// }
// console.log(num);

//чтобы подсчитать кол-во итераций необх. решить по-другому:
// let num;
// let i;
//  for(num =50, i =0; num <1000; num = num *3, i++){
//  } console.log(num,i);

 // ИЛИ без скобок + var num,чтобы переменная была доступна вне цикла
//  for(var num =50, i =0; num <1000; num = num *3, i++);
//  console.log(num,i);
