// import SwipeCore, {Navigation, Pagination, Ally} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
import { SwipeContainer } from './swipe-logo.styles';
import Slack from '../../assets/slack-animation.gif';
import Airbnb from '../../assets/airbnb.jpg';
import Delta from '../../assets/deltas.jpg';
// import Timothy from '../../assets/timothy_driver.webp';


const SwipeComponent = () => {
    return (
        <SwipeContainer>
            <div className='container'>
               <Swiper
                 spaceBetween={50}
                 slidesPerView={6}
                 Pagination={{clickable: true}}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
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
              </Swiper>
           </div>
        </SwipeContainer> 
    )
}

export default SwipeComponent;