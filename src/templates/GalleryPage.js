import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const GalleryPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    

    <section className="section">
      <div className="container">
        <h2>Notre galerie</h2>
        <Gallery images={gallery} />
      </div>
    </section>
  </main>
)

const GalleryPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <GalleryPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
  }
`
