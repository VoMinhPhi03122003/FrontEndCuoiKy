import React, {useState} from "react";
import DataProductsFeatured from './DataProductsFeatured'

function SectionProductsFeatured() {

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>SẢN PHẨM NỔI BẬT</h2>
                        </div>
                    </div>
                </div>
                <DataProductsFeatured/>
            </div>
        </section>
    );
}
export default SectionProductsFeatured;