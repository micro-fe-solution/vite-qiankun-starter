import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@/routes'

export const App = () => {
  return (
    <BrowserRouter basename="video-monitor">
      <Routes />
    </BrowserRouter>
  )
}
