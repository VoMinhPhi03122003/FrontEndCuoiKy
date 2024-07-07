export const addCart = (product) => {
    return {
        type: 'cart/add-item',
        payload: product
    }
}

export const switchPage = (page) => {
    return {
        type: 'listProducts/page',
        payload: page
    }
}