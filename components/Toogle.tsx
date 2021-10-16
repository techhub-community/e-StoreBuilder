import React,{useEffect,useState} from 'react'
import { useTheme } from 'next-themes';

function Toogle(props) {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);


    return (
        <>
          <button className="flex mt-2"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {mounted && theme === 'dark' ? (
          <p className="text-lg px-3 py-1 rounded-lg dark:bg-white dark:text-black cursor-pointer">Toogle Light</p>
        ) : (
          <p className="text-lg bg-gray-800 text-white px-3 py-1 rounded-lg cursor-pointer" >Toggle Dark</p>)
        }
            {props.children}
        </button>  
        </>
    )
}

export default Toogle
