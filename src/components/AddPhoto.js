import React from 'react'

const AddPhoto = () => {
  return (
    <div>
      <h1>Photowall</h1>
      <div className='form'>
      <form>
        <input type="text" placeholder='Link'/>
        <input type="text" placeholder='Description'/>
        <button>Posts</button>
      </form>
    </div>
    </div>
  )
}

export default AddPhoto
