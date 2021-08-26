import styled from 'styled-components';



export const EighthContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;

   .container {
       width: 80%;
       margin: 0 auto;

    @media screen and (max-width:767px){
        width: 98%;
   }
   }

   .im-cont {
       width: 15%;
       margin: 0 auto;

    @media screen and (max-width:767px){
        width: 60%;
   }
   }

   .st-text {
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 30px;
       line-height: 36px;
       color: #0C0B31;

    @media screen and (max-width:767px){
        text-align: center;
   }
   }

   .st {
       color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 17px;
       line-height: 22px;
    @media screen and (max-width:767px){
        text-align: center;
   }
   }

     .button-container {
       /* width: 70%; */
       display: flex;
       justify-content: center;
       align-items: center;
     }

   .text-container {
       display: flex;
       justify-content: center;
   }

    img {
       width: 100%;
   } 
`;