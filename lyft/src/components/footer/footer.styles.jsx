import styled from 'styled-components';



export const FooterContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;

   .container {
       width: 80%;
       margin: 0 auto;
       padding-top: 3rem;
       display: flex;
       justify-content: space-between;

    @media screen and (max-width: 767px){
      width: 98%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
   }
   }
   .text {
       font-family: ProximaNova, sans-serif;
       font-weight: 700;
       font-size: 17px;
       line-height: 20px;
       text-transform: uppercase;
       color: #0C0B6D;
    }
    .spans {
        font-family: ProximaNova, sans-serif;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
        color: #0C2D66;
    }
   }
   .footer-spans {
       display: flex;
       flex-direction: column;

    @media screen and (max-width: 767px){
      display: none;
   }
   }
   .u-text {
        font-family: ProximaNova, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #0C2D66;
   }
   .icons {
      color: #0C2D66;
      width: 15px;
   }
   .under {
       width: 37%;
       margin: 0 auto;
       padding-left: 39rem;
       align-items: center;
       display: flex;
       justify-content: space-between;

     @media screen and (max-width: 800px){
      display: none;
   }
   }

   .buttons {
    @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   }
`;