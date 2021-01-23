import React from 'react'
import './main.css'
//import { News, Services, Contact } from '../screens'

export const Main = ({ children }) => {
    return (

        <main>
            {children}
            {/* { <News />
            <Services />
            <Contact />} */}
        </main>
    )
}