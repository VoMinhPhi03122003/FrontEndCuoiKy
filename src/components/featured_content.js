import ProductItem from './product_featured_item'

function FeaturedContent() {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <ProductItem/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <ProductItem/>
            </div>
        </>
    )
}

export default FeaturedContent;