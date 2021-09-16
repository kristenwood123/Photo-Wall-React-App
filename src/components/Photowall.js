import React from 'react'
import Photo from './Photo'

const Photowall = ({ posts }) => {
  return (
    <div>
      {posts.map(post => <Photo post={post}/> )}
    </div>
  )
}

export default Photowall
