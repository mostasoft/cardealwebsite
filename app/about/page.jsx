import React from 'react'
import AboutHero from './comp/hero'
import OurStory from './comp/who'
import WhyChooseUs from './comp/whyus'
import Achievements from './comp/achievement'
import Partners from './comp/partners'
import AboutCTA from './comp/CTA'

const page = () => {
  return (
    <div>
        <AboutHero/>
        <OurStory/>
        <WhyChooseUs/>
        <Achievements/>
        <Partners/>
        <AboutCTA/>
    </div>
  )
}

export default page