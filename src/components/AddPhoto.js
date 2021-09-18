import React from 'react'

const AddPhoto = ({ onAddPhoto }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const post = {
      id: 0,
      description: description,
      imageLink: imageLink
    }
    if(imageLink && description) {
      onAddPhoto(post)
    }
  }
  return (
    <div>
      <h1>Photowall</h1>
      <div className='form'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Link' name='link'/>
        <input type="text" placeholder='Description' name='description'/>
        <button>Posts</button>
      </form>
    </div>
    </div>
  )
}

export default AddPhoto
