import { cart } from "./cart.js";
import { cartViewProducts } from "./cartViewProducts.js";

export function cartDeleteProduct(el) {

    // Витягуємо id
    const id = el.getAttribute('data-id');

    // Шукаємо товар в корзині
    const productKeyInCart = cart.findIndex((product) => product.id === id);

    // Перевіряємо чи є товар
    if (productKeyInCart !== -1) {

        // Видалити в корзині товар по ключу
        cart.splice(productKeyInCart, 1);

        // Оновити список товарів в корзині
        cartViewProducts();

    }
}