import React from 'react'
import Hero from './../inventory/comp/Hero';
import InventoryFilters from './comp/filters';
import InventoryList from './comp/list';
import FeaturedInventory from './comp/featured';
import SpecialOffers from './comp/Specials';
import NewsTips from './comp/news';
import Reviews from './comp/review';
import AboutUs from './comp/whyus';

const page = () => {
  return (
    <div>
        <Hero/>
        <InventoryFilters/>
        <InventoryList/>
        <FeaturedInventory/>
        <SpecialOffers/>
        <NewsTips/>
        <Reviews/>
        <AboutUs/>
    </div>
  )
}

export default page