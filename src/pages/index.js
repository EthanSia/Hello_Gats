
//import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';


const IndexPage = () => {

  const [file, setFile] = useState({});

  const changeHandler = (event) => {
	
    const {name, value} = event.target
    if (name === 'file' ){
      return setFile(value)
    }
	};

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmission = (event) => {
		event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ..." "}),
  })
    .then(() => navigate("/thank-you/"))
    .catch((error) => alert(error));
	};

  const navigation = useNavigation();


  return (
    <div>
      <p>I'm making the upload file or link.</p>
     
      <form
       name="contact"
       method="post"
       data-netlify="true"
       data-netlify-honeypot="bot-field"
       onSubmit={handleSubmission}
      >
        <div>
          <input name="file" placeholder='Link' type="file" onChange={changeHandler}></input>
          <button onClick={()=> navigation.navigate({handleSubmission})}>Upload</button>
        </div>
      
        
      </form>
    </div>
  )
}

export default IndexPage