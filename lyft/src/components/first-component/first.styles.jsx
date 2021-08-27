import styled from 'styled-components';



export const FirstContainer = styled.div`
   max-width: 1400px;
   width: 100%;
   height: 930px; 
   margin: 0 auto;
   
   @media screen and (max-width: 800px){
     height: 100%;
   }

   .container {
       width: 95%;
       margin: 0 auto;
       display: grid;
       grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 800px){
        width: 92%;
        grid-template-columns: 1fr;
   }

   }
   .ready-text {
       color: #0C0B31;
       font-family: ProximaNova, sans-serif;
       font-weight: 700;
       font-size: 17px;
       line-height: 20px;

    @media screen and (max-width: 800px){
        text-align: center;
   }
   }

   .window {
       /* border: 2px solid red; */
       /* width: 80%; */
   }

   .window-text {
       color: #0C0B31;
       font-family: LyftProUI, sans-serif;
       font-size: 58px;
       line-height: 69px;

    @media screen and (max-width: 800px){
        text-align: center;
        font-size: 40px;
        line-height: 47px; 

   }
   }

   .button-container {
       width: 100%;
       display: flex;
    @media screen and (max-width: 800px){
        width: 98%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
   } 
   }

   .second-grid {
       position: relative;

    @media screen and (max-width: 800px){
        padding-top: 2rem;
   }
   }

   .first {
       position: relative;
   }

   .second {
       width: 78%;
       position: absolute;
       top: 550px;
       right: 150px;
    @media screen and (max-width: 800px){
     display: none;
   }
   }

   img {
       width: 100%;
   }
`;