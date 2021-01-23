import React from 'react'
import Logo from '../../../assets/img/logo.png'
import './aside.css'
import { HouseDoor, Envelope, Calendar4, ChatLeftTextFill, Shop, ArchiveFill, Rss, JournalText, Folder2 } from 'react-bootstrap-icons'



const Aside = () => {
    return (
        <aside className="aside">
            <div className="logo">
                <img src={Logo} alt="logo" width="120px"></img>
            </div>
            <div>NAVIGATION </div>
            <div className="accordion mt-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <HouseDoor /> &nbsp; Dashboard
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { /*<link href="#!">Analytics</link>*/}
                            { /*<link href="#!">CRM</link>*/}
                            { /*<link href="#!">ECommerce</link>*/}
                            { /*<link href="#!">Projects</link>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>APPS</div>
                <div className="my-4"><Calendar4 />&nbsp; Calendar</div>
                <div className="my-4"><ChatLeftTextFill />&nbsp; Chat</div>
                <div className="my-4"><Shop />&nbsp; Ecommerce</div>
                <div className="my-4"><Envelope />&nbsp; Email</div>
                <div className="my-4"><ArchiveFill />&nbsp; Projects</div>
                <div className="my-4"><Rss />&nbsp; Social Feed</div>
                <div className="my-4"><JournalText />&nbsp; Tasks</div>
                <div className="my-4"><Folder2 />&nbsp; Social Feed</div>
            </div>
            <div>CUSTOM</div>




        </aside >
    )
}

export { Aside }
