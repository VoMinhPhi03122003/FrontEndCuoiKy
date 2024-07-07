export const addCart = (product) => {
    return {
        type: 'cart/add-item',
        payload: product
    }
}