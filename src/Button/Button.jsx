import { css } from "@emotion/react"
import { Button } from "@mui/material"
import { style } from "./ButtonStyle"

const StyledButton = ({ children, onClick }) => {
    return (
        <div>
            <Button
                variant="contained"
                size="medium"
                onClick={onClick}
            >
                {children}
            </Button>
        </div>
    )
}

export default StyledButton;
