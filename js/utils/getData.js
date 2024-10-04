// Універсальну функцію звернення до api
export default async function getData(url) {
    const res = await fetch(url)
    const data = await res.json();
    return data;
}

// Посилання до до api
export const apiUrls = {
    categories: 'https://66e579db5cc7f9b6273d6d0a.mockapi.io/categories',
    products: 'https://66e579db5cc7f9b6273d6d0a.mockapi.io/products',
    search: 'https://66e579db5cc7f9b6273d6d0a.mockapi.io/products?search=',
    hotOffer: 'https://66e579db5cc7f9b6273d6d0a.mockapi.io/products?hotoffer=yes',
    productCategory: 'https://66e579db5cc7f9b6273d6d0a.mockapi.io/products?catid='
};
