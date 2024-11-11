import React, { useState, useEffect } from "react";
import { app, boardStyle, itemStyle, addButton } from "./DeskStyle";
import { useLocation } from 'react-router-dom';
import StyledButton from "../Button/Button";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const Desk = () => {
    const [boards, setBoards] = useState([
        { id: 1, title: "Backlog", items: [] },
        { id: 2, title: "In progress", items: [] },
        { id: 3, title: "Internal testing", items: [] },
        { id: 4, title: "Customer testing", items: [] },
        { id: 5, title: "Ready", items: [] },
    ]);
    
    const [newTask, setNewTask] = useState('');
    const [currentTask, setCurrentTask] = useState(null); 
    const { state } = useLocation();
    const { newTasks = [] } = state || {};

    useEffect(() => {
        if (newTasks.length > 0) {
            setBoards(prevBoards => prevBoards.map(board => {
                if (board.title === "To do") {
                    const uniqueTasks = newTasks.filter(task =>
                        !board.items.some(item => item.title === task)
                    );
                    return {
                        ...board,
                        items: [...board.items, ...uniqueTasks.map(task => ({ id: Date.now() + Math.random(), title: task, status: 'backlog', description: '', label: '' }))] // Добавляем статус и описание
                    };
                }
                return board;
            }));
        }
    }, [newTasks]);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setBoards(prevBoards => prevBoards.map(board => {
                if (board.title === "Backlog") {
                    return {
                        ...board,
                        items: [...board.items, { id: Date.now() + Math.random(), title: newTask, status: 'backlog', description: '', label: '' }] // Добавляем статус и описание
                    };
                }
                return board;
            }));
            setNewTask(''); 
        }
    };

    const handleOpenTask = (task) => {
        setCurrentTask({ ...task });
    };

    const handleCloseModal = () => {
        setCurrentTask(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSaveTask = () => {
        setBoards((prevBoards) =>
            prevBoards.map((board) => {
                return {
                    ...board,
                    items: board.items.map((item) =>
                        item.id === currentTask.id ? { ...currentTask } : item 
                    ),
                };
            })
        );
        handleCloseModal(); 
    };

    let currentBoard = null;
    let currentItem = null;

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const dragStartHandler = (e, board, item) => {
        currentBoard = board;
        currentItem = item;
        console.log(`Задача "${item.title}" с текущим статусом "${item.status}" перетаскивается`);
    };

    const dragEndHandler = (e) => {
        e.currentTarget.style.boxShadow = 'none';
    };

    const dropHandler = (e, board) => {
        e.preventDefault();
        if (currentBoard && currentItem) {
            const currentIndex = currentBoard.items.indexOf(currentItem);
            currentBoard.items.splice(currentIndex, 1);
            
            const updatedItem = {
                ...currentItem,
                status: getStatusForBoard(board.title)
            };

            board.items.push(updatedItem);

            console.log(`Задача перемещена в колонку "${board.title}". Новый статус: ${updatedItem.status}`);
            
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

    const getStatusForBoard = (boardTitle) => {
        switch(boardTitle) {
            case 'To do': return 'Backlog';
            case 'In progress': return 'In progress';
            case 'Internal testing': return 'Internal Testing';
            case 'Customer testing': return 'Customer testing';
            case 'Ready': return 'Ready';
            default: return 'Backlog';
        }
    };

    return (
        <div css={app}>
            <div css={addButton}>
                <TextField
                    variant="outlined"
                    label="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
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
                            onClick={() => handleOpenTask(item)} 
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            ))}

            {currentTask && (
                <Dialog open={true} onClose={handleCloseModal}>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Title"
                            name="title"
                            value={currentTask.title}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={currentTask.description || ''}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Status"
                            name="status"
                            value={currentTask.status}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Label"
                            name="label"
                            value={currentTask.label || ''}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSaveTask} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
}

export default Desk;
