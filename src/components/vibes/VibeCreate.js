import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import VibeForm from './VibeForm'
import { createVibe } from '../../api/vibes'
import './Vibes.css'
import Palm from '../../images/palm_trees_vertical.jpg'

const VibeCreate = ({ user, msgAlert }) => {
  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [createdId, setCreatedId] = useState(null)
  const [username, setUsername] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await createVibe(img, title, description, user, username)
      setCreatedId(res.data.vibe._id)

      msgAlert({
        heading: 'Vibe Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create vibe',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if vibe has been created,Navigate to the 'show' page
    return <Navigate to={`/vibes/${createdId}`} />
  }
  return (
    <div className='vibe-create'>
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <img className='background-image2' src={Palm} alt='palm tree' />
          <h3 className='title-text'>Add a <span className='vibes-v'>V</span>ibe</h3>
          <VibeForm
            handleSubmit={handleSubmit}
            username={username}
            img={img}
            title={title}
            description={description}
            setUsername={setUsername}
            setImg={setImg}
            setTitle={setTitle}
            setDescription={setDescription}
          />
        </div>
      </div>
    </div>
  )
}

export default VibeCreate
