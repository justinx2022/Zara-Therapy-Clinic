// Import React and images
import React from 'react'
import './testimonials.css'
import testimonials1 from '../../assets/testimonials1.jpg'
import testimonials2 from '../../assets/testimonials2.jpg'
import testimonials3 from '../../assets/testimonials3.jpg'
import testimonials4 from '../../assets/testimonials4.jpg'
import promoVideo from '../../assets/videos/testimonial.mp4'

// Client reviews data
const reviews = [
  {
    img: testimonials1,
    name: 'James K.',
    service: 'Massage Therapy',
    text: 'After months of back pain I finally found real relief at Zara. The therapists actually took time to understand what I was dealing with — not just a generic session.'
  },
  {
    img: testimonials2,
    name: 'Robert N.',
    service: 'Mental Therapy',
    text: 'Three months of sessions here and I honestly feel like a different person. Calm, consistent environment. The counsellor never rushed me.'
  },
  {
    img: testimonials3,
    name: 'Sarah M.',
    service: 'Beauty Therapy',
    text: 'My skin has been an issue for years. Grace actually sat down and asked questions before doing anything. Results after just two facials were visible.'
  },
  {
    img: testimonials4,
    name: 'David O.',
    service: 'Physical Therapy',
    text: 'Sports injury kept me off the field for 6 weeks. The physical therapy program here had me back much sooner than expected. Very professional.'
  }
]

function Testimonials() {
  return (
    <div className='testimonials'>

      {/* Review cards grid */}
      <div className='testimonials-grid'>
        {reviews.map(function (review, index) {
          return (
            <div className='review-card' key={index}>
              <div className='review-header'>
                <img src={review.img} alt={review.name} className='client-img' />
                <div>
                  <h4>{review.name}</h4>
                  <p className='service-tag'>{review.service}</p>
                </div>
              </div>

              <div className='stars'>★★★★★</div>
              <p className='review-text'>"{review.text}"</p>
            </div>
          )
        })}
      </div>

      {/* Video testimonial section */}
      <div className='video-testimonial'>
        <h3>A Look at What We Do</h3>
        <div className='video-container'>
          <video
            width="100%"
            height="400"
            src={promoVideo}
            controls
            muted
            style={{ borderRadius: '10px', objectFit: 'cover' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className='video-caption'>A look at what goes into a professional massage therapy session</p>
      </div>
    </div>
  )
}

export default Testimonials
