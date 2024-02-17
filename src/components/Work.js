import React from 'react'
import pickMeal from '../resto/pick-meals-image.png'
import delivery from '../resto/delivery-image.png'

const Work = () => {

    const workInfoData = [
        {
            image:pickMeal,
            title:"Pick Meals",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, natus. Ratione consequatur doloremque omnis in at vel nesciunt iusto magni!"
        },
        {
            image:delivery,
            title:"Delivery",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, natus. Ratione consequatur doloremque omnis in at vel nesciunt iusto magni!"
        },
        {
            image:pickMeal,
            title:"Pick Meals",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, natus. Ratione consequatur doloremque omnis in at vel nesciunt iusto magni!"
        }
    ]

  return (
    <div id='job' className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-heading">Work</p>
            <h1 className="primary-subheading">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quam eveniet accusamus! Assumenda, cumque quo earum voluptate quos ducimus consequuntur.
            </p>
        </div>
        <div className="work-section-bottom">
            {
              workInfoData.map((data)=>(
                  <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                  </div>
               ))
            }
        </div>
    </div>
  )
}

export default Work