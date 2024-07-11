import Header from "./Header";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import {ProductContainer} from "../TopCodePage/ListProducts";

export function Codes() {
    const likedCodes = useSelector(state => state.likedCodesReducer.liked)

    return (
        <div className="container">
            <ProductContainer total={likedCodes.length} data={likedCodes} forLiked={true}/>
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