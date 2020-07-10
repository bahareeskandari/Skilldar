import React, {useState} from 'react'

const Video = ({ inputvalue, video = {}}) => {

  if (inputvalue !== undefined) {
    if (inputvalue.length !== 0) {
      if (video.hashtags.find(m => m.toLowerCase().startsWith(inputvalue.toLowerCase()))) {
        return (
          <li key={video.id}>
            <span>{video.title}</span>

          </li>
        )
      } else {
        return null
      }
    }
    return (
      <li key={video.id}>
      <span>{video.title}</span>

    </li>
    )
  }
}
export default Video

/**

import React, {useState} from 'react'

const Video = ({inputvalue, video = {}}) => {
  if (inputvalue !== undefined) {
    if (inputvalue.length !== 0) {
      video.hashtags.map((z) => {
        if (z.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          return (
            <li key={video.id}>
              <span>{video.title}</span>
            </li>
          )
        } else {
          return null
        }
      })
    }
    return (
      <li key={video.id}>
        <span>{video.title}</span>
        {video.hashtags.map((x) => (
          <p>{x}</p>
        ))}
      </li>
    )
  }
}
export default Video


 */

/*

const Video = ({ inputvalue, video = {}}) => {

  if (inputvalue !== undefined) {
    if (inputvalue.length !== 0) {
      if (video.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
        return (
          <li key={video.id}>
            <span>{video.title}</span>

          </li>
        )
      } else {
        return null
      }
    }
    return (
      <li key={video.id}>
      <span>{video.title}</span>

    </li>
    )
  }
}
export default Video

 */
