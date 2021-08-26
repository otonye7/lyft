import {FourthSubContainer } from './fourth-sub.styles';
import SwipeCore, {Navigation, Pagination, Ally} from 'swiper';
import Phone from '../../assets/Car1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import LanguageIcon from '@material-ui/icons/Language';
import Card from '@material-ui/core/Card';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const FourthSub = () => {
    return (
        <FourthSubContainer>
           <div className='sub-container'>
               <div className='sub'>
                  <h2 className='sub-text'>Ride. Bike. Scoot. Go bananas.</h2>
                  <p className='para'>We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.</p>
               </div>
               <br />
               <br />
               <Swiper
                 spaceBetween={10}
                 slidesPerView={4}
                 Pagination={{clickable: true}}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                >
               <SwiperSlide>
                  <div className='first-container'>
                        <Card className='card'>
                            <span className='rental-text'>Rentals</span>
                            <div className='image-cont'>
                               <img src={Phone} alt=""/> 
                            </div>
                            <div className='icons'>
                                <div className='seem'>
                                   <VpnKeyIcon />
                                   <p className='seem-text'>seemless</p>
                                </div>
                                 <div className='seem'>
                                   <LanguageIcon />
                                   <p className='seem-text'>Independence</p>
                                </div>
                            </div>
                        </Card> 
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                   <div className='first-container'>
                       <Card className='card'>
                            <span className='rental-text'>Rentals</span>
                            <div className='image-cont'>
                               <img src={Phone} alt=""/> 
                            </div>
                            <div className='icons'>
                                <div className='seem'>
                                   <VpnKeyIcon />
                                   <p className='seem-text'>seemless</p>
                                </div>
                                 <div className='seem'>
                                   <LanguageIcon />
                                   <p className='seem-text'>Independence</p>
                                </div>
                            </div>
                        </Card> 
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='first-container'>
                       <Card className='card'>
                            <span className='rental-text'>Rentals</span>
                            <div className='image-cont'>
                               <img src={Phone} alt=""/> 
                            </div>
                            <div className='icons'>
                                <div className='seem'>
                                   <VpnKeyIcon />
                                   <p className='seem-text'>seemless</p>
                                </div>
                                 <div className='seem'>
                                   <LanguageIcon />
                                   <p className='seem-text'>Independence</p>
                                </div>
                            </div>
                        </Card> 
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='first-container'>
                      <Card className='card'>
                            <span className='rental-text'>Rentals</span>
                            <div className='image-cont'>
                               <img src={Phone} alt=""/> 
                            </div>
                            <div className='icons'>
                                <div className='seem'>
                                   <VpnKeyIcon />
                                   <p className='seem-text'>seemless</p>
                                </div>
                                 <div className='seem'>
                                   <LanguageIcon />
                                   <p className='seem-text'>Independence</p>
                                </div>
                            </div>
                        </Card> 
                  </div>
               </SwiperSlide>
                <SwiperSlide>
                  <div className='first-container'>
                       <Card className='card'>
                            <span className='rental-text'>Rentals</span>
                            <div className='image-cont'>
                               <img src={Phone} alt=""/> 
                            </div>
                            <div className='icons'>
                                <div className='seem'>
                                   <VpnKeyIcon />
                                   <p className='seem-text'>seemless</p>
                                </div>
                                 <div className='seem'>
                                   <LanguageIcon />
                                   <p className='seem-text'>Independence</p>
                                </div>
                            </div>
                        </Card> 
                  </div>
               </SwiperSlide>
                <SwiperSlide>
                  <div className='first-container'>
                       <Card className='card'>
                            <span className='rental-text'>Rentals</span>
                            <div className='image-cont'>
                               <img src={Phone} alt=""/> 
                            </div>
                            <div className='icons'>
                                <div className='seem'>
                                   <VpnKeyIcon />
                                   <p className='seem-text'>seemless</p>
                                </div>
                                 <div className='seem'>
                                   <LanguageIcon />
                                   <p className='seem-text'>Independence</p>
                                </div>
                            </div>
                        </Card> 
                  </div>
               </SwiperSlide>
              </Swiper>
           </div>
        </FourthSubContainer>
    )
}

export default FourthSub;
















