'use strict'
// 1
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

// let str = 'ahb acb aeb aeeb adcb axeb';

// let x = str.replace(/a/g, "!");
// console.log(x);

// let x ='ahb acb aeb aeeb adcb axeb'.replace(/a.b/g, '!');
// console.log(x)

// 2
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.
// let str = 'aba aca aea abba adca abea';
// let x = str.replace(/a..a/g, "!",);
// console.log(x);

// 3
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.
// let str = 'aba aca aea abba adca abea';

// let x = str.replace(/ab.a/g, "!");
// console.log(x);

// 4
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного,
// буква 'a'.
// let x = str.replace(/ab?a/g, "!");
// console.log(x);

// 5
// let str = 'aa aba abba abbba abca abea';
//Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое
// количество раз (в том числе ниодного раза), буква 'a'.
// let x = str.replace(/ab*a/g, "!");
// console.log(x);

// 6
// let str = 'ab abab abab abababab abea';
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

// let x = str.replace(/(ab)+/g, "!");
// console.log(x);

// 7
// let str = '23 2+3 2++3 2+++3 345 567';
// //Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
// let x= str.replace(/2\++3/g, "!");
// console.log(x);

// 8
// let str = '23 2+3 2++3 2+++3 445 677';
// // Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.
// let x = str.replace(/2\+*3/g, "!");
// console.log(x);

// 9
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
// let x = str.replace(/\*q+\+/g, "!");
// console.log(x);

// 10
// let str = 'aa aba abba abbba abbbba abbbbba';
// // Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
// let x = str.replace(/ab{4,}a/g, "!");
// console.log(x);

// 11
// let str = 'aba accca azzza wwwwa';
// // // Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. 
// // // Между буквами a может быть любой символ (кроме 'a').

// let x = str.replace(/a[^a]+?a/g,'!')
// console.log(x);

// 12
// let str = 'a1a a2a a3a a4a a5a aba aca';
// // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
// let x = str.replace(/a\d{1}a/g, "!");
// console.log(x);


// 13
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские
// //  буквы, не затронув остальных.
// let x = str.replace(/a[a-z]+a/g,"!");
// console.log(x);

// 14
// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква и не
//  цифра от 1 до 5 от 1 и более раз, буква 'z'.
// let str = "xerez x888tz x;;c vEERfc"
// let x = str.replace(/x[^A-Z1-5]+?z/g, "!");
// console.log(x);

// 15
// let str = 'wйw wяw wёw wqw';
// // Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.
// let x = str.replace(/w[а-яё]+?w/g, "!");
// console.log(x);

// 16
// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ 111';
// // Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.
// let x = str.replace(/[а-яёА-ЯЁ]+/g, "!");
// console.log(x);

// 17
// let str = 'aba aea aca aza axa a.a a+a a*a';
// // Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
// let x = str.replace(/a[.+*]+?a/g, "!");
// console.log(x);

// 18
// буква 'x', затем не цифра, не точка, и не маленькая латинская буква, затем буква 'z':
// let str = 'xaz x1z xAz x.z x@z';
// let res = str.replace(/x[^\d.a-z]z/g, '!');

// 19
// let str = 'x[]z x{}z x.z x()z';
// // Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, 
// // затем буква 'z'.
// let x = str.replace(/x[\[\](){}]+?z/g, "!");
// console.log(x);

// 20
// let str = '[abc] {abc} abc (abc) [abc]';
// // Напишите регулярку, которая найдет строки в любых скобках и заменит скобки на '!'.
// let x= str.replace(/[\[\]{}()]/g, "!");
// console.log(x);

// 21
// let str = '^xx axx ^zz bkk @ss';
// // Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.
// let x = str.replace(/[\^@]+?[a-z]{2}/g, "!");
// console.log(x);

// 22
// let str = '^xx axx ^zz @xx bkk';
// // Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.
// let x = str.replace(/[^@]+[a-z]{2}/g, "!");
// console.log(x); ?

// // 23
// let str = '^xx axx ^zz @xx bkk';
// // // Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.
// let x = str.replace(/^\^+[a-z]{2}/g, "!");
// console.log(x); ?


// 14
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// // Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.
// let x = str.replace(/x[$+-]z/g,"!");
// console.log(x);

