// Імпортуємо функцію `categoryList` з модуля `elements.js` та функцію `getData` разом з об'єктом `apiUrls` з модуля `getData.js`.
import { categoryList } from "../utils/elements.js";
import getData, { apiUrls } from "../utils/getData.js";

// Оголошуємо асинхронну функцію `getCategories` для отримання списку категорій і вставки їх у DOM.
export async function getCategories() {
    // Викликаємо функцію `getData`, передаючи їй URL для отримання категорій.
    const categories = await getData(apiUrls.categories);

    // Проходимо через кожну категорію в отриманому масиві.
    categories.forEach(el => {

        // Деструктуризація об'єкта категорії для отримання імені категорії та її ідентифікатора.
        const { categoryName, id } = el;

        // Додаємо новий HTML-елемент для категорії в початок списку `categoryList`.
        categoryList.insertAdjacentHTML(
            'afterbegin', // Вставка HTML перед першим дочірнім елементом.
            `<a href="${id}" class="dropdown-item">${categoryName}</a>` // Форматуємо HTML-рядок з посиланням на категорію.
        );
    });
}
