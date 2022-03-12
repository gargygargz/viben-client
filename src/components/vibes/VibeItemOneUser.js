import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { updateLike, updateFavorite } from '../../api/vibes'
import './Vibes.css'
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit'

const VibeItemOneUser = (props) => {
  const [likes, setLikes] = useState(0)
  const [favorited, setFavorited] = useState(false)

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
          <div>
            <div className='likes-favorites-buttons'
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
              <span className='vibes-likes-count'>
                {props.vibe.likes.length}
              </span>
            </div>
            <div className='likes-favorites-buttons'
              onClick={async () => {
                const trigger = !favorited
                setFavorited(trigger)
                try {
                  await updateFavorite(
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
              {props.vibe.favorited === true
                ? (
                  <AiFillStar className='vibes-star' />
                )
                : (
                  <AiOutlineStar />
                )}
            </div>
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
export default VibeItemOneUser
