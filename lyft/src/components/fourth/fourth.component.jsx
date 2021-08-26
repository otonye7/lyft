import {FourthContainer } from './fourth.styles';
import Button from '../button/button.component';
import FourthSub from '../fourth-sub/fourth-sub.component';
import Phone from '../../assets/phone.webp';

const Fourth = () => {
    return (
        <FourthContainer>
            <div className='container'>
               <div className='text'>
                <div className='lyft'>
                   <span className='drive-text'>Ride with lyft</span>
                </div>
                <div className='text-container'>
                   <h2 className='set-text'>  Ready, set, go <br /> in just a few quick taps.</h2>
                </div>
                <div className='text-container'>
                   <p className='o-text'>Whether you’re following your heart or your busy schedule, we’ll get<br />you where you need to go.</p>
                </div>
                <div className='button-container'>
                   <Button>Button here</Button>
                   <br />
                   <span className='span-text'>Know that your driver is wearing a mask</span>
                   <br />
                   <br />
                   <span className='span-text'>Schedule your ride in advance</span>
                </div>
                <br />
                <br />
                <div className='ride-button'>
                   <Button>Get a ride </Button>
                </div>
                <br />
                <br />
                <div className='lyft'>
                   <p className='lyft-text'>Join Lyft Pink to unlock perks like 15% off rideshare, free Grubhub+ membership,<br /> exclusive offers, and more. All for $19.99 a month. Available in the US only.</p>
                </div>
                <br />
                </div>
                <div className='image'>
                   <img src={Phone} alt=""/> 
                </div>
            </div>
            <FourthSub />
        </FourthContainer> 
    )
}

export default Fourth;