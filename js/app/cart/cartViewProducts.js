import { cartAddedList } from "../../utils/elements.js";
import { productCart, setLocal } from "../../utils/utils.js";
import { cart } from "./cart.js";
import { viewCartSum } from "./viewCartSum.js";

export function cartViewProducts(box = cartAddedList) {

    // Перевіряємо чи пустий список
    if (cart.length == 0) {
        box.innerHTML = `<span class="no-result no-result--inline">
                            <img src="img/no-result/no-result-v2.png" alt="No results" class="no-result__img" />
                            <span class="no-result__title">Корзина пуста!</span>
                        </span>`;
    } else {
        // Очищуємо перед виводом
        box.innerHTML = '';

        // Виводимо товари в корзину
        cart.forEach((item) => {

            box?.insertAdjacentHTML(
                'afterbegin',
                productCart(item)
            );
        })
    }

    // Підраховуємо товари та виводимо кількість
    viewCartSum(cart.length);

    // Зберігаємо список продуктів з корзини
    setLocal('cartList', cart);
}
