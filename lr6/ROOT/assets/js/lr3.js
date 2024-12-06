function lr3_1_sravnenie(){
    // получаем значения A и B из полей ввода и преобразуем их в целые числа
    let A = document.getElementById('inputA');
    A = parseInt(A.value);
    let B = document.getElementById('inputB');
    B = parseInt(B.value);
    
    let text1 = document.getElementById('result_lr3_1');
    // проверяем, введены ли числа и выполняем условие для A и B
    if (isNaN(A) || isNaN(B) ){
        // если хотя бы одно значение не число, выводим сообщение
        text1.innerHTML = "Введите все числа!";
    }
    else if (A > 2 && B <= 3) {
        // если A > 2 и B <= 3, выводим TRUE
        text1.innerHTML = "Результат: TRUE";
    } else {
        // иначе выводим FALSE
        text1.innerHTML = "Результат: FALSE";
    }
}


function lr3_2_count_numbers() {
    // получаем значения трёх чисел и преобразуем их в целые числа
    let num1 = document.getElementById('num1');
    num1 = parseInt(num1.value);
    let num2 = document.getElementById('num2');
    num2 = parseInt(num2.value);
    let num3 = document.getElementById('num3');
    num3 = parseInt(num3.value);

    // переменные для подсчёта отрицательных и чётных чисел
    let otricateln_count = 0;
    let chetn_count = 0;

    // проверяем каждое число, увеличивая счётчики при отрицательном или чётном числе
    if (num1 < 0) {
        otricateln_count++;
    }
    if (num2 < 0) {
        otricateln_count++;
    }
    if (num3 < 0) {
        otricateln_count++;
    }

    if (num1 % 2 === 0) {
        chetn_count++;
    }
    if (num2 % 2 === 0) {
        chetn_count++;
    }
    if (num3 % 2 === 0) {
        chetn_count++;
    }

    // получаем элементы с соответств идентификаторами
    let text1 = document.getElementById('otricateln');
    let text2 = document.getElementById('chetn');

    // выводим результаты: проверяем, введены ли все числа
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        // если одно из чисел не введено, выводим сообщение
        text1.innerHTML = "Введите все числа!";
        text2.innerHTML = " ";
    } else{
        // иначе выводим количество отрицательных и чётных чисел
        text1.innerHTML = "Количество отрицательных чисел: " + otricateln_count;
        text2.innerHTML = "Количество чётных чисел: " + chetn_count;
    }
}


function lr3_3_function() {
    // получаем значение x из поля ввода и преобразуем его в число с плавающей точкой
    let x = document.getElementById('input_x_lr3_3');
    x = parseFloat(x.value);
    let a = 3.9;
    let b = 4.6;
    let y;

    // вычисляем значение функции y в зависимости от значения x
    if (x >= 3 && x <= 5) {
        // если x в диапазоне от 3 до 5, используем первую формулу
        y = x + Math.cos(a * x) / (x * x + 1);
    } else if (x > 5) {
        // если x больше 5, используем вторую формулу
        y = b * Math.sin(a / x);
    } else if (x < 3) {
        // если x меньше 3, используем третью формулу
        y = Math.exp(x) + Math.log(Math.abs(x));
    }
    else {
        // если x не введен, выводим сообщение
        y = "Вы не ввели число!";
    }

    let text1 = document.getElementById('result_lr3_3');
    // выводим результат y
    text1.innerHTML = "Значение y: " + y;
}


function lr3_4_function() {
    // получаем значение x из поля ввода и преобразуем его в число с плавающей точкой
    let x = document.getElementById('input_x_lr3_4');
    x = parseFloat(x.value);
    let a = 3.9;
    let b = 4.6;
    let y;

    // используем switch для вычисления значения y в зависимости от конкретных значений x
    switch (x) {
        case 5:
            // если x равно 5, применяем первую формулу
            y = x + Math.cos(a * x) / (x * x + 1);
            break;
        case 8:
            // если x равно 8, применяем вторую формулу
            y = b * Math.sin(a / x);
            break;
        case 2:
            // если x равно 2, применяем третью формулу
            y = Math.exp(x) + Math.log(Math.abs(x));
            break;
        default:
            // если x не равно 5, 8 или 2, выводим сообщение
            y = "Значение x должно быть равно 5, 8 или 2!";
    }
    text1 = document.getElementById('result_lr3_4');
    // выводим результат y
    text1.innerHTML = "Значение y: " + y;
}

