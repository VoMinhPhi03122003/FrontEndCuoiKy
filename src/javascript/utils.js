export function formatCurrency(number) {
    // Thực hiện định dạng số thành đơn vị tiền tệ
    const formattedNumber = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(number);

    return formattedNumber;
}
export function checkItemExistCart(cart, product) {
    /*
      Sử dụng hàm mảng 'find' để tìm phần tử trong mảng 'cart'
      có 'id' tương tự với 'id' của 'product.id'
    */
    return cart.find(item => item.id === product.id);
    /*
       Nếu trong mảng cart không có phần tử nào thỏa mãn điều kiện,
       thì hàm find sẽ trả về giá trị undefined.
    */
}

export function totalPrice(cart){
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}
export function loadCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart'));

    /*
        do Local Storage lưu dữ liệu dưới dạng chuỗi Json string
        nên khi đọc dữ liệu từ Local Storage nên ta phải chuyển nó thành dạng object
     */
}
export function getPercentDiscount(discount_code, list_discount_code) {
    let percent = 0;
    for (let item of list_discount_code) {
        if (item.code === discount_code) {
            percent = item.discount_percent;
            break;
        }
    }
    return percent;

    /*
       lấy ra giá trị (% giảm giá) của mã giảm giá có trong danh sách mã giảm giá lấy từ server
     */
}

export const formatNumber = (x, char) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char)

export function formatRating(rating) {
    const total = Object.keys(rating).reduce((previous, key) => previous + rating[key], 0)
    const average = (Object.keys(rating).reduce((previous, key, index) => previous + (rating[key] * (5 - index)), 0) / total).toFixed(1)
    return {
        total: total,
        average: average,
        avg5: rating['5star'] * 100 / total,
        avg4: rating['4star'] * 100 / total,
        avg3: rating['3star'] * 100 / total,
        avg2: rating['2star'] * 100 / total,
        avg1: rating['1star'] * 100 / total
    }
}
