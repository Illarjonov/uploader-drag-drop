import { useSelector } from "react-redux"
import { initialStateI } from "../../redux/reducer"
import store from "../../redux/store"
import { DroppableDnD } from "../drag-n-drop/droppable-DnD"

export const Workarea = () => {
    const changeText = useSelector((state: initialStateI)=> state.changeText)
    return (
        <DroppableDnD droppableId='workarea'>
            <div style={{ width: 800, height: 500, border: "1px solid #000" }}>
                {changeText && <textarea placeholder="rewrew"/>}
            </div>
        </DroppableDnD>
    )
}