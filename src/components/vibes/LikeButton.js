import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { updateVibe } from '../../api/vibes'

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false)

  return (
    <div
      // type='checkbox'
      // checked={props.vibe.liked}
      onClick={async () => {
        const trigger = !liked
        setLiked(trigger)
        try {
          await updateVibe(
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
      {props.vibe.liked ? <AiFillHeart /> : <AiOutlineHeart />}
      {/* key={props.vibe._id} */}
    </div>
  )
}

export default LikeButton
