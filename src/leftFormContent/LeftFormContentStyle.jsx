// import { css } from "@emotion/react";

// export const styledDiv = css`
//   position: fixed;
//   top: 50%;
//   left: 10%;
//   transform: translateY(-50%);
//   width: 80%;
//   max-width: 300px; /* ограничиваем максимальную ширину */
  
//   @media (max-width: 600px) {
//     left: 5%;
//     width: 90%;
//   }
// `;

// export const spanWelcome = css`
//   display: flex;
//   font-size: 5vw; /* динамический размер шрифта */
  
//   @media (max-width: 600px) {
//     font-size: 6vw;
//   }
// `;

// export const spanText = css`
//   display: flex;
//   margin-bottom: 5vw; /* динамический отступ */
  
//   @media (max-width: 600px) {
//     margin-bottom: 10vw;
//   }
// `;

import { css } from "@emotion/react";

export const styledDiv = css`
  position: fixed;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  width: 300px;

  @media (max-width: 600px) {
    left: 10px;
    width: 90%;
  }
`;

export const spanWelcome = css`
  display: flex;
  font-size: 30px; /* фиксированный размер шрифта на полной версии */

  @media (max-width: 600px) {
    font-size: 6vw; /* адаптивный размер на маленьких экранах */
  }
`;

export const spanText = css`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    margin-bottom: 5vw; /* адаптивный отступ для маленьких экранов */
  }
`;
