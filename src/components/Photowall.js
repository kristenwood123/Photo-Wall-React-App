import React from 'react'
import Photo from './Photo'

const Photowall = ({ posts, removePhoto }) => {
  return <div className='photoGrid'>
    {posts.map((post,id) => <Photo 
    className='single-photo' 
    key={id} post={post} 
    removePhoto={removePhoto}
    />)}
  </div>
}

export default Photowall
