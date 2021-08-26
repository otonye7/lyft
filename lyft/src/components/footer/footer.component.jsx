import { FooterContainer } from './footer.styles';
import Button from '../white-button/white-button.component';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    return (
        <FooterContainer>
        <div className='container'>
           <div className='first'>
              <h2 className='text'>Driver</h2>
              <br />
              <div className='footer-spans'>
              <span className='spans'>Become a Driver</span>
              <br />
              <span className='spans'>Earnings</span>
               <br />
              <span className='spans'>Cities</span>
               <br />
              <span className='spans'>Help</span>
               <br />
              <span className='spans'>Safety</span>
               <br />
              <span className='spans'>Application Requirements</span>
               <br />
              <span className='spans'>Express Drive</span>
               <br />
              <span className='spans'>Bonus</span>
               <br />
              <span className='spans'>Lyft Rewards</span>
               <br />
              <span className='spans'>Driving Oppurtunities</span>
               <br />
              <span className='spans'>Insurance</span>
               <br />
              <span className='spans'>Hub</span>
              </div>
           </div>

            <div className='first'>
              <h2 className='text'>Rider</h2>
              <br />
              <div className='footer-spans'>
              <span className='spans'>Become a Driver</span>
              <br />
              <span className='spans'>Earnings</span>
               <br />
              <span className='spans'>Cities</span>
               <br />
              <span className='spans'>Help</span>
               <br />
              <span className='spans'>Safety</span>
               <br />
              <span className='spans'>Application Requirements</span>
               <br />
              <span className='spans'>Express Drive</span>
               <br />
              <span className='spans'>Bonus</span>
               <br />
              <span className='spans'>Lyft Rewards</span>
               <br />
              <span className='spans'>Driving Oppurtunities</span>
               <br />
              <span className='spans'>Insurance</span>
               <br />
              <span className='spans'>Hub</span>
              <br />
              <span className='spans'>Free</span>
              </div>
           </div>

            <div className='first'>
              <h2 className='text'>Lyft</h2>
              <br />
              <div className='footer-spans'>
              <span className='spans'>Become a Driver</span>
              <br />
              <span className='spans'>Earnings</span>
               <br />
              <span className='spans'>Cities</span>
               <br />
              <span className='spans'>Help</span>
               <br />
              <span className='spans'>Safety</span>
               <br />
              <span className='spans'>Application Requirements</span>
               <br />
              <span className='spans'>Express Drive</span>
               <br />
              <span className='spans'>Bonus</span>
               <br />
              <span className='spans'>Lyft Rewards</span>
               <br />
              <span className='spans'>Driving Oppurtunities</span>
               <br />
              <span className='spans'>Insurance</span>
              </div>
           </div>

           <div className='buttons'>
               <Button>Lyft driver app</Button>
               <br />
               <Button>Lyft rider app</Button>
               <br />
               <Button>Ride on web</Button>
           </div>
        </div>
        <br />
        <br />
        <div className='under'>
           <p className='u-text'>Terms</p>
           <p className='u-text'>Privacy</p>
           <p className='u-text'>© 2021 Lyft, Inc</p>
           <p className='u-text'>CPUC ID No. TCP0032513-P</p>
           <TwitterIcon className='icons'/>
           <FacebookIcon className='icons'/>
           <InstagramIcon className='icons'/>
        </div>
        </FooterContainer>
    )
}

export default Footer;