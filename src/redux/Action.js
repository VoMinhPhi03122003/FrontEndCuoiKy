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
export const most = () => {
    return {
        type: 'listProducts/most'
    }
}


export const mostViewed = () => {
    return {
        type: 'listProducts/mostViewed'
    }
}

export const mostDownloaded = () => {
    return {
        type: 'listProducts/mostDownloaded'
    }
}