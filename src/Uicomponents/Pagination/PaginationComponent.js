import React from 'react';
import { Pagination } from 'antd';
function PaginationComponent (props) {
    return (
        <Pagination className='pagination-groove' defaultCurrent={6} total={500} />
    );
}

export default PaginationComponent;