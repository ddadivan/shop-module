import { cartAddedList } from "../../utils/elements.js";
import { setLocal } from "../../utils/utils.js";
import { cart } from "./cart.js";


export function cartCounterProduct(el) {

    // Витягуємо id
    const id = el.getAttribute('data-id');

    // Отримуємо тип з кнопки
    const type = el.getAttribute('data-type');

    // Шукаємо товар в корзині
    const productKeyInCart = cart.find((product) => product.id === id);

    // Робимо кількість відносно плюса чи мінуса
    if (type == 'minus') {

        // Перевіряємо кількість
        if (productKeyInCart.count > 1) {

            // Змешуємо кількість
            productKeyInCart.count--;
        }

    } else {
        // Збільшуємо кількість
        productKeyInCart.count++;
    }

    // Отримуємо елемент кількості
    const input = cartAddedList.querySelector(`input[data-id="${id}"]`);

    // Оновити список товарів в корзині
    input.value = productKeyInCart.count;

    // Зберігаємо список продуктів з корзини
    setLocal('cartList', cart);

}
