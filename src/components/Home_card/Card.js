import React from 'react'

const Card = ({img,title,content}) => {
  return (
    <div className='card-component d-flex flex-column justify-content-around p-4 '>
        <div className="card-img d-flex justify-content-center align-items-center">
            <img src={img} alt={title} />
        </div>
        <div className="card-component-body">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>

    </div>
  )
}

export default Card