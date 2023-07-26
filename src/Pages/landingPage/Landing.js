import React from 'react'
import Hero from './Hero/Hero'
import AddressForm from './Contact/AddressForm'
import Team from './Teams/Team'
import Testimonial from './Testimonials/Testimonial'
import Services from './Service/Services'
import Process from './Bording/Process'
import Management from './Management/Management'
import ScreenScroll from './Screenshot/ScreenScroll'
import Slides from './CompanySlides/Slides'
import Features from './Feature/Features'

const Landing = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Slides/>
        <Services/>
        <Features/>
        <Management/>
        <Process/>
        <ScreenScroll/>
        <Testimonial/>
        <Team/>
        <AddressForm/>
    </div>
  )
}

export default Landing