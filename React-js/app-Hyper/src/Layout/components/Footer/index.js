import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <hr className="m-0" />
            <footer className="p-4 bg-light">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-md-6 color-footer'>
                            <script>document.write(new Date().getFullYear())</script>
                        2021 © Hyper - Coderthemes.com
                        </div>
                        <div className='col-md-6 text-end'>
                            { /* <a className="m-2" href="">About</a>*/}
                            { /*  <a className="m-2" href="">Support</a>*/}
                            { /*  <a className="m-2" href="">Contact Us</a>*/}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer }
