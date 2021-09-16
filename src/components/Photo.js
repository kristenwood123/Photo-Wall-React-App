import React from 'react'

const Photo = ({ post }) => {
  const { id, description, imageLink } = post;
  return (
    <div key={id}>
      <a href={imageLink}>
        <p>{description}</p>
      </a>
    </div>
  )
}

export default Photo
