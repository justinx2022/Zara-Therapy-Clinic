import React from 'react'

function Services() {
  return (
    <div className='container'>
      <h1 className='page-heading'>Our <strong>Services</strong></h1>
      <p><strong>Your life Your Choice!</strong>, Discover simple, expert-backed information designed to help you learn more about your, body, mind and overall well-being, and support you in living a healthier, more balanced life</p>
      <div className='services-grid'>
        {/* Massage Therapy Service Card */}
        <div className='services-card'>
          <h3><strong>Massage Therapy</strong></h3>
          <p>Experience the healing power of touch with our professional massage therapy services. Tailored to your individual needs, our massage therapies help to relieve pain, reduce stress, and improve overall well-being</p>
          <ul className='services-list'>
            <li className='services-list-item'>
              <img src="/Images/Massage/swedishm.jpg" alt="Swedish Massage" loading='lazy' />
              <p>
                <strong>Swedish Massage:</strong> Promotes relaxation, improves circulation, and relieves muscle tension.
              </p>
            </li>
            <li className='services-list-item'>
              <img src="/Images/Massage/deeptissuem.jpg" alt="Deep Tissue Massage" loading='lazy' />
              <p><strong>Deep Tissue Massage:</strong> Targets deeper layers of muscles and connective tissues, ideal for chronic pain and stiffness</p>
            </li>
            <li className='services-list-item'>
              <img src="/Images/Massage/couplesm.jpg" alt="Couples Massage" loading='lazy' />
              <p><strong>Couples Massage:</strong>  A shared massage experience designed to promote relaxation and connection for two people</p>
            </li>
            <li className='services-list-item'>
              <img src="/Images/Massage/sportsm.jpg" alt="Sport Massage" loading='lazy' />
              <p><strong>Sport Massage</strong> Ideal for athletes, focuses on injury prevention and performance enhancement</p>
            </li>
          </ul>
          <button className='learn-more-btn'>Learn More</button>
        </div>

        {/*Spa Pacakages Service Card */}
        <div className="services-card">
          <h3><strong>Spa Packages</strong></h3>
          <p>Indulge in our curated spa packages, designed to provide a holistic wellness experience. From relaxing retreats to revitalizing treatments, our spa packages offer the perfect way to unwind, rejuvenate and refresh your mind.</p>
          <ul className='services-list'>
            <li className='services-list-item'>
              <img src="/Images/Spa Packages/relaxationp.jpg" alt="Relaxation Package" loading='lazy' />
              <p><strong>Relaxation Package:</strong> Ideal for those seeking the ultimate relaxation experience, this package includes a full body massage and aromatherapy session.</p>
            </li>
            <li className='services-list-item'>
              <img src="/Images/Spa Packages/de-stressp.jpg" alt="De-Stress Package" loading='lazy' />
              <p><strong>De-Stress Package</strong> This package is designed to help you de-stress and unwind, with a combination of massage and other relaxation techniques</p>
            </li>
            <li className='services-list-item'>
              <img src="/Images/Spa Packages/rejuvenationp.jpg" alt="Rejuvenation Package" loading='lazy' />
              <p><strong>Rejuvenation Package</strong> Perfect for those looking to rejuvenate their mind and body, this package includes a full body massage and a facial treatment</p>
            </li>
            <li className='services-list-item'>
              <img src="/Images/Spa Packages/couplesp.jpg" alt="Couples Package" loading='lazy' />
              <p><strong>Couples Package</strong> A shared massage experience designed to promote relaxation and connection for two people</p>
            </li>
          </ul>
          <button className='learn-more-btn'>Learn More</button>
        </div>

        {/*Counselling Service Card */}
        <div className="services-card">
          <h3><strong>Counselling</strong></h3>
          <p>Embark on journey of self-discovery and transformation with our exper counsellers. We offer confidential and personalized counselling services to help you navigate life's challenges.</p>
          <ul className='services-list'>
            <li className='services-list-item'>
              <img src="/Images/Counseling/counselingthr.jpg" alt="Individual Counselling" loading='lazy' />
              <p><strong>Individual Counselling:</strong> Provides personalized support for personal growth and challenges.</p>
            </li>
            <li className="services-list-item">
              <img src="/Images/Counseling/couplesthr.jpg" alt="Couple Counselling" loading='lazy' />
              <p><strong>Couple Counselling:</strong> A shared counselling experience designed to promote communication and understanding between two people.</p>
            </li>
            <li className="services-list-item">
              <img src="/Images/Counseling/familythr.jpg" alt="Family Counselling" loading='lazy' />
              <p><strong>Family Counselling:</strong> Supports families in resolving confilicts and building stronger relationships.</p>
            </li>
          </ul>
          <button className="learn-more-btn">Learn More</button>
        </div>

        {/*Rehabilitation Therapy Service Card */}
        <div className="services-card">
          <h3><strong>Rehabilitation Therapy</strong></h3>
          <p>Whether you're recovering from surgery, injury, or managing a chronic condition, our rehabilitation therapy services are designed to help you regain strength, improve mobility, and restore your independenc.</p>
          <ul className='services-list'>
            <li className="service-list-item">
              <img src="/Images/Rehab/psrehab.jpg" alt="Post-Surgical Rehab" loading='lazy' />
              <p><strong>Post-Surgical Rehab</strong> Designed to help patients recover from surgical procedures and regain their strength, mobility and functionality</p>
            </li>
            <li className="services-list-item">
              <img src="/Images/Rehab/srehab.jpg" alt="Speech Therapy" loading='lazy' />
              <p><strong>Speech Therapy</strong> Speech therapy helps individuals with speech and language recover their communication and swallowing abilities</p>
            </li>
            <li className="services-list-item">
              <img src="/Images/Rehab/neurorehab.jpg" alt="Neuro-Rehabiliation" loading='lazy' />
              <p><strong>Neuro-Rehabiliation</strong> Supports individuals with neurological conditions to improve their movement, functionality and quality of life</p>
            </li>
            <li className="services-list-item">
              <img src="/Images/Rehab/functionalrehab.jpg" alt="Functional Independence Training" loading='lazy' />
              <p><strong>Functional Independence Training</strong> Focuses on restoring daily living skills</p>
            </li>
          </ul>
          <button className="learn-more-btn">Learn More</button>
        </div>

      </div>


    </div>
  )
}
export default Services;