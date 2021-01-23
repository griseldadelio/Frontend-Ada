import React from 'react'

const Product = ({ title, image, price, description }) => {
    return (
        <div className="card m-3">
            <img src={image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description} </p>
                <div>{price} </div>
            </div>
        </div>
    )
}
export { Product }