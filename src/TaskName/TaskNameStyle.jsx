// import { css } from "@emotion/react";

// export const StyledTextField = css`
//     margin-top:40px;    
//     margin-bottom: 20px;

// `
// export const styledDeskName = css`
//     position: fixed;
//     top: 50%;
//     left: 150px;
//     transform: translateY(-50%);
//     width: 400px;
// `
// export const buttonAdd = css`
//     /* margin-bottom: 10px; */
// `

// export const buttonNext = css`
//     /* margin: 10px; */
// `

// export const buttonsStyle = css`
//         display: flex;
//         gap: 10px; /* Расстояние между кнопками */
// `

import { css } from "@emotion/react";

export const StyledTextField = css`
  margin-top: 40px;    
  margin-bottom: 20px;
`;

export const styledDeskName = css`
  position: fixed;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  width: 400px;

  @media (max-width: 600px) {
    left: 10px;
    width: 90%;
  }
`;

export const buttonAdd = css`
  /* margin-bottom: 10px; */
`;

export const buttonNext = css`
  /* margin: 10px; */
`;

export const buttonsStyle = css`
  display: flex;
  gap: 10px; /* Расстояние между кнопками */
`;
