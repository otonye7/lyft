import React, { useState } from 'react';
import { HeaderContainer } from './header.styles';
import Phone from '../../assets/logo.svg.png';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <HeaderContainer>
        <div className='container'>

            <div className='logo'>
               <img src={Phone} alt=""/>
            </div>

             <div className='text-field'>
                <TextField className='input' id="outlined-basic" label="Where are you going" variant="outlined" />
              </div>

            <div className='others'>
                <div className='vertical-line'></div>
                <h4 className='labels'>Driver</h4>
                <div className='vertical-line'></div>
                <h4 className='labels'>Rider</h4>
                 <div className='vertical-line'></div>
                <h4 className='labels'>Business</h4>
                 <div className='vertical-line'></div>
                <h4 className='labels'>Login</h4>
                 <div className='vertical-line'></div>
                <h4 className='labels'>SignUp</h4>
          </div>

          <div className="nav-icon" onClick={handleClick}>
           {
            click ? <CloseIcon /> : <MenuIcon />
          } 
        </div>
        </div>
        <br />
        <div className='horizontal'></div>
        </HeaderContainer>
    )
}

export default Header;