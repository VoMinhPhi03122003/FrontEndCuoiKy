// rsfp + tab

import React from 'react';
import PropTypes from 'prop-types';

// Định nghĩa PropTypes cho component Pagination
Pagination.propTypes = {
    // Yêu cầu props `pagination` là một object và bắt buộc phải được cung cấp
    pagination: PropTypes.object.isRequired,

    // Props `onPageChange` là một function (hàm), không bắt buộc phải được cung cấp
    // Được sử dụng để xử lý sự kiện khi người dùng chuyển đổi giữa các trang
    onPageChange: PropTypes.func

};

function Pagination(props) {

    const {pagination, onPageChange} = props;
    const {limit, page, total, totalPages} = pagination;

    console.log("Day la component Pagination :", pagination)


    function handlePageChange(newPage) {
        if (onPageChange) onPageChange(newPage)
    }

    return (
        <div>
            <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>Prev</button>
            <button disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
    );
}

export default Pagination;