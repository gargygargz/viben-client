import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexVibes = (user) => {
  return axios.get(apiUrl + '/vibes/', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const indexAllVibes = (user) => {
  return axios.get(apiUrl + '/vibes/all', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const indexFavoriteVibes = (user) => {
  return axios.get(apiUrl + '/vibes/favorites', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showVibe = (id, user) => {
  return axios.get(`${apiUrl}/vibes/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteVibe = (id, user) => {
  return axios.delete(`${apiUrl}/vibes/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateVibe = (id, img, title, description, user) => {
  return axios.patch(
    `${apiUrl}/vibes/${id}`,
    { vibe: { img, title, description } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// export const updateLikes2 = (id, user) => {
//   return axios.patch(
//     `${apiUrl}/vibes/likes/${id}`,
//     { likes: { owner: user._id } },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     }
//   )
// }

export const updateLike = (id, img, title, description, likes, user) => {
  return axios.patch(
    `${apiUrl}/vibes/likes/${id}`,
    { vibe: { img, title, description, likes } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const updateFavorite = (id, img, title, description, favorited, user) => {
  return axios.patch(
    `${apiUrl}/vibes/favorited/${id}`,
    { vibe: { img, title, description, favorited } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const createVibe = (img, title, description, user) => {
  return axios.post(
    `${apiUrl}/vibes`,
    { vibe: { img, title, description } },
    // { body: JSON.stringify(img) },
    {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
