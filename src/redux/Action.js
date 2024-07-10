
export const setType = (type) => {
    return {
        type: 'listProducts/type',
        payload: type
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

export const reset = () => {
    return {
        type: 'reset'
    }
}