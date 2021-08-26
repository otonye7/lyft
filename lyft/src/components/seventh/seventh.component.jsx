import { SeventhContainer } from './seventh.styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FirstImage from '../../assets/vaccine.webp';

const Seventh = () => {
    return (
        <SeventhContainer>
        <div className='container'>
             <div className='img-cont'>
                <img src={FirstImage} alt=""/> 
            </div>
            <div className='text'>
                <div className='lyft'>
                   <span className='safety-text'>VACCINE ACCESS</span>
                </div>
                <div className='text-container'>
                   <h2 className='st-text'> Getting the vaccine starts with  getting to the vaccine </h2>
                </div>
                  <div className='t-container'>
                   <p className='spans'>
                       The pandemic has been tough on all of us, but it’s been particularly
                       hard on communities that are underserved by public transit, healthcare,
                       and other basic services. It’s our duty to help the best way we can: with
                       rides. We’re working with partners and community members to help
                       provide access to transportation to vaccine sites for people who need it.
                       So everyone can say, “Sorry, COVID, our ride’s here.”
                   </p>
                </div>
                <br />
                <div className='button-container'>
                   <span className='com'>Learn more about vaccine access</span>
                    <ArrowRightAltIcon className='arrow'/>
                </div>
            </div>
            <br />
             <div className='img-conta'>
                <img src={FirstImage} alt=""/> 
            </div>
        </div>
        </SeventhContainer>
    )
}

export default Seventh;