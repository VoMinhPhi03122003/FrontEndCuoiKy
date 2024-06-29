function SearchBar() {
    return (

        <div className="hero__search__form">
            <form action="#">
                <input type="text" placeholder="What do you need?"/>
                <button type="submit" className="site-btn">SEARCH</button>
            </form>
        </div>

    )
}

export default SearchBar;