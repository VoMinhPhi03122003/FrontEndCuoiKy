// Nhúng thư viện json-server
const jsonServer = require('json-server');

// Tạo một server mới
const server = jsonServer.create();

// Tạo router và chỉ định đường dẫn tới file db.json chứa dữ liệu
const router = jsonServer.router('db.json');

// Tạo danh sách các middleware mặc định
const middlewares = jsonServer.defaults();

//  Định nghĩa hàm render cho router
router.render = (req, res) => {
    const headers = res.getHeaders();
    const totalCountHeader = headers['x-total-count'];
    // Kiểm tra nếu request method là GET và tồn tại header 'x-total-count'
    if (req.method === 'GET' && totalCountHeader) {
        const totalCount = parseInt(totalCountHeader, 10);
        const limit = parseInt(req.query._limit, 10) || 10;
        const offset = parseInt(req.query._page, 10) * limit || 0;
        const currentPage = Math.ceil(offset / limit) + 1;
        const totalPages = Math.ceil(totalCount / limit);

        // Trả về dữ liệu phân trang và thông tin về phân trang

        res.jsonp({
            data: res.locals.data.slice(offset, offset + limit),
            pagination: {
                total: totalCount,
                limit: limit,
                page: currentPage,
                totalPages: totalPages,
            },
        });
    } else {
        // Trường hợp không phải GET hoặc không có 'x-total-count' header, trả về dữ liệu ban đầu
        res.jsonp(res.locals.data);
    }
};

// Sử dụng các middleware mặc định
server.use(middlewares);

// Tái viết đường dẫn '/api/*' thành '/$1'
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));
// Sử dụng router đã được tạo
server.use(router);

// Lắng nghe kết nối tới cổng 9810 và log thông báo khi server khởi động thành công
server.listen(9810, () => {
    console.log('JSON Server is running');
});