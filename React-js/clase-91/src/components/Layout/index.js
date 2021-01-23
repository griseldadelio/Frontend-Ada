import React from 'react';

import { Aside, Footer, Header, Nav } from './components'


import './layout.css'

const Layout = ({ children, hideHeader, hideAside, hideNav }) => {
    return (
        <>
            {!hideHeader && <Header />}
            {!hideNav && <Nav />}
            <div className='rowLayout'>
                {!hideAside && <Aside />}
                {children}
            </div>
            <Footer />
        </>
    )
}
Layout.defaultProps = {
    hideHeader: false,
    hideAside: false,
    hideFooter: false
}

export { Layout }