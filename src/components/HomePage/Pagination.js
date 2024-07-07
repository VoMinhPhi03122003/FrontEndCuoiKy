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
    const {_page, _limit, _totalRows} = pagination;
    const totalPages = Math.ceil(_totalRows / _limit); //=> 51/10  = 5.1 return 6


    function handlePageChange(newPage) {
        if (onPageChange) onPageChange(newPage)
    }

    return (
        <div>
            <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>Prev</button>
            <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>Next</button>
        </div>
    );
}

export default Pagination;