import styled from 'styled-components';



export const ThirdContainer = styled.div`
   max-width: 1400px;
   margin: 0 auto;
   width: 100%;

   .container {
       width: 90%;
       margin: 0 auto;
    @media screen and (max-width:767px){
       width: 98%;
   }
   }

   .first-container {
      
    @media screen and (max-width:767px){
       width: 70%;
   }
   }

   .swiper-container {
      width: 100%;
     @media screen and (min-width:1720px){
       width: 100%;
     }
    }

   .image-container {
       width: 20%;
       margin: 0 auto;
   }

   .p-text {
       /* border: 2px solid red; */
       color: rgb(99, 99, 123);
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 20px;
       line-height: 26px;
       text-align: center;
   }

   .a-text {
       /* border: 2px solid red; */
       color: black;
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 20px;
       line-height: 26px;
       text-align: center;
   }

   .para-text {
      color: rgb(99, 99, 123);
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 15px;
       line-height: 26px;
       text-align: center;
   }

   img {
       width: 100%;
   }
`;