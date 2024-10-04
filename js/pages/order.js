import { cart } from "../app/cart/cart.js";
import { cartViewOrderSum } from "../app/cart/cartViewOrderSum.js";
import { getFormData } from "../app/form/formData.js";
import { cartAddedList } from "../utils/elements.js";
import { orderState } from "../utils/utils.js";

export function orderPage() {
    // Підраховуємо кількість і сумму товару
    cartViewOrderSum();

    // Корзина пуста чи ні
    orderState((cart.length === 0) ? 'empty' : 'not-empty');

    // Слідкуєсо за видаленням товара
    cartAddedList.addEventListener('click', function (e) {
        orderState((cart.length === 0) ? 'empty' : 'not-empty');
    })

    // Слідкуємо за формою
    getFormData();

}