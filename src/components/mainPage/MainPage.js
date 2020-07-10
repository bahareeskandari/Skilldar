import React, {useState, useEffect} from 'react'
import Pagination from 'pagination-react-hooks'
import {fakeData} from '../mockData'
import Select from '../select/Select'
import SearchBar from '../searchbar/SearchBar'
import Video from '../videos/Video'
//import icons
import { Camera, Instagram, Search } from 'react-feather';

const MainPage = () => {
  const [posts, setPosts] = useState([])
  const [inputValue, setInputValue] = useState('')
  const categories = ['All', 'Stockholm', 'Berlin', 'New York']
  const [cityName, setCityName] = useState('All')

  const handleOption = (event) => {
    setCityName(event)
  }
  const handleInput = (event) => {
    setInputValue(event)
  }

  useEffect(() => {
    const response = fakeData.data.map((video) => video)
    cityName === 'All'
      ? setPosts(response)
      : setPosts(response.filter((video) => video.city === cityName))
  }, [cityName])

  const show = (video) => <Video video={video} inputvalue={inputValue} />

  return (
    <div className="mainpage">
      <SearchBar value={inputValue} onChange={handleInput} />

      <Select handleOption={handleOption} categories={categories} />
      <Pagination
        data={posts}
        Show={show}
        displayNumber="13"
        previousText="Previous"
        nextText="Next"
      />
    </div>
  )
}
export default MainPage
