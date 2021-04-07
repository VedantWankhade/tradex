import React from 'react';
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import {HashRouter} from 'react-router';

export default function Page() {

    return (
        <div>
            <NavBar />
            <Main />
            <Footer />
        </div>
    )
}