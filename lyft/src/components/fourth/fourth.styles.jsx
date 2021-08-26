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
       /* grid-template-columns: 1fr 1fr; */
       /* border: 2px solid red; */
   }

   .drive-text {
    font-family: ProximaNova, sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-transform: uppercase;
    color: #0C0B6D;
   }

   .image {
       width: 35%;
       margin: 0 auto; 
   }

   .set-text {
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 30px;
       line-height: 36px;
       color: #0C0B31;
   }

   .lyft-text {
       color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 15px;
       line-height: 20px;
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
   }

   .o-text {
        color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
        font-family: ProximaNova, sans-serif;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
   }


   img {
       width: 100%;
       border-top-right-radius: 150px;
   }
`;