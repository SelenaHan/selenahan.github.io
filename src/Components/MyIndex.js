import React from 'react';
import './MyCSS.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function MyIndex() {
    return (
        <div>
            <div className='myindex'></div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
export default MyIndex