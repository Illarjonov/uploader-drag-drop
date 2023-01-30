import { DraggableDnD } from "../drag-n-drop/draggable-DnD"
import { DroppableDnD } from "../drag-n-drop/droppable-DnD"

export const Sidebar = () => {

    return (
        <DroppableDnD droppableId={'sidebar'} isDropDisabled={true}>

            <div style={{ width: 300, height: 500, border: "1px solid #000" }}>
                <DraggableDnD name='text' index={0} >
                    <p> text </p>
                </DraggableDnD>

                <DraggableDnD name='image' index={1} >
                    <p> image </p>
                </DraggableDnD>
            </div>

        </DroppableDnD>
    )
}