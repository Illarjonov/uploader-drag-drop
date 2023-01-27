import { DroppableUI } from "../drag-n-drop/droppableUI"

export const Workarea = () => {

    return (
        <DroppableUI droppableId='workarea'>
            <div style={{ width: 800, height: 500, border: "1px solid #000" }}>
                <textarea placeholder="rewrew"/>
            </div>
        </DroppableUI>
    )
}