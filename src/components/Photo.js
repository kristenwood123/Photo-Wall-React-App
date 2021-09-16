import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({ post, removePhoto }) => {
  const { id, description, imageLink } = post;

  return (
    <figure className='figure'>
      <img className='photo' src={imageLink} alt={description}/>
        <figcaption>{description}</figcaption>
        <div className="button-container">
          <button className="remove-button" onClick={() => removePhoto(id)}>Remove</button>
        </div>
    </figure>
  )
}

export default Photo

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  removePhoto: PropTypes.func.isRequired
}