export function formatCurrency(number) {
    // Thực hiện định dạng số thành đơn vị tiền tệ
    const formattedNumber = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(number);

    return formattedNumber;
}

