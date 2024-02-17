import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarRate';
import profileimage from '../resto/john-doe-image.png';

const Testimonial = () => {
  return (
    <div id='testimonial' className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique modi molestiae culpa veniam odio optio voluptatem? Iste, illo asperiores?
            </p>
        </div>

        <div className="testimonial-section-bottom">
            <img src={profileimage} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde ad eius natus vero modi odit incidunt debitis quam excepturi dolore similique distinctio corrupti sint praesentium recusandae laboriosam fugit dolorum.</p>
            <div className="testimonials-stars-container">
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <StarOutlineIcon/>
            <StarOutlineIcon/>
        </div>
            <h2>John Doe.</h2>
        </div>

        

    </div>
  )
}

export default Testimonial