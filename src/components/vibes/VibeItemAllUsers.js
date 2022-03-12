import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { updateLike } from '../../api/vibes'
import './Vibes.css'
import {
  AiOutlineHeart,
  AiFillHeart
} from 'react-icons/ai'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit'

const VibeItemAllUsers = (props) => {
  const [likes, setLikes] = useState(0)

  return (
    <MDBCard className='vibe-card'>
      <div>
        <MDBCardBody>
          <div className='vibe-username'>{props.vibe.owner.username}</div>
          <MDBCardText>{props.vibe.title}</MDBCardText>
          <Link to={`/vibes/${props.vibe._id}`}>
            <div className='vibe-item-img'>
              <MDBCardImage src={props.vibe.img} />
            </div>
          </Link>
          <div className='likes-button'
            onClick={async () => {
              const trigger = likes + 1
              setLikes(trigger)
              try {
                await updateLike(
                  props.vibe._id,
                  props.vibe.img,
                  props.vibe.title,
                  props.vibe.description,
                  trigger,
                  props.user
                )
              } catch (error) {
                props.msgAlert({
                  heading: 'Failed to update vibe',
                  message: error.message,
                  variant: 'danger'
                })
              }
              props.fetchVibes()
            }}>
            {props.vibe.likes.length >= 1
              ? (
                <AiFillHeart className='vibes-heart' />
              )
              : (
                <AiOutlineHeart />
              )}
            <span className='vibes-likes-count'>{props.vibe.likes.length}</span>
          </div>
          <MDBCardText className='vibe-username-description'>
            <span className='vibe-username'>{props.vibe.owner.username}</span>{' '}
            {props.vibe.description}
          </MDBCardText>
        </MDBCardBody>
      </div>
    </MDBCard>
  )
}
export default VibeItemAllUsers
