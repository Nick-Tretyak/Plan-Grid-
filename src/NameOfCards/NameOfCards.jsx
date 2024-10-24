import { TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import StyledButton from "../Button/Button"
import { StyledTextField, divStyle, spanText, spanText2, spanText3 } from "./NameOfCardsStyle"

const NameOfCards = () => {
    return (
        <div css={divStyle}>
            <span css={spanText}>
                Cards are your building blocks.
            </span>
            <span css={spanText2}>
                For to-do lists, organizing, or sharing with a colleague
            </span>
            <span css={spanText3}>
                Add names to the cards in the 'To-Do' column.
            </span>
            <div>
                <TextField variant="outlined" label='For example: "Project planning"' css={StyledTextField} />
            </div>
            <div>
                <TextField variant="outlined" label='For example: "Introductory meeting"' css={StyledTextField} />
            </div>
            <div>
                <NavLink to="/board2">
                    <StyledButton>Start</StyledButton>
                </NavLink>
            </div>
        </div>
    )
}

export default NameOfCards