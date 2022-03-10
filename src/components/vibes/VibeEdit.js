import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import VibeForm from './VibeForm'
import { showVibe, updateVibe } from '../../api/vibes'

const VibeEdit = ({ user, msgAlert }) => {
  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [liked, setLiked] = useState(false)
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showVibe(id, user)
        setImg(res.data.vibe.img)
        setTitle(res.data.vibe.title)
        setDescription(res.data.vibe.description)
        // setLiked(res.data.vibe.liked)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load vibe',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await updateVibe(id, img, title, description, user)
      setUpdated(true)
      msgAlert({
        heading: 'Vibe Updated',
        message: `Updated ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to update vibe',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/vibes/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Vibe</h3>
        <VibeForm
          handleSubmit={handleSubmit}
          img={img}
          title={title}
          description={description}
          setImg={setImg}
          setTitle={setTitle}
          setDescription={setDescription}
        />
      </div>
    </div>
  )
}

export default VibeEdit
