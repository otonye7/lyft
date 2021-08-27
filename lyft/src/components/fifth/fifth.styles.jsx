import styled from 'styled-components';



export const FifthContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;
   background-color: #2B1B81;
   
   .container {
       width: 80%;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       /* align-items: center; */

   @media screen and (max-width: 767px){
      width: 96%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
   }
   }

   .b-container {
      margin-top: 1rem;
   }

   .text-text {
    color: rgb(255, 255, 255);
    font-family: LyftProUI, sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
   }

   .form {
       display: flex;
       padding-top: 1rem;
       /* align-items: center; */

    @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      align-items: none;
   }
   }

   .input {
       width: 100%;
       height: 55px;
       background-color: white;
       margin: 0.5rem;

   @media screen and (max-width: 767px){
      width: 98%;
      margin: 0 auto;
   }
   }
   }

`;