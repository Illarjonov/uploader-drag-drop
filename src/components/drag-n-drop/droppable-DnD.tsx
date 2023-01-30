import {
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
} from "react-beautiful-dnd"


type DroppabaleType = {
    children?: React.ReactNode;
    droppableId: string
    isDropDisabled?: boolean
}

export const DroppableDnD = ({ children, droppableId, isDropDisabled }: DroppabaleType) => <>
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef}>
                {children}

                {/* to fix warnings from lib */}
                <span style={{ display: 'none' }}>
                    {provided.placeholder}
                </span>
            </div>
        )}
    </Droppable>
</>