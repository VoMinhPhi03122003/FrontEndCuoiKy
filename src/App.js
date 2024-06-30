import SectionHero from "./components/section_hero"
import SectionCategories from './components/section_categories'
import SectionFeaturedCode from './components/section_featured_product'
import SectionBreadcrumb from './components/Commons/section_breadcrumb'
import Header from './components/Commons/Header'
import Footer from "./components/Commons/Footer";

import './css/bootstrap.min.css'
import './css/elegant-icons.css'
 function App() {
    return (
        <div>
            <Header/>
            {/*<SectionBreadcrumb/>*/}
            <SectionHero/>
            {/*<SectionCategories/>*/}
            <SectionFeaturedCode/>
            <Footer/>
        </div>
    )
}
export default App;