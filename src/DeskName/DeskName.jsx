// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { StyledTextField, styleSpanDiv, styledDeskName } from "./DeskNameStyle"
// import { TextField, Button } from '@mui/material'; // Предполагается, что вы используете Material UI

// const DeskName = () => {
//   const [boardName, setBoardName] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     // Переход на следующую страницу с передачей параметров
//     navigate('/task-name/', { state: { boardName } });
//   };

//   return (
//     <div css={styledDeskName}>
//       <div>
//         <span css={styleSpanDiv}>Everything starts with a board</span>
//         <br />
//         <span>A board is where you work. It's where your cards, columns, due dates, and everything else are placed to keep everything organized and up-to-date.</span>
//       </div>
//       <div>
//         <TextField
//           variant="outlined"
//           label="Enter the board name"
//           value={boardName}
//           onChange={(e) => setBoardName(e.target.value)} // Обновляем состояние
//           css={StyledTextField}
//         />
//       </div>
//       <div>
//         <Button onClick={handleNext}>Next</Button>
//       </div>
//     </div>
//   );
// };

// export default DeskName;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledTextField, styleSpanDiv, styledDeskName } from "./DeskNameStyle";
import { TextField, Button } from '@mui/material'; // Предполагается, что вы используете Material UI
import StyledButton from '../Button/Button';

const DeskName = () => {
  const [boardName, setBoardName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Переход на следующую страницу с передачей параметров
    navigate('/task-name/', { state: { boardName } });
  };

  return (
    <div css={styledDeskName}>
      <div>
        <span css={styleSpanDiv}>Everything starts with a board</span>
        <br />
        <span>A board is where you work. It's where your cards, columns, due dates, and everything else are placed to keep everything organized and up-to-date.</span>
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Enter the board name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)} // Обновляем состояние
          css={StyledTextField}
        />
      </div>
      <div>
        <StyledButton onClick={handleNext}>Next</StyledButton>
      </div>
    </div>
  );
};

export default DeskName;
