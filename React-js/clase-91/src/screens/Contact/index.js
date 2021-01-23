import React from 'react'

export const Contact = () => {

    return (
        <>
            <form>
                <div>
                    <label>Name and Lastname
                    <input id="name" type="text" />
                    </label>
                </div>
                <div>
                    <label>Email
                    <input id="email" type="email" />
                    </label>
                </div>
                <div>
                    <label>Address
                    <textarea id="address"></textarea>
                    </label>
                </div>

                <label>Subject
                    <input id="subject" type="text" />
                </label>
            </form>
        </>
    )
}