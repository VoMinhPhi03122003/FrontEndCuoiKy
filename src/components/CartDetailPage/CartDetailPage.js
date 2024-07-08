import React from 'react';

import Header from '../Commons/Header'
import SectionBreadcrumb from '../Commons/SectionBreadcrumb'
import SectionCart from './SectionCart'
import Footer from '../Commons/Footer'
function CartDetailPage(){
    return(
        <div>
            <Header/>
            <SectionBreadcrumb/>
            <SectionCart/>
            <Footer/>
        </div>
    )
}
export default CartDetailPage;