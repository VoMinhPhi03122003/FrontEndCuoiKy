import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import logo from '../../public/logo.svg';
import '../App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import SectionHero from "./section_hero"
import SectionCategories from './section_categories'

import '../css/bootstrap.min.css'
import '../css/elegant-icons.css'
import '../css/font-awesome.min.css'
import '../css/nice-select.css'
import '../css/slicknav.min.css'
import '../css/style.css'

function App() {
    return (
        <div className="App">
            <Header/>
            <SectionHero/>
            <SectionCategories/>
            <Footer/>
        </div>
    );
}

export default App;