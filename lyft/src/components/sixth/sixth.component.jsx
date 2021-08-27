import { SixthContainer } from './sixth.styles';
import Button from '../button/button.component';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FirstImage from '../../assets/chinese.webp';

const Sixth = () => {
    return (
        <SixthContainer>
        <div className='container'>
            <div className='text'>
                <div className='lyft'>
                   <span className='safety-text'>SAFETY FIRST</span>
                </div>
                <div className='text-container'>
                   <h2 className='st-text'> How to show up like a <br /> best stranger </h2>
                </div>
                 <div className='t-container'>
                   <p className='spans'>
                       Every ride should feel safe and comfy to everyone. A few simple ground
                       rules can help make that happen for all drivers and riders. Read up,
                       mask up, and crack a window to enjoy the breeze in your hair.
                   </p>
                </div>
                <br />
                <div className='button-container'>
                   <Button>Learn about safety</Button>
                   <br />
                   <div className='com-guide'>
                   <span className='com'>community guidelines</span>
                    {/* <ArrowRightAltIcon className='arrow'/> */}
                </div>
                </div>
            </div>
            <div className='im-cont'>
                <img src={FirstImage} alt=""/> 
            </div>
        </div>
        </SixthContainer>
    )
}

export default Sixth;