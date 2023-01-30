import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setImage, setIsOpenModalImage } from "../../redux/actions"
import { initialStateI } from "../../redux/reducer"
import { DroppableDnD } from "../drag-n-drop/droppable-DnD"
import { UploaderAndCropper } from "../uploader-photo/uploader"
import altImage from '../../images/alt-image-sidebar.jpeg'
import s from './workarea.module.css'

export const Workarea = () => {
    const dispatch = useDispatch()
    const changeText = useSelector((state: initialStateI) => state.changeText)
    const changeImage = useSelector((state: initialStateI) => state.changeImage)
    const isOpenModalImage = useSelector((state: initialStateI) => state.isOpenModalImage)
    const image = useSelector((state: initialStateI) => state.image)

    return (
        <DroppableDnD droppableId='workarea'>
            <div className={s.workarea}>
                <div className={s.textareaBlock}>
                    {changeText &&
                        <textarea placeholder="rewrew" className={s.textarea}/>}
                </div>
                <div className={s.imageBlock}>
                    {changeImage && <>
                        <img
                            onClick={() => dispatch(setIsOpenModalImage(true))}
                            src={image ? image : altImage}
                            className={s.image} />
                        <>
                            {isOpenModalImage && <UploaderAndCropper
                                setOpen={(value: boolean) => dispatch(setIsOpenModalImage(value))}
                                setUploaderImage={(value: string) => dispatch(setImage(value))} />}
                        </>
                    </>}
                </div>
            </div>
        </DroppableDnD>
    )
}