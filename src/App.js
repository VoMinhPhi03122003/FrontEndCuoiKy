import SectionHero from "./components/SectionHero"
import SectionCategories from './components/Section_categories'
import SectionFeaturedCode from './components/SectionFeaturedProduct'
import SectionBreadcrumb from './components/Commons/SectionBreadcrumb'
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
            <SectionFeaturedCode/>
            <Footer/>
        </div>
    )
}
export default App;