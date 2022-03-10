import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexAllVibes } from '../../api/vibes'
// import VibeItem from './VibeItem'
import VibeItemAllUsers from './VibeItemAllUsers'

const VibesAllUsers = ({ user, msgAlert }) => {
  const [vibes, setVibes] = useState(null)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  const fetchVibes = async () => {
    try {
      const res = await indexAllVibes(user)
      setVibes(res.data.vibes)
    } catch (error) {
      msgAlert({
        heading: 'Vibes List failed to load',
        message: error.message,
        variant: 'danger'
      })
    }
  }
  useEffect(() => {
    fetchVibes()
  }, [])

  // If vibes are `null`, we are loading
  if (!vibes) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  // Otherwise, display the vibes
  const vibesList = vibes.reverse().map((vibe) => (
    <VibeItemAllUsers
      fetchVibes={fetchVibes}
      key={vibe._id}
      vibe={vibe}
      user={user}
      msgAlert={msgAlert}></VibeItemAllUsers>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Vibes</h3>
        <ul>{vibesList}</ul>
      </div>
    </div>
  )
}

export default VibesAllUsers
