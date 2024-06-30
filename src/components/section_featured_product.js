
import React, {useState} from "react";
import FeaturedTitle from './featured_title'
import FeaturedContent from './featured_content'
function SectionFeaturedCode(){


    return(
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <FeaturedTitle/>
                </div>
                <div className="row featured__filter">
                    <FeaturedContent/>
                </div>
            </div>
        </section>
    );
}

export default SectionFeaturedCode;