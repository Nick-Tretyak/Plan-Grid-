import { useState } from "react"
import { cardsStyle, container } from "./Board2Style"

const Board2 = () => {
    const [cardList, setCardList] = useState([
        { id: 1, order: 1, text: 'Backlog'},
        { id: 2, order: 2, text: 'In progress'},
        { id: 3, order: 3, text: 'Internal testing'},
        { id: 4, order: 4, text: 'Customer testing'},
        { id: 5, order: 5, text: 'Ready'}, 
    ])

    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, card) {
        console.log('drag', card)
        setCurrentCard(card)
    }
    function dragLeaveHandler(e) {
    }
    function dragEndHandler(e) {
    }
    function dragOverHandler(e) {
        e.preventDefault()
    }
    function dropHandler(e, card) {
        e.preventDefault()
        setCardList(cardList.map(c=>{
            if(c.id === card.id){
                return {...c, order: currentCard.order}
            }
            if (c.id===currentCard.id){
                return {...c, order: card.order}
            }
            return c
        }))
    }

    const sortCards = (a, b) =>{
        if(a.order>b.order){
            return 1
        }else{
            return -1
        }
    }
    return (
        <div css={container}>
            {cardList.sort(sortCards).map(card =>
                <div
                    css={cardsStyle}
                    draggable='true'
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, card)}>
                    {card.text}
                </div>
            )}
        </div>
    )
}

export default Board2