import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/clifford.jpg"
      />
      <form
       name="contact"
       method="post"
       data-netlify="true"
       data-netlify-honeypot="bot-field"
      >
        <input name="link" placeholder='Link' type="text"/>
        <button>Upload</button>

      </form>
    </Layout>
  )
}

export default IndexPage