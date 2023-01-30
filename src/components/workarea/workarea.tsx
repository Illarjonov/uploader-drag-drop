import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setImage, setIsOpenModalImage, setText } from "../../redux/actions"
import { initialStateI } from "../../redux/reducer"
import { DroppableDnD } from "../drag-n-drop/droppable-DnD"
import { UploaderAndCropper } from "../uploader-photo/uploader"
import altImage from '../../images/alt-image-workarea.jpeg'
import s from './workarea.module.css'
import { useEffect, useState } from "react"

export const Workarea = () => {
    const dispatch = useDispatch()
    const changeText = useSelector((state: initialStateI) => state.changeText)
    const changeImage = useSelector((state: initialStateI) => state.changeImage)
    const isOpenModalImage = useSelector((state: initialStateI) => state.isOpenModalImage)
    const image = useSelector((state: initialStateI) => state.image)
    const text = useSelector((state: initialStateI) => state.text)
    const [textarea, setTextarea] = useState(() => text)

    //debouce input
    useEffect(() => {
        const timeOutId = setTimeout(() => dispatch(setText(textarea)), 700)
        return () => clearTimeout(timeOutId)
    }, [textarea, dispatch])

    return (
        <DroppableDnD droppableId='workarea'>
            <div className={s.workarea}>
                <div className={s.textareaBlock}>
                    {changeText &&
                        <textarea
                            onChange={e => setTextarea(e.target.value)}
                            placeholder="Send text. Textarea use debounce 0.7 ms"
                            className={s.textarea} />}
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