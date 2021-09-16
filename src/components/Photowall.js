import React from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Photowall = ({ posts, removePhoto }) => {
  return (
    <div>
      <Link className='addIcon' to='/AddPhoto'/>
      <div className='photoGrid'>
        {posts.map((post,id) => <Photo 
        className='single-photo' 
        key={id} post={post} 
        removePhoto={removePhoto}
        />)}
      </div>
    </div>
  )
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  removePhoto: PropTypes.func.isRequired
}

export default Photowall
