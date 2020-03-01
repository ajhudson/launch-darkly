import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Layout = (props) => {

    return (
        <div id='container'>
            <Header />
            <Body {...props} />
            <Footer />
        </div>
    );
};

export default Layout;