import React from 'react'
import ContactHero from './comp/hero'
import ContactInfo from './comp/contactinfo'
import ContactForm from './comp/contactform'
import ContactMap from './comp/map'
import ContactCTA from './comp/contactCTA'

const page = () => {
  return (
    <div>
        <ContactHero/>
        <ContactInfo/>
        <ContactForm/>
        <ContactMap/>
        <ContactCTA/>
    </div>
  )
}

export default page