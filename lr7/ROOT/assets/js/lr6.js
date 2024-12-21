/**
 * Отображает все товары на странице.
 * 
 * Эта функция очищает контейнер с товарами и создает карточки для каждого товара из переданного списка,
 * добавляя их в DOM-элемент с ID "area_product_card".
 * 
 * @param {Array} list_products_display - Массив объектов товаров, каждый из которых должен содержать:
 *   - {string} title - Название товара
 *   - {string} price - Цена товара
 *   - {string} description - Описание товара
 *   - {string} thumbnail - URL изображения товара
 * 
 * @return {void} Эта функция не возвращает значений.
 */
function display_all_products(list_products_display){
    // Очистим список на странице, если jy существует
    let area_product_card = document.getElementById('area_product_card');
    area_product_card.innerHTML = '';

    // Перебираем все товары и добавляем их на страницу
    for (let i = 0; i < list_products_display.length; i++) {
        let product = list_products_display[i];

        // Создаем карточку товара
        let product_card = document.createElement('div');
        product_card.className = 'product_card';
        product_card.id = `product_card_${i}`;

        // Создаем контейнер для изображения
        let background_img_product_card = document.createElement('div');
        background_img_product_card.className = 'background_img_product_card';
        background_img_product_card.id = `background_img_product_card${i}`;

        // Создаем элемент изображения
        let img_product_card = document.createElement('img');
        img_product_card.className = 'img_product_card';
        img_product_card.src = product.thumbnail;
        img_product_card.alt = product.title;

        // Добавляем изображение в контейнер
        background_img_product_card.appendChild(img_product_card);

        // Создаем элементы для текста (название, цена и описание)
        let title = document.createElement('p');
        title.className = 'text_product_card';
        title.textContent = product.title;

        let price = document.createElement('p');
        price.className = 'text_product_card';
        price.textContent = `$${product.price}`;

        let description = document.createElement('p');
        description.className = 'text_product_card_description';
        description.textContent = product.description;

        // Добавляем все элементы в карточку товара
        product_card.appendChild(background_img_product_card);
        product_card.appendChild(title);
        product_card.appendChild(price);
        product_card.appendChild(description);

        // Добавляем карточку товара в контейнер
        area_product_card.appendChild(product_card);
    }
}

let list_products = [];
// API
fetch('https://dummyjson.com/products?limit=30&skip=90&select=title,price,description,thumbnail')
.then(res => res.json())
.then(data => {
    // Получим продукты
    list_products = data.products;
    display_all_products(list_products);
});

// Поиск
let search_button = document.getElementById('search_button');
let div_what_found = document.getElementById('div_what_found');
let search_area, list_products_search, total;
search_button.addEventListener('click', () => {
    search_area = document.getElementById('search_area').value.toLowerCase().trim(); // Получаем введенное значение, приводим к нижнему регистру и удаляем пробелы с начала и конца
    // console.log(search_area);
    list_products_search = [];
    // fetch(`https://dummyjson.com/products/search?q=${search_area}/limit=30&skip=90&select=title,price,description,thumbnail`)
    fetch(`https://dummyjson.com/products/search?q=${search_area}&select=title,price,description,thumbnail`)
    .then(ress => ress.json())
    .then(data_search => {
        // Получим продукты
        total = data_search.total;
        list_products_search = data_search.products;
        console.log(list_products_search);
        console.log(list_products_search.length);

        let area_product_card = document.getElementById('area_product_card');
        // Подсчет сколько нашлось
        if (list_products_search.length == 0) {
            div_what_found.innerHTML = '';
            area_product_card.innerHTML = '<div class="div_nothing_found"> <div class="text_nothing_found">Упс! По вашему запросу ничего не нашлось (◡_◡)</div></div>';
            console.log(area_product_card);
        } else if (search_area == "") {
            div_what_found.innerHTML = "";
            display_all_products(list_products);
        } else {
            div_what_found.innerHTML = `<div class="text_what_found">По вашему запросу найдено товаров : ${total} | Отображено на странице: ${list_products_search.length}</div>`;
            display_all_products(list_products_search); // Отображаем результат поиска
        }
    });
});
