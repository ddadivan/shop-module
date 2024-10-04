import { cartSummProducts } from "../../utils/elements.js";
import { formatPrice } from "../../utils/utils.js";
import { cart } from "./cart.js";

export function cartViewOrderSum() {

    // Сформувати кількість товарів
    const countProducts = cart.length;

    // Сформувати ціну всіх товарів
    const sumProducts = cart.reduce((total, product) => {
        return total + (product.price * product.count)
    }, 0)

    // Формуває фінальний текст
    const viewSumm = `(${countProducts}) ${formatPrice(sumProducts)}`;

    // Виводимо сумму та кількість
    cartSummProducts.innerHTML = viewSumm;

}