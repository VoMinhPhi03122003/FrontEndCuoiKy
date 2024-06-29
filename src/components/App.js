import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header from "./header";
import Footer from "./footer";
import SectionHero from "./section_hero"


import '../css/bootstrap.min.css'
import '../css/elegant-icons.css'
import '../css/font-awesome.min.css'
import '../css/nice-select.css'
import '../css/slicknav.min.css'
import '../css/style.css'

function App() {
    return (
        <div>
            <Header/>
            <SectionHero/>
             <Footer/>
        </div>
    )
}

export default App;