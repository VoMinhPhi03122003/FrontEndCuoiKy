export const formatNumber = (x, char) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char)

export function formatRating(rating) {
    const total = Object.keys(rating).reduce((previous, key) => previous + rating[key], 0)
    const average = (Object.keys(rating).reduce((previous, key, index) => previous + (rating[key] * (5 - index)), 0) / total).toFixed(1)
    return {
        total: total,
        average: average,
        avg5: total > 0 ? (rating['5star'] * 100 / total) : 0,
        avg4: total > 0 ? (rating['4star'] * 100 / total) : 0,
        avg3: total > 0 ? (rating['3star'] * 100 / total) : 0,
        avg2: total > 0 ? (rating['2star'] * 100 / total) : 0,
        avg1: total > 0 ? (rating['1star'] * 100 / total) : 0
    }
}

export const getTypes = (json) => {
    const types = []
    json.data.forEach(product => {
        const type = types.find(value => value.id === product.type.id)
        if (type) type.quantity = type.quantity + 1
        else types.push({...product.type, quantity: 1})
    })
    return types.sort((a, b) => a.name < b.name ? -1 : 1)
}

export function getTypeName(typeId) {
    if (typeId === 'dogomsu') return 'Đồ gốm sứ'
    if (typeId === 'domaytredan') return 'Đồ mây tre đan'
    if (typeId === 'dogo') return 'Đồ gỗ'
    if (typeId === 'dotheuvadet') return 'Đồ thêu và dệt '
    if (typeId === 'dotrangsucthucong') return 'Đồ trang sức'
    if (typeId === 'doda') return 'Đồ da'
    if (typeId === 'nenthucong') return 'Nến thủ công'
    if (typeId === 'xaphong') return 'Xà phòng'
    if (typeId === 'dungcu') return 'Dụng cụ'
    return null
}

export const makeURL = (search, from, type, page, sort) => {
    const searchPart = search != null ? `name_like=${search}&` : ''
    const fromPart = from != null ? `type.id=${from}&` : ''
    const typePart = type != null ? `type.id=${type}&` : ''
    const pagePart = page != null ? `_page=${page}&_limit=12&` : ''
    const sortPart = sort != null ? `_sort=${sort}&_order=desc` : ''
    return trim(trim(`http://localhost:9810/products?${searchPart}${fromPart}${typePart}${pagePart}${sortPart}`, '&'), '?')
}

export const buildQuery = (ids) => {
    let query = ''
    for (let id of ids) {
        query = query + `id=${id}&`
    }
    return trim(trim(`http://localhost:9810/products?${query}`, '&'), '?')
}

function trim(s, c) {
    if (c === "]") c = "\\]";
    if (c === "^") c = "\\^";
    if (c === "\\") c = "\\\\";
    return s.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", "g"), "");
}

export function getPassedTimeInText(when) {
    const elapseTime = Date.now() - when;

    if (elapseTime < 60 * 1000) {
        return "Vừa xong";
    } else if (elapseTime < 60 * 60 * 1000) {
        return `${Math.floor(elapseTime / (60 * 1000))} phút trước`
    } else if (elapseTime < 24 * 60 * 60 * 1000) {
        return `${Math.floor(elapseTime / (60 * 60 * 1000))} giờ trước`
    } else if (elapseTime < 7 * 24 * 60 * 60 * 1000) {
        return `${Math.floor(elapseTime / (24 * 60 * 60 * 1000))} ngày trước`
    } else if (elapseTime < 4 * 7 * 24 * 60 * 60 * 1000) {
        return `${Math.floor(elapseTime / (7 * 24 * 60 * 60 * 1000))} tuần trước`
    } else if (elapseTime < 12 * 4 * 7 * 24 * 60 * 60 * 1000) {
        return `${Math.floor(elapseTime / (4 * 7 * 24 * 60 * 60 * 1000))} tháng trước`
    }

    return `${Math.floor(elapseTime / (12 * 30 * 24 * 60 * 60 * 1000))} năm trước`
}

export const getFirstLetter = (name) => name.charAt(0).toUpperCase()

export function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}