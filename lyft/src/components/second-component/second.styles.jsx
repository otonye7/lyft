import styled from 'styled-components';



export const SecondContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;

   .container {
       display: grid;
       grid-template-columns: 1fr 1fr;
    @media screen and (max-width:767px){
        grid-template-columns: 1fr;
   }
   }
   .first {
       width: 63.5%;
       margin: 0 auto;
    @media screen and (max-width:767px){
        display: none;
   }
   }

    .com-guide {
     @media screen and (max-width: 767px){
      display: flex;
   }
   }

   .button-container {
       width: 55%;
       display: flex;
       justify-content: space-between;
       align-items: center;

    @media screen and (max-width:800px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
   }
   }
   
   .driver{
       font-family: ProximaNova, sans-serif;
        font-weight: 700;
        font-size: 13px;
       line-height: 15px;
       color: #4D4C68;
   }
   .arrow {
       color: #4D4C68;
   }

   .text {
       width: 100%;
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
        color: #0C0B31;
   @media screen and (max-width:767px){
        text-align: center;
   }
   }
  
   .span {
    color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
    font-family: ProximaNova, sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
     @media screen and (max-width:767px){
        text-align: center;
   }
   }

   .first-icon {
       display: flex;
       align-items: center;
    @media screen and (max-width:767px){
       align-items: center;
   }
   }

   .reliable-text {
       padding-left: 0.4rem;
         font-family: ProximaNova, sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #0C0B31;
   }
   .p-text {
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 17px;
       line-height: 22px;
       color: #0C0B31;
   }
   .icons {
       color:  #0C0B31;
       padding-bottom: 1rem;
    @media screen and (max-width:767px){
        padding-bottom: 2rem;
   }
   }
   .icon {
       color:  #0C0B31;
       padding-bottom: 1rem;
   }

    .ico {
       color:  #0C0B31;
       padding-bottom: 1rem;
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

     .first-conta {
      display: none;
    @media screen and (max-width:767px){
       width: 100%; 
       display: unset;
   }
   }

   img {
       width: 100%;
       border-top-right-radius: 150px;
   }
`;