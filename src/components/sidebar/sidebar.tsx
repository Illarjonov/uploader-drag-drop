import { useSelector } from "react-redux"
import { initialStateI } from "../../redux/reducer"
import { DraggableDnD } from "../drag-n-drop/draggable-DnD"
import { DroppableDnD } from "../drag-n-drop/droppable-DnD"
import altImage from '../../images/alt-image-sidebar.jpeg'
import s from './sidebar.module.css'

export const Sidebar = () => {
    const image = useSelector((state: initialStateI) => state.image)
    const text = useSelector((state: initialStateI) => state.text)

    return (
        <DroppableDnD droppableId={'sidebar'} isDropDisabled={true}>
            <div className={s.sidebar}>
                <div className={s.textContainer}>
                <DraggableDnD name='text' index={0} >
                    <div className={s.text}> {text ? text : 'Random text'} </div>
                </DraggableDnD>
                </div>

                <DraggableDnD name='image' index={1} >
                    <img src={image ? image : altImage} className={s.image} />
                </DraggableDnD>
            </div>

        </DroppableDnD>
    )
}