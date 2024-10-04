import { cartAddedSum } from "../../utils/elements.js";

// Підраховуємо кількість товарів
export function viewCartSum(cartLength) {

    // Перебираємо елементи де треба вивести кількість
    cartAddedSum.forEach((el) => {

        // Реагуємо на пустоту корзини
        if (cartLength == 0) {

            // Ховаємо елемент
            el.classList.remove('show-num');
        } else {

            // Виводимо кільсть
            el.innerHTML = cartLength;

            // Добавляємо клас
            el.classList.add('show-num');
        }
    })
}