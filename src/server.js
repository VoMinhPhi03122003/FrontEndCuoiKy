const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Phân trang dữ liệu
router.render = (req, res) => {
    const headers = res.getHeaders();
    const totalCountHeader = headers['x-total-count'];
    if (req.method === 'GET' && totalCountHeader) {
        const totalCount = parseInt(totalCountHeader, 10);
        const limit = parseInt(req.query._limit, 10) || 10;
        const offset = parseInt(req.query._page, 10) * limit || 0;
        const currentPage = Math.ceil(offset / limit) + 1;
        const totalPages = Math.ceil(totalCount / limit);

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
        res.jsonp(res.locals.data);
    }
};

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));
server.use(router);
server.listen(9810, () => {
    console.log('JSON Server is running');
});