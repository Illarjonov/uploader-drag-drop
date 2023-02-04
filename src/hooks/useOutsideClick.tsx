import { useCallback, useEffect } from "react"
import { useRef } from "react"

//callback its close function
export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<any>(null)
    
    const onKeypress = useCallback((e: any) => e.keyCode === 27 && callback(), [callback])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!ref?.current?.contains(event.target)) {
                callback()
            }
        }

        document.addEventListener('keypress', onKeypress)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keypress', onKeypress)
        }
    }, [ref, onKeypress, callback])
    return ref
}