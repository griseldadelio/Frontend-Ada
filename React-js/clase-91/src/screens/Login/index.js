import React from 'react'

import './login.css'

import { Main, Layout } from '../../components'

export const Login = () => {

    return (
        <Layout hideHeader hideAside hideNav>
            <Main>
                <form className="row g-3 mt-4">
                    <div className="col-auto">
                        <label for="staticEmail2" className="visually-hidden">User</label>
                        <input type="text" readonly className="form-control-plaintext" id="staticEmail2" />
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div class="col-auto">
                        <a href="#!" className="btn btn-primary mb-3">Confirm</a>
                    </div>
                </form>
            </Main>
        </Layout>
    )
}