import '../index.css'
import { Player } from '../components/Player'
import { Nav } from '../components/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col h-screen'>
      <Nav></Nav>
      <div className='mx-auto mt-8 flex-grow w-full md:w-8/12 lg:w-6/12 px-2'>
        <Outlet></Outlet>
      </div>
      <Player />


    </div>

  )
}



export default App
