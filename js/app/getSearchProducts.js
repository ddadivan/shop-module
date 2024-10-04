import { btnSearch, inputSearch } from "../utils/elements.js";
import { apiUrls } from "../utils/getData.js";
import { getProducts } from "./getProducts.js";


let timerId = 0;

export function getSearchProducts(event) {

    // пошукова фраза
    const searchPhase = inputSearch.value;


    // якщо пошукава фраза пуста то формуємо запит, якщо ні то показуємо товари
    const url = searchPhase === ''
        ? `${apiUrls.search}`
        : `${apiUrls.search + searchPhase}`;

    // виводимо товари на сторінку
    getProducts(url);

    // inputSearch.value = '';

    checkSearchPhrase();
}

export function checkSearchPhrase() {
    if (inputSearch.value.trim() !== '') {

        btnSearch.classList.remove('disabled');

    } else {

        btnSearch.classList.add('disabled');
    }
}

