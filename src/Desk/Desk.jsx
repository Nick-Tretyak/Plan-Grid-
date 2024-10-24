import { useState, useEffect } from "react";
import { app, boardStyle, itemStyle, addButton } from "./DeskStyle";
import { useLocation } from 'react-router-dom';
import StyledButton from "../Button/Button";
import { TextField } from '@mui/material'; // Поле ввода из Material UI

const Desk = () => {
    const [boards, setBoards] = useState([
        { id: 1, title: "To do", items: [] },
        { id: 2, title: "Check", items: [] },
        { id: 3, title: "Done", items: [] },
    ]);

    const [newTask, setNewTask] = useState(''); // Новая задача

    const { state } = useLocation();
    const { newTasks = [] } = state || {};

    // Добавляем задачи из предыдущего экрана в "To do"
    useEffect(() => {
        if (newTasks.length > 0) {
            setBoards(prevBoards => prevBoards.map(board => {
                if (board.title === "To do") {
                    const uniqueTasks = newTasks.filter(task =>
                        !board.items.some(item => item.title === task)
                    );
                    return {
                        ...board,
                        items: [...board.items, ...uniqueTasks.map(task => ({ id: Date.now() + Math.random(), title: task }))]
                    };
                }
                return board;
            }));
        }
    }, [newTasks]);

    // Функция для добавления новой задачи в колонку "To do"
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setBoards(prevBoards => prevBoards.map(board => {
                if (board.title === "To do") {
                    return {
                        ...board,
                        items: [...board.items, { id: Date.now() + Math.random(), title: newTask }]
                    };
                }
                return board;
            }));
            setNewTask(''); // Очищаем поле ввода после добавления
        }
    };

    let currentBoard = null;
    let currentItem = null;

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const dragStartHandler = (e, board, item) => {
        currentBoard = board;
        currentItem = item;
    };

    const dragEndHandler = (e) => {
        e.currentTarget.style.boxShadow = 'none';
    };

    const dropHandler = (e, board) => {
        e.preventDefault();
        if (currentBoard && currentItem) {
            const currentIndex = currentBoard.items.indexOf(currentItem);
            currentBoard.items.splice(currentIndex, 1);
            board.items.push(currentItem);
            setBoards(boards.map(b => {
                if (b.id === board.id) {
                    return board;
                }
                if (b.id === currentBoard.id) {
                    return currentBoard;
                }
                return b;
            }));
        }
    };

    return (
        <div css={app}>
            <div css={addButton}>
                <TextField
                    variant="outlined"
                    label="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} // Связываем поле с состоянием
                    style={{ marginRight: '10px' }}
                />
                <StyledButton onClick={handleAddTask}>Add task</StyledButton>
            </div>
            {boards.map(board => (
                <div
                    css={boardStyle}
                    key={board.id}
                    onDragOver={dragOverHandler}
                    onDrop={(e) => dropHandler(e, board)}
                >
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{board.title}</div> 
                    {board.items.map(item => (
                        <div
                            key={item.id}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={dragEndHandler}
                            draggable={true}
                            css={itemStyle}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Desk;
