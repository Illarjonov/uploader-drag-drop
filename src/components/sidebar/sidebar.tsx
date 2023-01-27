import { DraggableUI } from "../drag-n-drop/draggableUI"
import { DroppableUI } from "../drag-n-drop/droppableUI"

export const Sidebar = () => {

    return (
        <DroppableUI droppableId={'sidebar'} isDropDisabled={true}>

            <div style={{ width: 300, height: 500, border: "1px solid #000" }}>
                <DraggableUI name='text' index={0} >
                    <p> text </p>
                </DraggableUI>

                <DraggableUI name='image' index={1} >
                    <p> image </p>
                </DraggableUI>
            </div>

        </DroppableUI>
    )
}