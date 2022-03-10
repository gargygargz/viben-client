import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'
// import Comment from './Comment'
import Card from '../ui/Card'
// import classes from './VibeItem.module.css'
import './VibeItem.css'
// import Like from './Like'

import { deleteVibe, showVibe } from '../../api/vibes'

const Vibe = ({ user, msgAlert }) => {
  const [vibe, setVibe] = useState(null)
  const [deleted, setDeleted] = useState(false)
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
        setVibe(res.data.vibe)
      } catch (error) {
        msgAlert({
          heading: 'Vibe failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteVibe(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete vibe',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If vibe is `null`, we are loading
  if (!vibe) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/vibes' />
  } else {
    // We have a vibe, display it!
    return (
      <Card>
        <div>
          <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
              <div>{vibe.owner.username}</div>
              <h3>{vibe.title}</h3>
              <div className='vibe-item-img'><img src={vibe.img} /></div>
              <div>{vibe.description}</div>
              {/* <div><Like /> {vibe.liked}</div> */}
              {/* <p>{vibe.comment}</p>
          <div><Comment /></div> */}
              <Link to={`/vibes/${id}/edit`}>
                <Button className='button-update' variant='primary' type='submit'>Update Vibe
                </Button>
              </Link>
              <Button className='button-delete' variant='danger' onClick={handleDeleteClick}>Delete Vibe
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default Vibe
