import styled from 'styled-components';



export const FirstContainer = styled.div`
   width: 100%;
   height: 930px;
   

   @media screen and (max-width: 1200px){
     height: 100%;
   }

   .container {
       width: 90%;
       margin: 0 auto;
       display: grid;
       grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr;
   }
   }

   .ready-text {
       color: #0C0B31;
       font-family: ProximaNova, sans-serif;
       font-weight: 700;
       font-size: 17px;
       line-height: 20px;
   }

   .window-text {
       color: #0C0B31;
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 58px;
   }

   .button-container {
       width: 48%;
       display: flex;
       justify-content: space-between;

    @media screen and (max-width: 1200px){
        width: 50%;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        flex-direction: column;
   } 
   }

   .second-grid {
       position: relative;
   }

   .first {
       position: relative;
   }

   .second {
       width: 90%;
       position: absolute;
       top: 550px;
       right: 150px;

    @media screen and (max-width: 1200px){
     display: none;
   }
   }

   img {
       width: 100%;
   }


`;