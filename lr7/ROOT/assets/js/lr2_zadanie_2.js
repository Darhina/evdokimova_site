function zadanie2() {
    // Запрашиваем у пользователя длины A и B
    let A = prompt("Введите длину отрезка A (A > B):");
    let B = prompt("Введите длину отрезка B (B < A):");
    
    // Проверка на корректность введенных значений
    if (isNaN(parseInt(A)) || isNaN(parseInt(B))) {
        alert("Пожалуйста, введите корректные числовые значения для A и B.");
    }
    else{
        // Преобразуем A и B в целые числа
        A = parseInt(A);
        B = parseInt(B);

        // Проверяем, что A и B являются положительными числами и A > B
        if (A > 0 && B > 0 && A > B) {
            // Используем целочисленное деление для нахождения количества отрезков
            // Math.floor округляет результат в меньшую сторону до целого числа, чтобы учесть только целые отрезки
            let count = Math.floor(A / B);

            // Выводим результат
            alert(`Количество отрезков длины B на отрезке длины A: ${count}`);
        } else {
            alert("Пожалуйста, введите корректные значения, где A > B и оба числа положительные.");
        }
    }
}
