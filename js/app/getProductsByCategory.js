import { viewCountProducts } from "../utils/elements.js";
import getData, { apiUrls } from "../utils/getData.js";
import { getProducts, viewProducts } from "./getProducts.js";

export async function getProductsByCategory(e) {
    e.preventDefault();

    // Отримуємо інформацію про категорію
    const catId = e.target.getAttribute('href');

    // Перевірка на категорію
    if (catId === 'all') {

        // Виводимо всі товари
        getProducts();
    } else {
        // Отримаємо товари з бази данних
        const products = await getData(apiUrls.productCategory + catId);

        // Виводимо товари
        viewProducts(products);

        // Виводимо кількість продуктів
        viewCountProducts.innerHTML = products.length;
    }
}