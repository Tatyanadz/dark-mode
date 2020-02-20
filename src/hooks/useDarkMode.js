import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [enable, setEnable] = useLocalStorage('disable', false);

    useEffect(() => {
        if (enable === false) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [enable])

    return [enable, setEnable]
}
