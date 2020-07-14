import React, {useState} from 'react'
import './style.css'

const Video = ({inputvalue, video = {}}) => {
  if (inputvalue !== undefined) {
    if (inputvalue.length !== 0) {
      if (video.hashtags.find((m) => m.toLowerCase().startsWith(inputvalue.toLowerCase()))) {
        return (
          <li key={video.id} className="videoDiv">
            <img className="videoPic" src={video.pic} alt="img" />
            <span className="overview">
              <h1 className="h1">{video.title}</h1>
              {video.overview}
              <h3> {video.hashtags.join(',')}</h3>
            </span>
            <p className="city">{video.city}</p>
          </li>
        )
      } else {
        return null
      }
    }
    return (
      <li key={video.id} className="videoDiv">
        <img className="videoPic" src={video.pic} alt="img" />
        <span className="overview">
          <h1 className="h1">{video.title}</h1>
          {video.overview}
          <h3> {video.hashtags.join(',')}</h3>
        </span>
        <p className="city">{video.city}</p>
      </li>
    )
  }
}
export default Video
