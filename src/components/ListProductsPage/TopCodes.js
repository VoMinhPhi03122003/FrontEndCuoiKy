import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {makeURL} from "../../javascript/utils";
import {Filter, Pagination, ProductContainer, SideBar} from "./Codes";
import Header from "../Commons/Header";
import Footer from "../Commons/Footer";

function TopProducts() {
    const page = useSelector(state => state.listProductsReducer.page)
    const type = useSelector(state => state.listProductsReducer.type)
    const sort = useSelector(state => state.listProductsReducer.sort)
    const [products, setProducts] = useState([])
    const refTotal = useRef(0)
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('search')
    const from = new URLSearchParams(location.search).get('from')

    useEffect(() => {
        const url = makeURL(query, from, type, page, sort)
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json.data)
                refTotal.current = json.total
            })
    }, [page, type, sort, query, from])

    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <SideBar/>
                    </div>
                    <div className="col-lg-9 col-md-7 pl-4">
                        <Filter total={refTotal.current}/>
                        <ProductContainer query={query} total={refTotal.current} data={products}/>
                        <Pagination total={refTotal.current}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function TopCodes() {
    return (
        <>
            <Header/>
            <TopProducts/>
            <Footer/>
        </>
    )
}