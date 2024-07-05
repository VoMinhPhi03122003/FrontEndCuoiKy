
import AllCategories from "./AllCategories"
import SearchBar from "./SearchBar"
import Phone from "./Commons/Phone";
import Banner from "./Banner"

function SectionHero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <AllCategories/>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <SearchBar/>
                        </div>
                        <Banner/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHero;