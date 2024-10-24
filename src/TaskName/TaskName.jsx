import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { StyledTextField, styledDeskName, buttonAdd, buttonNext, buttonsStyle } from "./TaskNameStyle";
import StyledButton from '../Button/Button';

function TaskName() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [boardName, setBoardName] = useState('My Board'); // Имя доски
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTaskList([...taskList, task]);
            setTask('');
        }
    };

    const handleNext = () => {
        navigate('/desk', { state: { boardName, newTasks: taskList } }); // Передача имени доски и новых задач
    };

    return (
        <div css={styledDeskName}>
            <TextField
                variant="outlined"
                label="Enter the task name"
                value={task}
                onChange={handleInputChange}
                css={StyledTextField}
            />
            <div css={buttonsStyle}>
                <div css={buttonAdd}>
                    <StyledButton onClick={handleAddTask}>Add Task</StyledButton>
                </div>
                <div css={buttonNext}>
                    <StyledButton onClick={handleNext}>Next</StyledButton>
                </div>
            </div>
        </div>
    );
}

export default TaskName;
