function lr4_1_output_integer_parts_of_numbers_and_sums() {
    // получаем значение N из поля ввода и преобразуем в целое число
    let N = document.getElementById('input_N');
    N = parseInt(N.value);

    // находим элемент по id для отображения результата
    let text_result = document.getElementById('result_lr4_1');

    // проверяем, является ли N числом и больше ли оно нуля
    if (isNaN(N) || N <= 0) {
        text_result.innerHTML = "Некорректное значение N. Оно должно быть целым и больше нуля.";
    }
    else{
        // инициализируем переменные для суммы целых частей и результата
        let sum = 0;
        let result = "";

        // начинаем цикл от 0 до N-1
        for (let i = 0; i < N; i++) {
            // находим целую часть текущего значения i (округляем вниз)
            let integer_part = Math.floor(i);

            // добавляем целую часть к сумме
            sum += integer_part;

            // добавляем целую часть к строке результата, ставим запятую, если это не последнее значение
            result += integer_part + (i < N - 1 ? ", " : ".");
        }

        // выводим итоговый результат в элемент text_result
        text_result.innerHTML = `Целые части чисел: ${result} Сумма целых частей: ${sum}`;
    }
}

function lr4_2_calculate_candy_price() {
    // получаем значение цены за килограмм из поля ввода и преобразуем в вещественное число
    let price_per_kg = document.getElementById('price_per_kg');
    price_per_kg = parseFloat(price_per_kg.value);

    // находим элемент для отображения результата
    let text_result = document.getElementById('result_lr4_2');

    // проверяем, является ли цена числом и больше ли она нуля
    if (isNaN(price_per_kg) || price_per_kg <= 0) {
        text_result.innerHTML = "Некорректная цена. Введите положительное вещественное число.";
    }
    else{
        // инициализируем строку для хранения результата
        let result = "Стоимость конфет: ";

        // начинаем цикл от 1 до 10 для расчёта стоимости за каждый килограмм
        for (let i = 1; i <= 10; i++) {
            // вычисляем общую стоимость для i килограммов
            let total_price = price_per_kg * i;

            // округляем стоимость до двух знаков после запятой
            total_price = total_price.toFixed(2);

            // добавляем стоимость в строку результата, ставим запятую, если это не последнее значение
            result += `${i} кг = ${total_price}${(i < 10 ? ", " : ".")}`;
        }

        // выводим итоговый результат в элемент text_result
        text_result.innerHTML = result;
    }
}
