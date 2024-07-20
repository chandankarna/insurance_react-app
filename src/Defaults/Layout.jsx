import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import ShareButton from './ShareButton/ShareButton';
// import Chatbot from './Chatbot/Chatbot';

class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Outlet />
                {/* <Chatbot /> */}
                <ScrollToTop />
                <ShareButton />
                <Footer />
            </>
        );
    }
}

export default Layout;
