/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Home from './components/vibes/Home'
import Vibes from './components/vibes/Vibes'
import Vibe from './components/vibes/Vibe'
import VibeCreate from './components/vibes/VibeCreate'
import VibeEdit from './components/vibes/VibeEdit'
import FavoriteVibes from './components/vibes/FavoriteVibes'
import VibesAllUsers from './components/vibes/VibesAllUsers'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-out'
            element={
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />

          <Route
            path='/vibes'
            element={<Vibes user={user} msgAlert={msgAlert} />}
          />
          <Route
            path='/vibes/:id'
            element={<Vibe user={user} msgAlert={msgAlert} />}
          />
          <Route
            path='/vibes/create'
            element={<VibeCreate msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/vibes/:id/edit'
            element={<VibeEdit msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/vibes/favorites'
            element={<FavoriteVibes msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/vibes/all'
            element={<VibesAllUsers msgAlert={msgAlert} user={user} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
