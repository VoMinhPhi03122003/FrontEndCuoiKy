
import SectionSubHero from "./components/HomePage/SectionSubHero"
import SectionBreadcrumb from './components/Commons/SectionBreadcrumb'
import SectionFeaturedProduct from './components/HomePage/SectionFeaturedProduct'
import Header from './components/Commons/Header'
import Footer from "./components/Commons/Footer";
import Banner from './components/HomePage/Banner'
import Login from "./components/AuthenticationPage/Login";
import Register from "./components/AuthenticationPage/Register";
import ForgotPass from "./components/AuthenticationPage/ForgotPass";
import ChangePass from "./components/AuthenticationPage/ChangePass";
import {store} from './redux/Store'
import {Provider} from 'react-redux'


import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/style.css'
 function App() {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <Banner/>
                <SectionFeaturedProduct/>
                <Footer/>
                <ProductDetails/>
            </div>
        </Provider>
    )
}
export default App;