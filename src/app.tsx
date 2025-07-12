import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Room } from './pages/room'
import { CreateRoom } from './pages/create-room'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index/>
        <Route element={<Room />} path='/room'/>
      </Routes>
    </BrowserRouter>
  )
}

