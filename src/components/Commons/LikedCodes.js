import Header from "./Header";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import {ProductContainer} from "../TopCodePage/ListProducts";
import {buildQuery} from "../../javascript/utils";
import {useEffect, useState} from "react";

export function Codes() {
    const likedCodes = useSelector(state => state.likedCodesReducer.liked)
    const ids = likedCodes.map((value) => value.id)
    const [data, setData] = useState([])

    useEffect(() => {
        if (ids.length > 0) {
            fetch(buildQuery(ids))
                .then(value => value.json())
                .then(json => {
                    setData(json.data)
                })
        } else {
            setData(likedCodes)
        }
    }, [ids, likedCodes, setData])

    return (
        <div className="container">
            <ProductContainer total={data.length} data={data} forLiked={true}/>
        </div>
    )
}

export function LikedCodes() {
    return (
        <>
            <Header/>
            <Codes/>
            <Footer/>
        </>
    )
}