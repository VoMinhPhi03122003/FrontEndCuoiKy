
import SectionSubHero from "./components/HomePage/SectionSubHero"
import SectionBreadcrumb from './components/Commons/SectionBreadcrumb'
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
import HomePage from './components/HomePage/HomePage'

 function App() {
    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
    )
}
export default App;