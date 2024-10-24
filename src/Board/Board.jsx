import Backlog from "../Columns/Backlog/Backlog"
import CustomerTesting from "../Columns/CustomerTesting/CustomerTesting"
import InProgress from "../Columns/InProgress/InProgress"
import InternalTesting from "../Columns/InternalTesting/InternalTesting"
import Ready from "../Columns/Ready/Ready"
import { boardStyle } from "./BoardStyle"

const Board = () => {
    return (
        <div css={boardStyle}>
            <Backlog />
            <CustomerTesting />
            <InProgress />
            <InternalTesting />
            <Ready />
        </div>
    )
}

export default Board