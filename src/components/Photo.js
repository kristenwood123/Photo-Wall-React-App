import React from 'react'

const Photo = ({ post, removePhoto }) => {
  const { id, description, imageLink } = post;

  return (
    <figure className='figure'>
      <img src={imageLink} alt={description}/>
        <figcaption>{description}</figcaption>
        <div className="button-container">
          <button className="remove-button" onClick={() => removePhoto(id)}>Remove</button>
        </div>
    </figure>
  )
}

export default Photo
