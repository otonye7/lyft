import { FirstContainer } from './first.styles';
import Button from '../button/button.component';
import WhiteButton from '../white-button/white-button.component';
import FirstImage from '../../assets/first.webp';
import SecondImage from '../../assets/second.webp';

const FirstComponent = () => {
    return (
        <FirstContainer>
            <div className='container'>
               <div className='first-grid'>
                    <div className='ready'>
                        <h5 className='ready-text'>READY WHEN YOU ARE</h5>
                    </div>
                    <div className='window'>
                    <h1 className='window-text'>Hop in.
                         Crack a <br /> window. Let's get  back out
                         there.
                    </h1>
                    </div>
                    <div className='button-container'>
                        <Button>Apply to drive</Button>
                        <br />
                        <WhiteButton>Sign up to ride</WhiteButton>
                    </div>
                </div> 
   
               <div className='second-grid'>
                   <div className='first'>
                       <img src={FirstImage} alt=""/> 
                   </div>

                   <div className='second'>
                       <img src={SecondImage} alt=""/> 
                   </div>
                      
                   </div>
               </div>
        </FirstContainer> 
    )
}

export default FirstComponent;