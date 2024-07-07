import SectionHero from "./components/SectionHero"

import SectionCategories from './components/Section_categories'
import SectionFeaturedCode from './components/SectionFeaturedProduct'

import Header from './components/Commons/Header'
import Footer from "./components/Commons/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPass from "./components/ForgotPass";
import ChangePass from "./components/ChangePass";

import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/style.css'
 function App() {
    return (
        <div>
            <Header/>
            <SectionHero/>
            <SectionFeaturedCode/>
            <Footer/>
            <Login/>
            <Register/>
            <ForgotPass/>
            <ChangePass/>
        </div>
    )
}
export default App;