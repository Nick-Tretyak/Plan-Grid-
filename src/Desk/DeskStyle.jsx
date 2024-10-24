import { css } from "@emotion/react";

export const app = css`
    width: 100vw; /* Ширина на 100% от окна */
    height: 100vh; /* Высота на 100% от окна */
    display: flex;
    align-items: flex-start; /* Вертикальное выравнивание по верхнему краю */
    justify-content: center; /* Горизонтальное выравнивание по центру */
    gap: 10px;
    overflow: hidden; /* Скрываем полосы прокрутки для всего приложения */
    padding: 20px; /* Отступы от краев */
    box-sizing: border-box; /* Учитываем отступы в ширине и высоте */
    
`;

export const boardStyle = css`
    flex: 1 1 300px; /* Блоки занимают 1 часть пространства и имеют минимальную ширину 300px */
    height: calc(70vh - 5px); /* Высота блоков, 70% от высоты окна минус отступы */
    max-height: 70vh; /* Максимальная высота доски (70% от высоты окна) */
    overflow-y: auto; /* Включаем вертикальную прокрутку для доски */
    border-radius: 12px; /* Скругление углов */
    border: 5px solid lightgray; /* Обводка */
    margin: 10px 10px 5px 10px; /* Отступы между блоками (нижний отступ меньше) */
    display: flex;
    flex-direction: column; /* Вертикальное направление элементов */
    box-sizing: border-box; /* Учитываем отступы в общей ширине */
`;

export const board__title = css`
    font-size: 1.5rem; /* Размер заголовка */
    font-weight: 700  ; /* Жирный текст */
    padding: 10px; /* Отступы вокруг заголовка */
`;

export const itemStyle = css`
    width: 100%; /* Ширина элемента на 100% от родителя */
    border: 2px solid lightpink; /* Обводка */
    padding: 10px; /* Отступы внутри элемента */
    border-radius: 6px; /* Скругление углов */
    margin: 5px 0; /* Отступы сверху и снизу */
    cursor: grab; /* Курсор при наведении */
    background-color: #fcfcf9; /* Фон элемента */
`;

export const boardNames = css`
    margin-top: -37%; /* Верхний отступ для позиционирования */
    position: absolute; /* Абсолютное позиционирование */
    color: red; /* Цвет текста */
    font-size: 24px; /* Размер шрифта */
    font-weight: bold; /* Жирный текст */
`;

export const addButton = css`

`;
