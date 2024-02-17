import React from 'react'
import Navbar from './Navbar'
import BannerImage from '../resto/home-banner-image.png'
import BannerBackground from '../resto/home-banner-background.png'
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className='home-container' id='home'> 
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className='primary-heading'>
                    Your favourite food delivered hot and fresh
                </h1>
                <p className='primary-text'>
                    Healthy switcher chefs do all the prep work, like peeding,
                    chopping
                    & marinating, so you can cook a fresh food.
                </p>
                <button className='secondary-button'> Order Now <FiArrowRight/> </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home