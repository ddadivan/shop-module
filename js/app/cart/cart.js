import { getLocal } from "../../utils/utils.js";
// Масив де будуть зберігатися всі додані в корзину товари
export const cart = getLocal('cartList', []);