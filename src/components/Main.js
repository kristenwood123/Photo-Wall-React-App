import React, { useState } from 'react'
import Photowall from './Photowall.js'
import Title from './Title.js'
import AddPhoto from './AddPhoto.js'
import { Route } from 'react-router-dom'

const Main = () => {

  const [posts, setPosts] = useState([{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }])

 const removePhoto = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    return setPosts(updatedPosts) 
 }

 const addPhoto = (postSubmitted) => {
   const addedPosts = [...posts, postSubmitted]
   console.log(addedPosts);
   return setPosts(addedPosts)
 }

  return (
    <div>
      <Route exact path='/' render={() => (
        <div>
          <Title/>
          <Photowall posts={posts} removePhoto={removePhoto}/>
        </div>
      )} />   
      <Route path='/addPhoto' render={({history}) => (
        <AddPhoto 
          posts={posts}
          onAddPhoto={(addedPost) => {
          addPhoto(addedPost)
          history.push('/')
        }}/>
      )}/>
    </div>

  )
}

export default Main
