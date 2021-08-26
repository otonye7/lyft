import styled from 'styled-components';



export const SeventhContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;

   .container {
       display: grid;
       grid-template-columns: 1fr 1fr;
       width: 80%;
       margin: 0 auto;

    @media screen and (max-width:767px){
        width: 98%;
        grid-template-columns: 1fr;
   }
   }

   .button-container {
       width: 100%;
       display: flex;
       align-items: center;

     @media screen and (max-width:767px){
        display: flex;
        justify-content: center;
   }
   }

   .lyft {
    @media screen and (max-width:767px){
        display: flex;
        justify-content: center;
   }
   }

   .safety-text {
       font-family: ProximaNova, sans-serif;
       font-weight: 700;
       font-size: 17px;
       line-height: 20px;
       text-transform: uppercase;
       color: #0C0B31;
    @media screen and (max-width:767px){
        text-align: center;
   }
   }

   .st-text {
       color: #0C0B31;
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 30px;
       line-height: 36px;

   @media screen and (max-width:767px){
        text-align: center;
   }
   }

   .arrow {
       padding-left: 0.5rem;
   }

   .com {
       color: #0C0B31;
   }

   .spans {
       color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 16px;
       line-height: 22px;
    @media screen and (max-width:767px){
        text-align: center;
   }
   }

   .img-cont {
       width: 80%;
    @media screen and (max-width:767px){
        display: none;
   }
   }

   .img-conta {
      display: none;
    @media screen and (max-width:767px){
       width: 100%; 
       display: unset;
   }
   }


    img {
       width: 100%;
       border-top-left-radius: 150px;
   } 
`;