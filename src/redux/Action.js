export const loadProductsFeatured = (data) => {
    return {
        type: 'product/load-products-featured',
        payload: data
    }
}

export const addCart = (product) => {
    return {
        type: 'cart/add',
        payload: product
    }
}