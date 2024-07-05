import React from "react";

import products_featured from '../data/ProductData.js'

class ListProductsFeatured extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: products_featured}

        if (this.state.products == null) this.state.products = []
        console.log(this.state.products)
    }

    render() {
        return (

            <div className="row featured__filter">
                {this.state.products.map(product => (
                        <ItemProductFeatured id={product.id} name={product.name} img={product.img}
                                             price={product.price}></ItemProductFeatured>
                    )
                )}
            </div>
        )
    }

}

class ItemProductFeatured extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            img: this.props.img,
            price: this.props.price
        }
    }
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg"
                         style={{backgroundImage: `url(${this.state.img})`}}>
                        <ul className="featured__item__pic__hover">
                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                            <li><a href=""><i className="fa fa-retweet"></i></a></li>
                            <li><a href=""><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="">{this.state.name}</a></h6>
                        <h5>{this.state.price}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListProductsFeatured;