import styled from 'styled-components';


export const HeaderContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;
   

   .container {
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .logo {
      width: 5%;
     @media screen and (max-width: 767px){
      width: 15%;
   }
   }

   .input {
      width: 100%;
   }

   .nav-icon {
      display: none;
   @media screen and (max-width: 767px){
      display: block;
   }
   }

 .vertical-line {
      border-left: 2.5px solid #D8D8DE;
      opacity: 0.8;
  }

  .horizontal {
      border-bottom: 2px solid #D8D8DE;
      opacity: 0.8;
  }

   /* .form {
      display: flex;
      justify-content: space-between;
   } */

   /* .text-field {
      width: 40%;
   } */

   .others {
      width: 45%;
      display: flex;
      justify-content: space-between;

   @media screen and (max-width: 767px){
      display: none;
   }
   } 

   img {
      width: 100%;
   }
`;