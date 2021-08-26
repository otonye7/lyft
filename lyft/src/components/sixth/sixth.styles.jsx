import styled from 'styled-components';



export const SixthContainer = styled.div`
   width: 100%;
   max-width: 1400px;
   margin: 0 auto;

   .container {
       display: grid;
       grid-template-columns: 1fr 1fr;
       width: 80%;
       margin: 0 auto;
   }

    .button-container {
       width: 70%;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }

   .safety-text {
       font-family: ProximaNova, sans-serif;
       font-weight: 700;
       font-size: 17px;
       line-height: 20px;
       text-transform: uppercase;
       color: #0C0B31;
   }

   .st-text {
       color: #0C0B31;
       font-family: LyftProUI, sans-serif;
       font-weight: 600;
       font-size: 30px;
       line-height: 36px;
   }

   .spans {
       color: var(--core-ui-theme-text-primary,rgba(12,11,49,1));
       font-family: ProximaNova, sans-serif;
       font-weight: 400;
       font-size: 16px;
       line-height: 22px;
   }

   .im-cont {
       width: 80%;
       margin: 0 auto;
   }

    img {
       width: 100%;
   } 
`;