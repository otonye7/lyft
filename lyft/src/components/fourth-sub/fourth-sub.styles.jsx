
import styled from 'styled-components';



export const FourthSubContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;
   
   .sub-container {
       width: 80%;
       margin: 0 auto;
       /* display: flex;
       justify-content: space-between; */
       /* grid-template-columns: 1fr 1fr; */
       /* border: 2px solid red; */
   }

   .sub-text {
        font-family: LyftProUI, sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        color: #0C0B31;
   }

   .para {
       color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
       font-family: ProximaNova, sans-serif;
       font-weight: 500;
       font-size: 17px;
       line-height: 20px;
   }

   .card {
       display: flex;
       flex-direction: column;
       border-radius: 10px;
       margin-bottom: 1em;
   }

   .last {
        color: var(--core-ui-theme-text-secondary,rgba(12,11,49,0.7));
        font-family: ProximaNova, sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
   }

   .rental-text {
        font-family: LyftProUI, sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
        color: #0C0B31;
        text-align: center;
        padding-top: 2rem;
        margin: 0 auto;
   }

   .image-cont {
       width: 60%;
       margin: 0 auto;
   }

   .seem {
       display: flex;
       align-items: center;
       justify-content: center;
   }

   .seem-text {
       padding-left: 0.4rem;
       color: var(--core-ui-theme-text-secondary,rgba(12,11,49,0.7));
      font-family: ProximaNova, sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
   }

   img {
       width: 100%;
   }
`;