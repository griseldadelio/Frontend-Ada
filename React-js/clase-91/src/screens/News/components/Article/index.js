import React from 'react'
import { Comments } from './comments'
import './article.css'

export const Article = () => {
    return (
        <article>
            <h1>
                Haciendo un articulo de noticias
            </h1>
            <div className='date'> 07/12/2020 <br></br>
            Author: De Lio Griselda
            </div>
            <div className='container'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div>
                <Comments />
            </div>

        </article >
    )
}



