import styled from 'styled-components';
import { getButtonColor } from '../../utils/utils';
// import { purpleColor } from '../../utils/utils';


export const ButtonContainer = styled.div`
    button {
        min-width: 25px;
        width: 140px;
        height: 40px;
        color: white;
        border-radius: 20px;
        border: 0.5px solid #0C0B31;
        padding: 0 18px 0 18px;
        font-size: 15px;
        background-color:  ${getButtonColor};
        /* border: none; */
        outline: none;
        cursor: pointer;
    }
`;