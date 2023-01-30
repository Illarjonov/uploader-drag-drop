import { useSelector } from "react-redux"
import { initialStateI } from "../../redux/reducer"
import { DraggableDnD } from "../drag-n-drop/draggable-DnD"
import { DroppableDnD } from "../drag-n-drop/droppable-DnD"
import altImage from '../../images/alt-image.jpeg'
import s from './sidebar.module.css'

export const Sidebar = () => {
    const image = useSelector((state: initialStateI) => state.image)

    return (
        <DroppableDnD droppableId={'sidebar'} isDropDisabled={true}>

            <div style={{ width: 300, height: 500, border: "1px solid #000" }}>
                <DraggableDnD name='text' index={0} >
                    <p> text </p>
                </DraggableDnD>

                <DraggableDnD name='image' index={1} >
                    <img src={image ? image : altImage} className={s.image}/>
                </DraggableDnD>
            </div>

        </DroppableDnD>
    )
}