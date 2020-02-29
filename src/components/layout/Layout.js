import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Maintenance from '../maintenance/Maintenance';

const Layout = (props) => {

    const showMaintenance = false;
    const contents = showMaintenance ? <Maintenance /> : <Body {...props} />;

    return (
        <div id='container'>
            <Header />
            { contents }
            <Footer />
        </div>
    );
};

export default Layout;