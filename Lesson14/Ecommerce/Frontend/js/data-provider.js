export async function getAllProducts() {
    let allProductsJSON = null;
    return allProductsJSON = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => json);
}

export async function getAllProductsLimitResults(limit) {
    let productsJSON = null;
    return productsJSON = await fetch('https://fakestoreapi.com/products?limit=' + limit)
        .then(res => res.json())
        .then(json => json)
}

export async function getSingleProduct(productId) {
    let singleProductJSON = null;
    return singleProductJSON = await fetch('https://fakestoreapi.com/products/' + productId)
        .then(res => res.json())
        .then(json => json);
}

export async function getAllProductsInCategory(category) {
    let allProductsInCategory = null;
    return allProductsInCategory = await fetch('https://fakestoreapi.com/products/category/' + category)
        .then(res => res.json())
        .then(json => json)
}

export async function getAllCategories() {
    let categoriesJSON = null;
    return categoriesJSON = await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => json)
}

