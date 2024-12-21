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
    // если не существует, очистим список на странице
    let area_product_card = document.getElementById('area_product_card');
    area_product_card.innerHTML = '';

    // Перебираем все товары и добавляем их на страницу
    for (let i = 0; i < list_products_display.length; i++) {
        let product = list_products_display[i];

        // Создаем карточку товара
        let product_card = document.createElement('div');
        product_card.className = 'product_card';
        product_card.id = `product_card_${i}`;

        // Обработчик события для открытия карточки товара
        product_card.addEventListener('click', () => {
            display_product_card(product);
        });
        
        
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
         let name_images = document.createElement('div');
        name_images.className = 'name_images';
        
        let title = document.createElement('p');
        title.className = 'name_product_card';
        title.textContent = product.title;
        
        let colors_all = document.createElement('div');
        colors_all.className = 'colors_all';
        
        let color_images_one = document.createElement('div');
        color_images_one.className = 'color_images_one';
        let color_images_two = document.createElement('div');
        color_images_two.className = 'color_images_two';
        let color_images_three = document.createElement('div');
        color_images_three.className = 'color_images_three';
        
        

        let price = document.createElement('p');
        price.className = 'price_product_card';
        price.textContent = `$${product.price}`;

        // Убрала описание
        //let description = document.createElement('p');
        //description.className = 'text_product_card_description';
        //description.textContent = product.description;

        // Добавляем все элементы в карточку товара
        product_card.appendChild(background_img_product_card);
        //product_card.appendChild(description);
        name_images.appendChild(title);
        colors_all.appendChild(color_images_one);
        colors_all.appendChild(color_images_two);
        colors_all.appendChild(color_images_three);
        name_images.appendChild(colors_all);
        product_card.appendChild(name_images);
        product_card.appendChild(price);
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
        if (list_products_search.length === 0) {
            div_what_found.innerHTML = '';
            area_product_card.innerHTML = '<div class="div_nothing_found"> <div class="text_nothing_found">Упс! По вашему запросу ничего не нашлось (◡_◡)</div></div>';
            console.log(area_product_card);
        } else if (search_area === "") {
            div_what_found.innerHTML = "";
            display_all_products(list_products);
        } else {
            div_what_found.innerHTML = `<div class="text_what_found">По вашему запросу найдено товаров : ${total} | Отображено на странице: ${list_products_search.length}</div>`;
            display_all_products(list_products_search); // Отображаем результат поиска
        }
    });
    
});



// Добавление товара
let count_id = 194, body = document.body, prod;
let add_button = document.getElementById('add_button');
add_button.addEventListener('click', () => {
    // Создаем overlay (затмение)
    let overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Создаем карточку добавления товара
    let add_product_card = document.createElement('div');
    add_product_card.className = 'add_product_card';

    add_product_card.innerHTML = `
        <div class = "add_krest">
            <h3>Add a product</h3>
            <img src="../assets/img/lr7/close20.png" alt="" id="close_button">
        </div>
            <hr style="background-color: #e0e0e0; height: 2px; border: none; margin-bottom: 30px;">
            <div class = "add_product">
                <div class="label_add_product_card">Product name:</div>
                <input class="text_add_product_card" placeholder="Enter the product name" id = "input_add_product_card"></input>
            </div>
            <div class = "add_product">
                <div class="label_add_product_card">Price:</div>
                <input type="number" class= "price_add_product_card" placeholder="Enter the product price" id = "input_add_product_card"></input>
            </div>
                <div class = "add_product">
                <div class="label_add_product_card">Description:</div>
                <textarea placeholder="Enter the product description" class="description_add_product_card" id = "input_add_description"></textarea>
            </div>
        <button type="button" id="save_button" class="button">Save</button>

    `;// Устанавливаем placeholder (подсказку)
    
    // Добавляем overlay на страницу
    body.appendChild(overlay);
    // Добавляем карточку товара в контейнер
    body.appendChild(add_product_card);

    // Обработка для кнопки "Закрыть"
    document.getElementById('close_button').addEventListener('click', () => {
        add_product_card.remove(); // Удаляем карточку товара
        overlay.remove();
    });

    // Обработка для кнопки "Сохранить"
    add_product_card.querySelector('#save_button').addEventListener('click', () => {
        count_id = count_id + 1;
        let title = add_product_card.querySelector('.text_add_product_card').value;
        let price = add_product_card.querySelector('.price_add_product_card').value;
        let description = add_product_card.querySelector('.description_add_product_card').value;

        // "Отправка" данных на сервер
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: count_id,
                title: title,
                price: price,
                description: description,
                thumbnail: '../assets/img/bubu_dance.gif'
            })
        })
        .then(res => res.json())
        .then(data_add => {
            console.log('Добавила:', data_add);

            // Создаем новую карточку товара
            let add_product_card_html = `
                <div class="product_card" id="product_card_${count_id}">
                    <div class="background_img_product_card">
                        <img class="img_product_card" src="${data_add.thumbnail}" alt="${data_add.title}">
                    </div>
                    <div class = "name_images"> 
                        <p class="name_product_card">${data_add.title}</p>
                        <div class="colors_all">
                            <div class="color_images_one"></div>
                            <div class="color_images_two"></div>
                            <div class="color_images_three"></div>
                        </div>
                    </div>
                    <p class="text_product_card">$${data_add.price}</p>
                </div>
            `;
            
            // Находим контейнер и вставляем новый товар в начало
            let area_product_card = document.getElementById('area_product_card');
            // insertAdjacentHTML для того чтобы старые addEventListener методы не перезаписывались!! (Вставляем HTML в начало контейнера)
            area_product_card.insertAdjacentHTML('afterbegin', add_product_card_html);
            // area_product_card.innerHTML неверно работает
            
            // Метод для открытия карточки товара
            document.getElementById(`product_card_${count_id}`).addEventListener('click', () => {
                display_product_card(data_add);
            });

            // Закрываем форму добавления товара
            add_product_card.remove(); // Удаляем карточку товара
            overlay.remove();
        })
    });
});


// Открытие карточки товара
function display_product_card(product) {
    // Создаем затемнение
    let overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Создаем окно для товара
    let open_display_product_card = document.createElement('div');
    open_display_product_card.className = 'open_display_product_card';

    // Добавляем контент окна
    open_display_product_card.innerHTML = `
    <div style="display: flex; justify-content: flex-end;">
            <img src="../assets/img/lr7/close20.png" alt="" id="button_close_display_product_card">
    </div>
            <div class = "card_content">
                <img src="${product.thumbnail}" alt="${product.title}" class="modal_img">
                <div>
                    <h2>${product.title}</h2>
                    <p>Price: $${product.price}</p>
                    <p>Description: ${product.description}</p>
                </div>
            </div>
    `;

    // Добавляем окно и затемнение на страницу
    document.body.appendChild(overlay);
    document.body.appendChild(open_display_product_card);

    // Добавляем обработчик для кнопки "Закрыть"
    let button_close_display_product_card = document.getElementById('button_close_display_product_card');
    button_close_display_product_card.addEventListener('click', () => {
        open_display_product_card.remove(); // Удаляем окно
        overlay.remove(); // Удаляем overlay
    });
};

