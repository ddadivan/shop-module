import { getCategories } from "../app/getCategories.js";
import { getHotProducts, getProducts } from "../app/getProducts.js";
import { getProductsByCategory } from "../app/getProductsByCategory.js";
import { categoryList } from "../utils/elements.js";

export function homePage() {
        // Виводимо товари
        getProducts();

        // Виводимо гарячі пропозиції
        getHotProducts();

        // Виводимо категорії
        getCategories();

        // Виводимо товари по категоріям
        categoryList.addEventListener('click', getProductsByCategory);
}