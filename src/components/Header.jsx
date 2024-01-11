import Darkmode from "../icons/Darkmode"
import { useState, useEffect } from 'react'

const Header = () => {

  const [theme, setTheme] = useState(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return "dark"
    }
    return "light"
  })

  useEffect(() => {
   if (theme == 'dark') {
    document.querySelector('html').classList.add('dark')
   } else{ 
    document.querySelector('html').classList.remove('dark')
   }
  }, [theme])
  

  const handledChangeTheme = () =>{
    setTheme(prevTheme => prevTheme == "light"? "dark": "light")
  }

  return (
    <div className= " dark:bg-neutral-900">
      <h1 className="text-center mb-10 text-4xl font-bold text-black dark:text-white relative top-4 ">Rick and morty charters</h1>
      <div className="w-full flex justify-between items-center">
        <div className="flex w-44">
          <button className="text-4xl flex ml-5" onClick={handledChangeTheme}><Darkmode/></button>
        </div>
        <nav className="flex flex-row justify-between text-2xl w-3/5 mr-5 gap-x-10">
          <ul className="flex list-none">
            <li className="mr-4 text-black dark:text-white"><a href="#">Inicio</a></li>
            <li className="mr-4  text-black dark:text-white"><a href="#personajes">Personajes</a></li>
            <li className="mr-4  text-black dark:text-white"><a href="#episodios">Ver episodios</a></li>
          </ul>
        </nav>
      </div>


    </div>
  )
}

export default Header
