import { AppBar, Toolbar, Typography, css } from "@mui/material"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="span">
                    <NavLink to="/" style={{
                        textDecoration: 'none',
                        color: 'white'
                    }
                    }>
                        PLAN GRID
                    </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header