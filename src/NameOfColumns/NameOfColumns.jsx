import { TextField } from "@mui/material"
import { StyledTextField, divStyle, spanText, spanText2, spanText3 } from "./NameOfColumnsStyle"
import { NavLink } from "react-router-dom"
import StyledButton from "../Button/Button"

const NameOfColumns = () => {
    return (
        <div css={divStyle}>
            <span css={spanText}>
                Organize the board using lists now.
            </span>
            <span css={spanText2}>
                A column is a set of cards representing key stages, a collection of ideas, or the goals of the team. Set up the columns and add as many as you need.
            </span>
            <span css={spanText3}>
                Most people start with the following columns:
            </span>
            <div>
                <TextField variant="outlined" label='For example: "Need to do"' css={StyledTextField} />
            </div>
            <div>
                <TextField variant="outlined" label='For example: "At work"' css={StyledTextField} />
            </div>
            <div>
                <TextField variant="outlined" label='For example: "Done"' css={StyledTextField} />
            </div>
            <div>
                <NavLink to="/cards-name">
                    <StyledButton>Next</StyledButton>
                </NavLink>
            </div>
        </div>
    )
}

export default NameOfColumns