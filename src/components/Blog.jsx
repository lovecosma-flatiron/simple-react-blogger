import React from 'react'

function Blog({title, content}) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Blog
