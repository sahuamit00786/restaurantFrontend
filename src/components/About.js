import React,{useState} from 'react'
import AboutBackground from '../resto/about-background.png';
import AboutBackgroundImage from '../resto/about-background-image.png';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Video from '../resto/food.mp4'


const About = () => {

    const[useModal,setModal] = useState(false);
    

  return (
    <div id='about' className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img className='AboutImage' src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is an important source of Balance Diet.
            </h1>
            <p className='primary-text'>
            Take a deep breath and inhale the aroma of your dish. Then, take a bite and savor the flavors and textures. 
            </p>
            <p className='primary-text'>
            Recognize that you took the time and energy to create something delicious.
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button onClick={()=>setModal(true)}  className='watch-video-button'>
                    <PlayCircleFilledIcon/> Watch Video
                </button>

                {useModal &&(

                <div className="video-container">
                    <span onClick={()=>setModal(false)} className='close'>✘</span>
                    <video autoPlay src={Video} controls></video>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default About