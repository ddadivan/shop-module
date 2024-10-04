import { cartAddedList } from "../../utils/elements.js";
import { cart } from "./cart.js";
import { cartViewProducts } from "./cartViewProducts.js";

export function cartAdd(el) {

    // Отримуємо інфомрацію про товар
    const product = el.dataset;

    // Перевіряємо чи є товар в корзині перед добавлення
    const productExist = cart.findIndex((item) => item.id === product.id)

    // Перевіряємо чи є товар
    if (productExist == -1) {

        // Добавляємо товар в корзину
        cart.push(product);

    } else {

        // Добавляємо кількість товару
        cart[productExist].count++;
    }

    // Виводимо товари в блок корзини
    cartViewProducts();


    // Відкриваємо корзину
    cartAddedList.classList.add('show');

}