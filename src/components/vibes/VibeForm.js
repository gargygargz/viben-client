import React from 'react'
import { Form, Button } from 'react-bootstrap'

const VibeForm = ({
  handleSubmit,
  img,
  title,
  description,
  setImg,
  setTitle,
  setDescription
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='image'>
      <Form.Label>Image</Form.Label>
      <Form.Control
        // id='fileInput'
        placeholder='Enter image source URL'
        type='text'
        // accept="image/png, image/jpeg, image/jpg"
        // method='POST'
        // enctype="multipart/form-data"
        name='image'
        value={img}
        // src="data:image/png;base64"
        onChange={(event) => setImg(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='A Mexico vibe'
        name='title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='description'>
      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder='e.g. This place was dope dope dope'
        name='description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
    </Form.Group>
    <Button className='mt-2' variant='primary' type='submit'>Submit
    </Button>
  </Form>
)

export default VibeForm
