import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Room } from './pages/room'
import { CreateRoom } from './pages/create-room'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index/>
          <Route element={<Room />} path='/room/:roomId'/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

