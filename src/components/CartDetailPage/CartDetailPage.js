import React from 'react';

import Header from '../Commons/Header'
import SectionBreadcrumb from '../Commons/SectionBreadcrumb'
import SectionCart from './SectionCart'
import Footer from '../Commons/Footer'
function CartDetailPage(){
    const breadcrumbs = [{name: "Trang chủ", link: "/"}, {name: " Chi tiết giỏ hàng", link: ""}]
    return (
        <div>
            <Header/>
            <SectionBreadcrumb breadcrumbs={breadcrumbs}/>
            <SectionCart/>
            <Footer/>
        </div>
    )
}

export default CartDetailPage;