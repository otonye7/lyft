import {FifthContainer } from './fifth.styles';
import TextField from '@material-ui/core/TextField';
import Button from '../white-button/white-button.component';

const Fifth = () => {
    return (
        <FifthContainer>
           <div className='container'>
               <div className='text'>
                  <p className='text-text'> Ready to roll? <br /> Get a Lyft estimate. </p>
               </div>
               <form className='form' noValidate autoComplete="off">
                  <TextField className='input' id="outlined-basic" label="Enter your pick up location" variant="outlined" />
                   <br />
                   <TextField className='input' id="outlined-basic" label="Enter your drop off location" variant="outlined" />
                   <br />
                   <div className='b-container'>
                      <Button>Get estimate</Button>
                   </div>
                </form>
           </div>
           <br />
        </FifthContainer>
    )
}

export default Fifth;


