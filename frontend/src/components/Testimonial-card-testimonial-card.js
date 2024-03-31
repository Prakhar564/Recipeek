import React from 'react'

import PropTypes from 'prop-types'

import '../index.css'

const TestimonialCard = (props) => {
  return (
    <header className="testimonial-card-testimonial-card">
      <svg viewBox="0 0 1024 1024" className="testimonial-card-icon">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
      </svg>
      <div className="testimonial-card-testimonial">
        <span className="testimonial-card-text">{props.text}</span>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="testimonial-card-image"
        />
        <span className="testimonial-card-text1">{props.text1}</span>
      </div>
    </header>
  )
}

TestimonialCard.defaultProps = {
  text: "As someone who's tried many recipe apps and meal planners, Recipeek is hands down the best. The diverse recipe database, nutrition tracking, and ability to customize collections make it so easy to stick to my dietary lifestyle. I've discovered so many amazing new dishes I would have never found otherwise!",
  imageSrc:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&ixlib=rb-1.2.1&h=1200',
  imageAlt: 'profile',
  text1: 'John Doe',
}

TestimonialCard.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
}

export default TestimonialCard
