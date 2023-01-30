import { useRef, useState, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { centerCrop } from "react-image-crop"
import ReactCrop from "react-image-crop"
import { makeAspectCrop } from "react-image-crop"
import { useOutsideClick } from "../../hooks/useOutsideClick"
import { CloseIcon } from "../../images/close-icon"
import { CropperIcon } from "../../images/cropper-icon"
import styles from './uploader.module.css'
import 'react-image-crop/dist/ReactCrop.css'

type CropperType = {
    setOpen: (value: boolean) => void;
    setUploaderImage: (value: any) => void;
}

type CropOption = {
    height: number;
    unit: "%" | "px";
    width: number;
    x: number;
    y: number;
}

export const UploaderAndCropper = ({ setOpen, setUploaderImage }: CropperType) => {
    //acpect (5/5, 16/9), use resize cropp zone
    const acpectParam = 16 / 9
    const [aspect, setAspect] = useState<number | undefined>(acpectParam)

    const [imgSrc, setImgSrc] = useState('') //dropper src

    const imgRef = useRef<any>(null)
    const previewCanvasRef = useRef<any>(null)

    const [crop, setCrop] = useState<CropOption | undefined>(undefined)
    const [completedCrop, setCompletedCrop] = useState<CropOption | undefined>(undefined)

    console.log(completedCrop, crop)
    //zoom 
    const scale = 1
    //rotation
    const rotate = 0
    //hardcode value for reuse components

    // close click outside hook
    const closeref = useOutsideClick(() => setOpen(false))

    // default options
    function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
        return centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                aspect,
                mediaWidth,
                mediaHeight,
            ),
            mediaWidth,
            mediaHeight,
        )
    }

    //cut image
    function onImageLoad(e: any) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }
    //cropped hooks
    function useDebounceEffect(fn: () => void, waitTime: number, deps: [CropOption | undefined, number, number] | []) {
        useEffect(() => {
            // @ts-ignore: Unreachable code error
            const t = setTimeout(() => fn.apply(undefined, deps), waitTime)
            return () => clearTimeout(t)
        }, deps)
    }
    // using crop hooks
    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
            }
        },
        100,
        [completedCrop, scale, rotate],
    )

    // //set acpect
    // function handleToggleAspectClick() {
    //     if (aspect) {
    //         setAspect(undefined)
    //     } else if (imgRef.current) {
    //         const { width, height } = imgRef.current
    //         setAspect(acpectParam)
    //         setCrop(centerAspectCrop(width, height, acpectParam))
    //     }
    // }

    //ref to blob, blob to base64 and setting to workarea
    function photoUploadHandler() {
        previewCanvasRef.current.toBlob(
            (blob: any) => {
                const reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onloadend = function () {
                    const base64data = reader.result
                    setUploaderImage(base64data)
                    setOpen(false)
                }
            },
            'image/png',
            1
        )
    }

    //dropzone function
    const acceptFile = (files: any) => {
        const reader = new FileReader()
        if (files && files.length > 0) {
            setCrop(undefined) // 
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(files[0])
        }
        reader.onload = (readerEvent: any) => setImgSrc(readerEvent.target.result)

    }

    // dropzone params
    const { getRootProps, getInputProps } = useDropzone({
        //drag and drop functionality
        maxFiles: 1,
        noClick: true,
        noKeyboard: true,
        accept: { //only image
            'image/jpeg': [],
            'image/png': []
        },
        onDrop: (files) => acceptFile(files)
    })

    return (
        <div className={styles.avatarRelative}>
            <div className={styles.avatarModal} ref={closeref}>    {/* closeref => close click outside hook*/}
                <div className={styles.closeBlock}>
                    <div onClick={() => setOpen(false)} style={{ cursor: 'pointer' }}>
                        <CloseIcon />
                    </div>
                </div>
                <div className={styles.photoBlock}>
                    {!!imgSrc ? ( //dpopper img
                        <div className={styles.cropperZone}>
                            <ReactCrop
                                crop={crop}
                                onChange={(percentCrop: any) => setCrop(percentCrop)}
                                onComplete={(c: any) => setCompletedCrop(c)}
                                aspect={aspect}
                            >
                                <img
                                    ref={imgRef}
                                    alt="Crop me"
                                    src={imgSrc}
                                    onLoad={onImageLoad} />
                            </ReactCrop>
                        </div>
                    )
                        : <div {...getRootProps()}> {/* here dropzone*/}
                            <label htmlFor="profilePhotoUpload" className={styles.dropzone}>
                                <div className={styles.initialPhoto}>
                                    <div className={styles.icon}> <CropperIcon /> </div>
                                    <div className={styles.iconText}> Select a file </div>
                                </div>
                            </label>
                            <input
                                {...getInputProps()}
                                type="file"
                                id="profilePhotoUpload"
                            />
                        </div>}
                </div>
                {!!completedCrop && (
                    <div className={styles.newAvatarWithButtons}>
                        <div className={styles.croppedAvatarPreview}>
                            <canvas
                                ref={previewCanvasRef}
                                className={styles.newAvatarCover} />
                        </div>
                        <div className={styles.buttonsContainer}>
                            <div className={styles.buttonAccept}
                                onClick={photoUploadHandler}>
                                ACCEPT
                            </div>
                            <div className={styles.buttonCancel}
                                onClick={() => setOpen(false)}>
                                CANCEL
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

const TO_RADIANS = Math.PI / 180

async function canvasPreview(
    image: any,
    canvas: any,
    crop: any,
    scale = 1,
    rotate = 0,
) {
    const ctx = canvas.getContext('2d')

    if (!ctx) {
        throw new Error('No 2d context')
    }

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio
    // const pixelRatio = 1

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

    ctx.scale(pixelRatio, pixelRatio)
    ctx.imageSmoothingQuality = 'high'

    const cropX = crop.x * scaleX
    const cropY = crop.y * scaleY

    const rotateRads = rotate * TO_RADIANS
    const centerX = image.naturalWidth / 2
    const centerY = image.naturalHeight / 2

    ctx.save()

    // 5) Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY)
    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY)
    // 3) Rotate around the origin
    ctx.rotate(rotateRads)
    // 2) Scale the image
    ctx.scale(scale, scale)
    // 1) Move the center of the image to the origin (0,0)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
    )

    ctx.restore()
}


