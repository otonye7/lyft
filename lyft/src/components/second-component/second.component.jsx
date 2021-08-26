import { SecondContainer } from './second.styles';
import FirstImage from '../../assets/third.webp';
import MoneyIcon from '@material-ui/icons/Money';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Button from '../button/button.component';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const SecondComponent = () => {
    return (
        <SecondContainer>
           <div className='container'>
               <div className='first'>
                       <img src={FirstImage} alt=""/> 
                </div>
                <div className='text'>
                <div className='lyft'>
                   <span className='drive-text'>Drive with lyft</span>
                </div>
                <div className='text-container'>
                   <h2 className='set-text'>  Set your own hours. <br /> Earn on your own terms.</h2>
                </div>
                <div className='t-container'>
                   <p className='span'>
                       Maybe you’re saving up for school. Or keeping flexible hours to spend
                       more time with your family. It’s a great time to get in the driver’s seat,
                       connect with your community, and earn a little extra cash. Plus, you can
                       tell people you’ve got the best boss in town: you.
                   </p>
                </div>

                <div className='first-icon'> 
                   <MoneyIcon className='icons'/>
                   <div className='reliable'>
                      <p className='reliable-text'>
                         <strong>Reliable earning</strong>
                         <br />
                         Make money, keep your tips, and use in-app tools to help maximize your earnings.
                      </p>
                   </div>
                </div>

                <div className='first-icon'> 
                   <AvTimerIcon className='icon'/>
                   <div className='reliable'>
                      <p className='reliable-text'>
                         <strong>A flexible schedule</strong>
                         <br />
                          Be your own boss and drive whenever it works for you
                      </p>
                   </div>
                </div>

                <div className='first-icon'> 
                   <FlashOnIcon className='ico'/>
                   <div className='reliable'>
                      <p className='reliable-text'>
                         <strong>Get paid promptly</strong>
                         <br />
                         Cash out your earnings whenever you want with Express Pay and  Lyft Direct.
                      </p>
                   </div>
                </div>
                <br />
                <div className='button-container'>
                   <Button>Apply to drive</Button>
                   <br />
                  <div className='com-guide'>
                    <span className='com'>How driver’s pay work</span>
                    <ArrowRightAltIcon className='arrow'/>
                  </div>
                </div>
                </div>
                <br />
                <div className='first-conta'>
                       <img src={FirstImage} alt=""/> 
                </div>
           </div>
        </SecondContainer>
       
    )
}

export default SecondComponent;