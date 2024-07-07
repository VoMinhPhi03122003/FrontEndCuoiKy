export const loadProduct = (data) => {
    return {
        type: 'product/load',
        payload: data
    }
}