// 15
// С помощью метода test определите, что переданная строка является емэйлом.
// let str = "my_mail@mail.ru"
// let x = /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test('my_mail@mail.ru');
// console.log(x);

// 16
// let str = 'site.ru sss site.com zzz site.net'
// // Получите массив доменных имен из этой строки.
// let x = str.match(/[a-z]+\.[a-z]{2,3}/g);
// console.log(x);

// let str = '1 23 456 789';
// let res = str.match(/\d+/g);
// console.log(res);

// 17
// let str = 'a1b c34d x567z';
// // Найдите сумму всех чисел этой строки.
// let x = str.match(/\d/g);

// let sum = 0;
// for( let i =0; i<x.length;i++){
//     sum = sum + +x[i];
// }
// console.log(sum);


// 18
// Найдите этот домен и положите его имя в первый карман, а зону - во второй.
// let str = 'sss domain.ru zzz';
// let x = str.match(/[a-z]+(\.[a-z]{2,3})/);
// console.log(x[0], x[1]);

// 19
// Поменяйте местами цифры во всех двухзначных числах.
// let str = '12 34 56 78';
// let x = str.replace(/(\d?)(\d?)/g, "$2$1");
// console.log(x);

// 20
// let str = '31.12.2025';
// // Преобразуйте эту дату в '2025.12.31'.
// let x = str.replace(/(\d{2})(\.\d{2}\.)(\d+)/g, "$3$2$1");
// console.log(x);

// 21
// let str = 'a1b2c3';
// // Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
// let x = str.replace(/\d+/g, "$&$&");
// console.log(x);


// 22
// let str = 'sss site.ru zzz site.com kkk';
// // Замените домены на ссылки вида:

// {/* <a href="http://site.ru">site.ru</a> */}

// let x= str.replace(/([a-z]+\.[a-z]{2,3})/g, "<a href=\"http:\/\/$1\"><\/a>");
// console.log(x);

// 23
// let str = 'aaa bbb ccc xyz';
// // Найдите все подстроки, в которых есть три одинаковые буквы подряд.
// let x = str.replace(/([a-z]{1})\1\1/g, "!");
// console.log(x);

// 24
// let str = 'a aa aaa aaaa';
// // // Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.
// let x = str.replace(/([a-z]{2,})\1/g, '!');
// console.log(x);
// ?


// 25
// let str = 'aaa aaa bbb bbb ccc ddd';
// // Найдите все подстроки, в которых есть два одинаковых слова подряд.

// let res = str.replace(/([a-z]+\s)\1/g, "!")
// console.log(res);


//Негативный и позитивный просмотр

//1
// Дана строка, содержащая имена функций:
// let str = 'func1() func2() func3()';
// // Получите массив имен функций из строки.
// // //
// let x= str.match(/[a-z]+\d+\(\)/g);
// console.log(x[0],x[1],x[2]);

// 2
// // Дана строка с тегом:
// let str = '<a href="" class="eee" id="zzz">';
// // Получите массив имен атрибутов этого тега.
// let x = str.match(/\"([a-z]+)\"/g);
// console.log(x[0],x[1]);

// 3
// let str = 'aaa [2] bbb [3] ccc [12] ddd';
// // Найдите числа, стоящие в скобках и увеличьте их в два раза. 
// let x= str.replace(/\d+/g, function(match){
//     return Number(match**2);
// });
// console.log(x);

// 4
// let str = '123 456 789';
// // // Найдите все числа и переверните их цифры в обратном порядке

// let x = str.replace(/\d+/g, function(matchAll){
//     return matchAll.split("").reverse().join("");
//  })
//  console.log(x);

// 5
// let str = '31.12.2025 30.11.2024 29.10.2023';
// // // Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:
// '2025-12-31 2024-11-30 2023-10-29'
// let x = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g,'$3-$2-$1');
// console.log(x);


let str = '31.12.2025 30.11.2024 29.10.2023';
// // Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:
'2025-12-31 2024-11-30 2023-10-29'
let x = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g,function (match0, match1,match2, match3){
    return match3 + "-" + match2 + "-" + match1;
});
console.log(x);





// let date = new Date();
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);







