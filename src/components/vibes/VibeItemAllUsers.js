import React, { useState } from 'react'
// import { useContext } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateLikes, updateFavorite } from '../../api/vibes'
// import styles from './Vibes.module.css'
import './VibeItem.css'
import Card from '../ui/Card'
// import Comment from './Comment'
// import Like from './Like'
import classes from './VibeItem.module.css'
// import FavoritesContext from '../../store/favorites-context'
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar
} from 'react-icons/ai'

const VibeItemAllUsers = (props) => {
  const [likes, setLikes] = useState(0)
  const [favorited, setFavorited] = useState(false)

  return (
    <Card>
      <div className={classes.item}>
        <p
          // className={props.vibe.liked ? <AiFillHeart /> : <AiOutlineHeart />}
          // key={props.vibe._id}
        >
          <div>{props.vibe.owner.username}</div>
          <div>{props.vibe.title}</div>
          <Link to={`/vibes/${props.vibe._id}`}>
            <div className='vibe-item-img'>
              <img src={props.vibe.img} />
            </div>
          </Link>
          <div
            // type='checkbox'
            // checked={props.vibe.liked}
            onClick={async () => {
              const trigger = likes + 1
              setLikes(trigger)
              try {
                await updateLikes(
                  props.vibe._id,
                  props.vibe.img,
                  props.vibe.title,
                  props.vibe.description,
                  // props.vibe.liked,
                  // props.vibe.comment,
                  trigger,
                  props.user
                  // props.user.username
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
            {props.vibe.likes.length >= 1 ? <AiFillHeart /> : <AiOutlineHeart />}
            {props.vibe.likes.length}
            {/* key={props.vibe._id} */}
          </div>
          <div
            onClick={async () => {
              const trigger = !favorited
              setFavorited(trigger)
              try {
                await updateFavorite(
                  props.vibe._id,
                  props.vibe.img,
                  props.vibe.title,
                  props.vibe.description,
                  // props.vibe.liked,
                  // props.vibe.comment,
                  trigger,
                  props.user
                  // props.user.username
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
            {props.vibe.favorited ? <AiFillStar /> : <AiOutlineStar />}
            {/* key={props.vibe._id} */}
          </div>
          <div>{props.vibe.description}</div>
          {/* <div>{props.vibe.comment}</div> */}
        </p>
        <div>{/* <Comment /> */}</div>
      </div>
    </Card>
  )
}
export default VibeItemAllUsers
