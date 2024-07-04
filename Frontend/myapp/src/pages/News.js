import React from 'react'
import BreadcrumbComp from '../components/common/BreadcrumbComp'
import BlogComp from '../components/news/BlogComp'

const News = () => {
  return (
    <div>
      <BreadcrumbComp title="Blog" crumb="Blog"/>
      <BlogComp/>
    </div>
  )
}

export default News