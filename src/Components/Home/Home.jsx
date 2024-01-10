import React from 'react'
import Slider from './Slider'
import GalleryVertical from './GalleryVertical'
import Hero2 from './Hero2'
import Hero1 from './Hero1'
import NewsletterBox from './NewsletterBox'

const Home = () => {
  return (
    <div className='p-10'>
      <Hero1 />
      <Hero2 />
      <NewsletterBox />
    </div>
  )
}

export default Home
