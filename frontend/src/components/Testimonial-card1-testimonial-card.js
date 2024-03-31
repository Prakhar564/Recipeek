import React from 'react'

import PropTypes from 'prop-types'

import '../index.css'

const TestimonialCard1 = (props) => {
  return (
    <header className="testimonial-card1-testimonial-card">
      <svg viewBox="0 0 1024 1024" className="testimonial-card1-icon">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
      </svg>
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">{props.text}</span>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="testimonial-card1-image"
        />
        <span className="testimonial-card1-text1">{props.text1}</span>
      </div>
    </header>
  )
}

TestimonialCard1.defaultProps = {
  text: "I can't get over how user-friendly and full-featured Recipeek is. From the sleek interface to the handy recipe scaling, it has everything I need for meal prep. But most importantly, the recipes are downright delicious! You can really taste the expertise behind these creations. Recipeek has made me excited about cooking again.",
  imageSrc:
    'https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&ixlib=rb-1.2.1&h=1200',
  imageAlt: 'profile',
  text1: 'Michael',
}

TestimonialCard1.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
}

export default TestimonialCard1
