import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Products from '../components/Products/Products'

const IndexPage = () => (
  <Layout>
    <SEO title="Death Tech Store" />
    <Products />
  </Layout>
)

export default IndexPage
