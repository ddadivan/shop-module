import { cartInit } from "./app/cart/cartInit.js";
import { homePage } from "./pages/home.js";
import { orderPage } from "./pages/order.js";
import { searchPage } from "./pages/searchPage.js";
import { body, toggleButtons } from "./utils/elements.js";
import { setActive } from "./utils/utils.js";

// Добавляємо товари в корзину
cartInit();

// Вішажмо універсальну функнкцію, яка буде щосьвідкривати або закривати
toggleButtons.forEach((el) => {

    // Вішаємо функцію в якій до елементу добавляється show
    el.onclick = setActive;
})

// Отримуємо мітку сторінки
const page = body.classList[0];

switch (page) {
    case 'page-home':

        homePage();

        break;

    case 'page-search':

        searchPage();

        break;

    case 'page-order':

        orderPage();

        break;
}
