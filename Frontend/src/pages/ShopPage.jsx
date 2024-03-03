import React from 'react'
import Categories from '../components/Category/Categories'
import Products from '../components/Products/Products'
import CampaignSingle from '../components/Campaigns/CampaignSingle'

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories/>
      <Products/>
      <CampaignSingle/>
      <Products/>
    </React.Fragment>
  )
}

export default ShopPage