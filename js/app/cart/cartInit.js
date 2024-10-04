import { cartAddedList, cartNoResult, cartSummProducts, catalogProducts } from "../../utils/elements.js";
import { cartAdd } from "./cartAdd.js";
import { cartCounterProduct } from "./cartCounterProduct.js";
import { cartDeleteProduct } from "./cartDeleteProduct.js";
import { cartViewOrderSum } from "./cartViewOrderSum.js";
import { cartViewProducts } from "./cartViewProducts.js";

export function cartInit() {

    // Виводимо з корзини товари якщо вони є
    cartViewProducts();

    // СЛідкуєсо за кнопками додавання в корзину
    if (catalogProducts) {
        catalogProducts.addEventListener('click', function (e) {
            e.preventDefault();

            // Отримуємо елемент по якому був клік
            const el = e.target;

            // Даємо розуміти, що треба добалвяти тільки при кліку на кнопку корзини
            if (el.classList.contains('js-cart-add')) {

                cartNoResult?.remove();

                cartAdd(el)
            }

        })
    }

    // Вішаємо подію кліка на корзину
    cartAddedList.addEventListener('click', function (e) {
        e.preventDefault();

        // Отримуємо елемент по якому був клік
        const el = e.target;

        // Отримаємо з елемента його data-type
        const type = el.getAttribute('data-type');

        // Відловлюємо едемент видалення товару
        switch (type) {
            case 'delete':

                // Видаляємо товар з корзини
                cartDeleteProduct(el);
                break;

            case 'plus':
            case 'minus':
                // Кількість товару
                cartCounterProduct(el);
                break;
        }

        // Перераховуємо кількість і ціну товарів
        if (cartSummProducts) {
            cartViewOrderSum();
        }
    })

}