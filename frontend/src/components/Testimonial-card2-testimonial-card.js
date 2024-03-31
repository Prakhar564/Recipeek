import React from 'react'

import PropTypes from 'prop-types'

import '../index.css'

const TestimonialCard2 = (props) => {
  return (
    <header className="testimonial-card2-testimonial-card">
      <svg viewBox="0 0 1024 1024" className="testimonial-card2-icon">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
      </svg>
      <div className="testimonial-card2-testimonial">
        <span className="testimonial-card2-text">{props.text}</span>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="testimonial-card2-image"
        />
        <span className="testimonial-card2-text1">{props.text1}</span>
      </div>
    </header>
  )
}

TestimonialCard2.defaultProps = {
  text: "Recipeek has been a game-changer for my family! We used to struggle to plan healthy, home-cooked meals with our busy schedules. But the meal planner and grocery list features have streamlined everything. We're eating better than ever, and I don't have to spend hours researching recipes!",
  imageSrc:
    'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&ixlib=rb-1.2.1&h=1200',
  imageAlt: 'profile',
  text1: 'Shaun',
}

TestimonialCard2.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
}

export default TestimonialCard2
