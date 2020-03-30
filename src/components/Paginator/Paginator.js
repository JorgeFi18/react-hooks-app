import React from 'react';
import Pagination from 'rc-pagination';

import './Paginator.scss';

export default function Paginator(props) {
    const { currentPage, totalItems, onChangePage } = props;
    return (
        <Pagination 
            className="paginator"
            current={currentPage}
            total={totalItems}
            pageSize={20}
            onChange={onChangePage}
        />
    )
}