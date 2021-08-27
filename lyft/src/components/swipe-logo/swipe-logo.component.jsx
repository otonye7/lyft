import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { SwipeContainer } from './swipe-logo.styles';
import Slack from '../../assets/slack-animation.gif';
import Airbnb from '../../assets/airbnb.jpg';
import Delta from '../../assets/deltas.jpg';
import SalesForce from '../../assets/Salesforce-logo.png';
import Usc from '../../assets/usc.jpg';



const SwipeComponent = () => {
    return (
        <SwipeContainer>
            <div className='container'>
               <Swiper
                 breakpoints={{
                    767: {
                     width: 768,
                    slidesPerView: 6
                  },

                  768: {
                    width: 768,
                    slidesPerView: 6,
                  },

               }}
               width="480"
               spaceBetween={5}
               slidesPerView={2}
              
               //  spaceBetween={50}
               // slidesPerView={6}
               // Pagination={{clickable: true}}
               // onSlideChange={() => console.log('slide change')}
               // onSwiper={(swiper) => console.log(swiper)}
                >
               <SwiperSlide>
                   <div className='image-container'>
                          <img src={Slack} alt=""/>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                     <div className='image-container'>
                          <img src={Airbnb} alt=""/>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='image-container'>
                          <img src={Delta} alt=""/>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                   <div className='image-container'>
                          <img src={Slack} alt=""/>
                    </div>
               </SwiperSlide>
                <SwiperSlide>
                     <div className='image-container'>
                          <img src={Airbnb} alt=""/>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='image-container'>
                          <img src={Delta} alt=""/>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='image-container'>
                          <img src={SalesForce} alt=""/>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='image-container'>
                          <img src={Airbnb} alt=""/>
                    </div>
               </SwiperSlide>
              </Swiper>
           </div>
        </SwipeContainer> 
    )
}

export default SwipeComponent;