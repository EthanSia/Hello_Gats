import * as React from 'react'
//import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import React, {useState} from 'react';

const IndexPage = () => {

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
	};


  return (
    <Layout pageTitle="Home Page">
      <p>I'm making the upload file or link.</p>
     
      <form
       name="contact"
       method="post"
       data-netlify="true"
       data-netlify-honeypot="bot-field"
      >
        <input name="file" placeholder='Link' type="file" onChange={changeHandler}></input>
        <button onClick={handleSubmission}>Upload</button>

      </form>
    </Layout>
  )
}

export default IndexPage