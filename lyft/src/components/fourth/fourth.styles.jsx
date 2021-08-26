import styled from 'styled-components';



export const FourthContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;
   background-color: #EBEBFF;
   
   .container {
       width: 80%;
       padding-top: 5rem;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;

      @media screen and (max-width:767px){
        width: 90%;
        display: flex;
        flex-direction: column;
   }
   }

   .lyft {
       width: 100%;
        @media screen and (max-width:767px){
       display: flex;
       justify-content: center; 
   }
   }

   .drive-text {
    font-family: ProximaNova, sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-transform: uppercase;
    color: #0C0B6D;

    @media screen and (max-width:767px){
       text-align: center;
   }
   }

   .image {
       width: 35%;
       margin: 0 auto; 

    @media screen and (max-width:767px){
       width: 100%;
   }
   }

   .set-text {
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 30px;
       line-height: 36px;
       color: #0C0B31;

   @media screen and (max-width:767px){
       text-align: center;
   }
   }

   .lyft-text {
       color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 15px;
       line-height: 20px;

    @media screen and (max-width:767px){
       text-align: center;
   }
   }

   .ride-text {
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 30px;
       line-height: 36px;
       color: #0C0B31;
   }

   .scoot {
        color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
        font-family: ProximaNova, sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
   }

   .span-text {
       font-family: ProximaNova, sans-serif;
       font-weight: 700;
       font-size: 15px;
       line-height: 18px;
       padding-left: 0.2rem;
   }

   .mask {
       display: flex;
       align-items: center;

     @media screen and (max-width:767px){
       justify-content: center;
   }
   }

   .ic {
       width: 15px;
   }

   .ride-button {
    @media screen and (max-width:767px){
        display: flex;
       justify-content: center;
   }

   }

    .white {
    @media screen and (max-width:767px){
        display: flex;
       justify-content: center;
   }
    }

    .calendar {
       display: flex;
       align-items: center;
    @media screen and (max-width:767px){
       justify-content: center;
   }
   }

   .button-container {
       align-items: center;
   }

   .o-text {
        color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
        font-family: ProximaNova, sans-serif;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;

    @media screen and (max-width:767px){
       text-align: center;
   }
   }


   img {
       width: 100%;
   }
`;