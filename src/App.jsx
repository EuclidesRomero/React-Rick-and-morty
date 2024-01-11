import './index.css'

import Personaje from "./components/Personaje"
function App() {
  return (
    //TODO:mejorar modo oscuro
    <div className='dark:bg-neutral-900'>
    <Personaje />
    </div>
  )
}

export default App
