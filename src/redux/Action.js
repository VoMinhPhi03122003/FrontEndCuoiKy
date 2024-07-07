export const loadProduct = (data) => {
    return {
        type: 'product/load',
        payload: data
    }
}

export const addCart = (product) => {
    return {
        type: 'cart/add',
        payload: product
    }
}