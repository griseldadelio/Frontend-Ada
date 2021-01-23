import React from 'react'

import { Main, Layout, Product } from '../../components'
import shopProducts from './data'

export const Shop = () => {

    return (
        <Layout>
            <Main>
                <div className="row">
                    {
                        shopProducts.map((item) => {
                            return <div className="col-md-4" key={item.id}>
                                <Product
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                />
                            </div>
                        })
                    }
                </div>
            </Main>
        </Layout>
    )
}