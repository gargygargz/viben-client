import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Background from '../../images/palm_leaves.jpg'

const SignUp = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignUp = async (event) => {
    event.preventDefault()

    try {
      await signUp(email, username, password, passwordConfirmation)
      const res = await signIn(email, password)
      setUser(res.data.user)
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setUsername('')
      setPassword('')
      setPasswordConfirmation('')
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <img className='background-image' src={Background} />
        <h3 className='auth-text-1'>Sign Up</h3>
        <Form onSubmit={onSignUp}>
          <Form.Group controlId='email'>
            <Form.Label className='auth-text-2'>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={event => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='username'>
            <Form.Label className='auth-text-2'>Username</Form.Label>
            <Form.Control
              required
              type='username'
              name='username'
              value={username}
              placeholder='Create username'
              onChange={event => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label className='auth-text-2'>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={event => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='passwordConfirmation'>
            <Form.Label className='auth-text-2'>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={event => setPasswordConfirmation(event.target.value)}
            />
          </Form.Group>
          <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
