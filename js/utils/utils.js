import { orderEmpty, orderNotEmpty, orderSuccess } from "./elements.js";

// Збереження даних в схоще
export function setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Отримання даних в схоща
export function getLocal(key, defaultData = []) {
    return JSON.parse(localStorage.getItem(key)) ?? defaultData;
}

// Форматування ціни
export function formatPrice(price) {
    // Перетворюємо число в рядок і форматируемо з пробілами
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedPrice} грн`;
}

// Функція добавлення класу активності
export function setActive(e) {

    // Отримуємо блок з яким потрібно працювати
    const box = e.target.getAttribute('data-box-toggle');

    // Добавляємо або забираємо клас активності
    document.querySelector(box).classList.toggle('show');

    // Добавляємо кнопці клас актисності
    e.target.classList.toggle('active');
}


// Функція виводу карточки товару
export function setCardProduct(product) {

    const { id, image, title, price, oldprice } = product;

    return `<div class="card-product">
                <div class="card-product__img-hold">
                    <img src="img/catalog/${image}" alt="${title}" class="card-product__img">
                </div>
                <div class="card-product__text-hold">
                    <a href="#" class="card-product__title-link">${title}</a>
                    <span class="card-product__price">${price} грн <small>${oldprice} грн</small></span>
                    <a href="#" class="card-product__btn-add js-cart-add"
                    data-id="${id}" 
                    data-image="${image}" 
                    data-title="${title}" 
                    data-price="${price}" 
                    data-count="1"
                    >
                        <svg class="icon icon-cart">
                            <use href="#icon-cart-add"></use>
                        </svg>
                    </a>
                </div>
            </div>`
}


// Функція виводу карточки корзини
export function productCart(productCart) {
    const { count, id, image, price, title } = productCart;

    return `<div class="cart-added-list__item">
                <button class="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon"
                    data-type="delete" data-id="${id}">
                    <svg class="icon icon-close"><use href="#icon-close"></use></svg>
                </button>
                <img src="img/catalog/${image}" alt="" class="cart-added-list__item-img">
                <p class="cart-added-list__item-text-hold">
                    <a href="#" class="cart-added-list__item-title-link">${title}</a>
                    <span class="cart-added-list__item-meta-list">
                        <span class="cart-added-list__item-meta">Ціна: ${price} грн</span>
                    </span>
                </p>
                <input type="text" class="cart-added-list__item-count" placeholder="0" value="${count}" data-id="${id}">
                <button data-type="plus" class="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon" data-type="plus" data-id="${id}"></button>
                <button data-type="minus" class="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon" data-type="minus" data-id="${id}"></button>
            </div>`;
}



// Переключаємо блок відносно його стану
export function orderState(type = 'empty') {

    // Переключалка станів відносно, що треба показати на сторінці order
    switch (type) {
        case 'empty':
            orderEmpty.classList.remove('hidden')
            orderNotEmpty.classList.add('hidden')
            orderSuccess.classList.add('hidden')
            break;
        case 'not-empty':
            orderEmpty.classList.add('hidden')
            orderNotEmpty.classList.remove('hidden')
            orderSuccess.classList.add('hidden')
            break;
        case 'success':
            orderEmpty.classList.add('hidden')
            orderNotEmpty.classList.add('hidden')
            orderSuccess.classList.remove('hidden')
            break;
    }
}