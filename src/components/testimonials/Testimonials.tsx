import React from 'react'
import { dataTestimonials } from '../../utils/api';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'

export const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        { 
        dataTestimonials.map(({id, avatar, name, review}) =>{
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}
