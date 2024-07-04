import React from 'react'
import BreadcrumbComp from '../components/common/BreadcrumbComp'
import CampaignSection from '../components/campaign/CampaignSection'

const Campaign = () => {
  return (
    <div>
      <BreadcrumbComp title="Donation Forms" crumb="Form"/>
      <CampaignSection/>
    </div>
  )
}

export default Campaign