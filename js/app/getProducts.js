import { catalogProducts, hotOfferProducts, viewCountProducts } from "../utils/elements.js";
import getData, { apiUrls } from "../utils/getData.js";
import { setCardProduct } from "../utils/utils.js";

// Функція для виводу товарів
export async function viewProducts(products, box = catalogProducts) {

    // Перевірка на пустоту
    if (products === 'Not found') {

        // Повідомити про пустоту
        box.innerHTML = '<h2 class="no-result">Товарів не знайдено...</h2>';

    } else {

        // Очищуємо блок
        box.innerHTML = '';

        // Виводимо товари до списку
        products.forEach(el => {

            // Вивід до HTML
            box.insertAdjacentHTML(
                'afterbegin',
                setCardProduct(el)
            )
        });
    }
}


// Функція для отримання товарів каталогу
export async function getProducts(url = apiUrls.products) {

    // Отримаємо товари з бази данних
    const products = await getData(url);

    // Виводимо кількість продуктів
    viewCountProducts.innerHTML = products.length;

    // ViewProducts
    viewProducts(products);
}


// Функція для отримання товарів каталогу
export async function getHotProducts() {

    // Отримаємо товари з бази данних
    const products = await getData(apiUrls.hotOffer);

    // ViewProducts
    viewProducts(products, hotOfferProducts);
}
