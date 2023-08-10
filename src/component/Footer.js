import React from 'react'
import icon from './../images/icon.png'
import './Footer.css'
import { BsFacebook} from 'react-icons/bs'
import { BsTwitter} from 'react-icons/bs'
import { BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
       
        <div className='brand'>
            <img src={icon} className="icon-img" />
            <h2>Movie <br/> recommend</h2>
        </div>
        <div className='social'>
          <BsFacebook/>
          <BsTwitter/>
          <BsInstagram/>
        </div>
    </div>
  )
}

export default Footer