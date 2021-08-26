import { EighthContainer } from './eighth.styles';
import Button from '../button/button.component';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FirstImage from '../../assets/lb.png';
import SwipeLogo from '../swipe-logo/swipe-logo.component';

const Eighth = () => {
    return (
        <EighthContainer>
        <div className='container'>
            <div className='im-cont'>
                <img src={FirstImage} alt=""/> 
            </div>
            <br />
            <div className='text-container'>
                   <span className='st-text'> We help you move your</span>
            </div>
            <br />
             <div className='text-container'>
                   <span className='st-text'>business</span>
            </div>
            <br />
             <div className='text-container'>
                   <p className='st'>Affordable transportation solutions, effortless payments, and getting all the right people to all the right places. So you can get work done.</p>
            </div>
            <br />
              <div className='button-container'>
                   <span className='com'>Learn about lyft business</span>
                    <ArrowRightAltIcon className='arrow'/>
                </div>
            <br />
            <br />
            <br />
            <br />
            <SwipeLogo />
        </div>
        </EighthContainer>
    )
}

export default Eighth;