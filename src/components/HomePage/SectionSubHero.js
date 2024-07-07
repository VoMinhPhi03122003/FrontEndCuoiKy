import AllCategories from "../Commons/AllCategories"
import SearchBar from "../Commons/SearchBar"

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