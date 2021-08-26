import PropTypes from 'prop-types';
import { ButtonContainer } from './white-button.styles';

const WhiteButton = ({ children }) => {
    return (
        <ButtonContainer>
            <button >
                {children}
            </button>
        </ButtonContainer>
    )
}



export default WhiteButton;