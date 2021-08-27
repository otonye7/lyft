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
      z-index: 4;
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
   @media screen and (max-width: 767px){
      padding-top: 0.5rem;
   }
  }



  .labels {
   @media screen and (max-width: 767px){
      width: 90%;
      padding-top: 1rem;
      margin: 0 auto;
   }
  }

   .others {
      width: 45%;
      display: flex;
      justify-content: space-between;

   @media screen and (max-width: 767px){
      /* display: none; */
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1pxsolid #fff;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: -110%;
    position: fixed;
    opacity: 1;
    transition: all 0.5s ease;
   }
   } 

   .button {
      display: none;
   @media screen and (max-width: 767px){
      /* display: none; */
    display: none;
   }
   }

   .button.active {
      display: unset;
      z-index: 4;
   }

   .public {
       min-width: 25px;
        width: 100px;
        height: 40px;
        color: #0C0B31;
        border-radius: 20px;
        border: 0.5px solid #0C0B31;
        padding: 0 18px 0 18px;
        align-items: center;
        font-size: 15px;
        background-color:  white;
        /* border: none; */
        outline: none;
        cursor: pointer;
        margin-right: 1rem; 
   }

   .close {
      position: relative;
      z-index: 4;
      color: black;
      font-weight: 600;
   }

   .others.active {
    background-color: white;
    left: 0px;
    margin: 0 auto;
    opacity: 1;
    padding-top: 1rem;
    transition: all 0.5s ease;
    z-index: 3;
  }

  .white-button {
     display: none;

   @media screen and (max-width: 767px){
       display: unset;
       z-index: 4;
   }
  }

   img {
      width: 100%;
   }
`;