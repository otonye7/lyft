import SwipeCore, {Navigation, Pagination, Ally} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { ThirdContainer } from './third.styles';
import Passport from '../../assets/mary_driver.webp';
import Harold from '../../assets/harold_driver.webp';
import Chris from '../../assets/christine_driver.webp';
import Timothy from '../../assets/timothy_driver.webp';

SwipeCore.use([Pagination])

const ThirdComponent = () => {
    return (
        <ThirdContainer>
            <div className='container'>
               <Swiper
                breakpoints={{
                    767: {
                     width: 768,
                    slidesPerView: 2
                  },

                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },

               }}
               width="480"
               spaceBetween={5}
               slidesPerView={1}
                >
               <SwiperSlide>
                  <div className='first-container'>
                     <div className='image-container'>
                          <img src={Passport} alt=""/>
                     </div>
                     <br />
                     <p className='p-text'>
                        “My motto is very simple. It doesn't cost
                        you a penny to be nice and kind, but it
                        will cost you everything if you're not. If
                        I'm free and somebody needs my help,
                        I'll be the first one to jump in, in a
                        heartbeat.”
                     </p>
                     <div>
                         <p className='para-text'> 
                             — Mary
                             <br />
                             Driving with Lyft since 2019
                         </p>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                   <div className='first-container'>
                     <div className='image-container'>
                          <img src={Harold} alt=""/>
                     </div>
                      <br />
                     <p className='a-text'>
                       “As a student, it’s hard to complete my class work around a schedule. I started driving more with Lyft and realized it was the perfect opportunity to make money and work on my own time! Driving with Lyft gives me freedom in my schedule to focus on school, which is my main priority.”
                     </p>
                     <div>
                         <p className='para-text'> 
                             —  Harold
                             <br />
                             Driving with Lyft since 2020
                         </p>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='first-container'>
                     <div className='image-container'>
                          <img src={Chris} alt=""/>
                     </div>
                     <br />
                     <p className='p-text'>
                      “I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet.”
                     </p>
                     <div>
                         <p className='para-text'> 
                             — Christine
                             <br />
                             Driving with Lyft since 2016
                         </p>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='first-container'>
                     <div className='image-container'>
                          <img src={Timothy} alt=""/>
                     </div>
                      <br />
                     <p className='p-text'>
                      “Driving with Lyft is the perfect way to make money and be there for my family’s needs. I love providing a way to get my passengers from point A to B. Independence is key for me, and I enjoy meeting new people while driving!”
                     </p>
                     <div>
                         <p className='para-text'> 
                             — Timothy
                             <br />
                             Driving with Lyft since 2017
                         </p>
                     </div>
                  </div>
               </SwiperSlide>
               
              </Swiper>
           </div>
        </ThirdContainer> 
    )
}

export default ThirdComponent;