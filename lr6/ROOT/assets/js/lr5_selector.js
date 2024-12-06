// // Получаем все элементы с нужными ID
// const buttons = document.querySelectorAll('#selection_button1, #selection_button2, #selection_button3');

// buttons.forEach(function(button) {
//   // Сохраняем исходный текст для каждого элемента
//   const originalText = button.textContent;

//   // При наведении меняем первый символ
//   button.addEventListener('mouseenter', function() {
//     button.textContent = '☑' + originalText.slice(1); // Меняем первый символ
//   });

//   // При убирании курсора восстанавливаем исходный текст
//   button.addEventListener('mouseleave', function() {
//     button.textContent = originalText; // Восстанавливаем исходный текст
//   });
// });
