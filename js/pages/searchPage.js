import { getProducts } from "../app/getProducts.js";
import { checkSearchPhrase, getSearchProducts } from "../app/getSearchProducts.js";
import { btnSearch, inputSearch } from "../utils/elements.js";


export function searchPage() {
    // Виводимо товари
    getProducts();

    // Пошук продуктів
    inputSearch.addEventListener('input', checkSearchPhrase);
    btnSearch.addEventListener('click', getSearchProducts);
}