import CategoryItem from './category_item'

function SectionCategories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <CategoryItem/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCategories;