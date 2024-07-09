export const addItemToCart = (product) => {
    return {
        type: 'cart/add-item',// => một chuỗi (string) đại diện cho tên hành động và thường được định nghĩa như một hằng số.
        payload: product
        /*
           Mang dữ liệu hoặc thông tin liên quan đến hành động được thực hiện.
           Payload có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả chuỗi, số, đối tượng, mảng
           hoặc bất kỳ kiểu dữ liệu phức tạp nào khác.
         */
    }
}
export const setType = (type) => {
    return {
        type: 'listProducts/type',
        payload: type
    }
}


export const removeItemFromCart = (product) => {
    return {
        type: 'cart/remove-item',
        payload: product
    }
}

export const updateDiscountPercent = (discount_percent) => {
    return {
        type: 'cart/update-discount-percent',
        payload: discount_percent
    }
}

export const setPage = (page) => {
    return {
        type: 'listProducts/page',
        payload: page
    }
}
export const setSort = (sort) => {
    return {
        type: 'listProducts/sort',
        payload: sort
    }
}


export const setLayout = (layout) => {
    return {
        type: 'listProducts/layout',
        payload: layout
    }
}

export const registerError = (data) =>{
    return{
        type: 'register/error',
        payload: data
    }
}