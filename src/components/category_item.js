import categori_img from '../img/categories/cat-1.jpg'

function CategoryItem() {
    return (
        <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg="">
                <h5><a href="#">Fresh Fruit</a></h5>
            </div>
        </div>
    )
}

export default CategoryItem;