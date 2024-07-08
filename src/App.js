
import {store} from './redux/Store'
import {Provider} from 'react-redux'

import './css/boxicons.min.css'
import './css/boostrap-icons/bootstrap-icons.min.css'
import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/style.css'
import HomePage from './components/HomePage/HomePage'
import Profile from "./components/ProfilePage/Profile";

 function App() {
    return (
        <Provider store={store}>
            <HomePage/>
            <Profile/>
        </Provider>
    )
}
export default App;