import { DragDropContext } from "react-beautiful-dnd"
import React from "react"

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

export const DragDropContextUI = ({children}: DragDropContextType) => {
    const onDragEnd = (result: OnDragEndType) => {
        // if drop to workarea
        if (result?.destination?.droppableId === 'workarea') {
            if (result.draggableId === "text") {
                //show textarea
            }
            if (result.draggableId === "image") {
                //show picture uploader
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