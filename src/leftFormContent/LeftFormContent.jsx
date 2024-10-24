import StyledButton from "../Button/Button"
import { spanText, spanWelcome, styledButton, styledDiv } from "./LeftFormContentStyle"
import { NavLink } from "react-router-dom"

const LeftFormContent = () => {
    return (
        <div css={styledDiv}>
            <span css={spanWelcome}>Welcome to Plan Grid!</span>
            <br />
            <span css={spanText}>Let's start organizing your projects so you can work on them.</span>
            <NavLink to="/desk">
                <StyledButton >Create first desk</StyledButton>
            </NavLink>
        </div>

    );
};
export default LeftFormContent