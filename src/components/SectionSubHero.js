import AllCategories from "./AllCategories"
import SearchBar from "./SearchBar"

function SectionSubHero() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <AllCategories/>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SectionSubHero;