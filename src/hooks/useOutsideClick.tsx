import { useEffect } from "react"
import { useRef } from "react"

export const useOutsideClick = (callback: ()=> void) => {
    const ref = useRef<any>()
    const close = () =>  callback()
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!ref?.current?.contains(event.target)) {
                close()
            }
        }

        const onKeypress = (e: any) => e.keyCode === 27 && close()

        document.addEventListener('keypress', onKeypress)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keypress', onKeypress)
        }
    }, [ref, close])
    return ref
}