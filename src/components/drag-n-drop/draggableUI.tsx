import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
} from "react-beautiful-dnd";

type DraggbleType = {
    children?: React.ReactNode;
    name: string;
    index: number;
}

export const DraggableUI = ({ name, index, children }: DraggbleType) => <>
    <Draggable key={name} draggableId={name} index={index}>
        {(provided: DraggableProvided | any, snapshot: DraggableStateSnapshot) => (
            <div style={{ margin: 10 }}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                {children}
            </div>
        )}
    </Draggable>
</>