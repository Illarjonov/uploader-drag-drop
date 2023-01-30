import { DragDropContext } from "react-beautiful-dnd"
import React from "react"
import { useDispatch } from "react-redux"
import { setChangeImage, setChangeText, setIsOpenModalImage } from '../../redux/actions'

type OnDragEndType = {
    combine?: any,
    destination?: { droppableId: string, index: number } | null,
    draggableId: string,
    mode?: string,
    reason?: string,
    source?: { index: number, droppableId: string } | null
    type?: string
}

type DragDropContextType = {
    children?: React.ReactNode;
}

export const ContextDnD = ({children}: DragDropContextType) => {
    const dispatch = useDispatch()

    const onDragEnd = (result: OnDragEndType) => {
        // if drop to workarea
        if (result?.destination?.droppableId === 'workarea') {
            if (result.draggableId === "text") {
                // store.dispatch(setChangeText(true))
                dispatch(setChangeText(true))
            }
            if (result.draggableId === "image") {
                //show picture uploader
                dispatch(setChangeImage(true))
                dispatch(setIsOpenModalImage(true))
            }
            console.log(result);
            return;
        }
    }

    return <>
        <DragDropContext onDragEnd={onDragEnd}> 
            {children}
        </DragDropContext>
    </>
}