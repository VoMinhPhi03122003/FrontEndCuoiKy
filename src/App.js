import SectionHero from "./components/SectionHero"
import SectionSubHero from "./components/SectionSubHero"
import SectionBreadcrumb from './components/Commons/SectionBreadcrumb'
import SectionFeaturedCode from './components/SectionFeaturedProduct'
import Header from './components/Header'
import Footer from "./components/Commons/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPass from "./components/ForgotPass";
import ChangePass from "./components/ChangePass";
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
                <SectionHero/>
                <SectionFeaturedCode/>
                <Footer/>
            </div>
        </Provider>
    )
}
export default App;