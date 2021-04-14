import React from "react";
import './index.scss'
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
    const { children } = props;

    return (
        <>
           <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout