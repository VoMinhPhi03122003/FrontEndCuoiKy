
import Categories from "./categories"
import SearchBar from "./search_bar"
import Phone from "./phone"
import Banner from "./banner"
function SectionHero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Categories/>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <SearchBar/>
                            {/*<Phone/>*/}
                        </div>
                        <Banner/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHero;