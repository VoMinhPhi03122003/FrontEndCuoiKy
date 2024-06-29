import Header from "./components/header";
import Footer from "./components/footer";
import SectionHero from "./components/section_hero"
import SectionCategories from "./components/section_categories"
import SectionFeaturedCode from "./components/section_featured_code"

import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <SectionHero/>
            {/*<SectionCategories/>*/}
            <SectionFeaturedCode/>
            <Footer/>
        </div>
    );
}

export default App;
