
import React, {useState} from "react";
import TitleSection from './title_section_featured_product'
import ListProductsFeatured from './list_products_featured'
function SectionFeaturedCode(){


    return(
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <TitleSection/>
                </div>
                <ListProductsFeatured/>
            </div>
        </section>
    );
}

export default SectionFeaturedCode;