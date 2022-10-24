import { HashRouter } from 'react-router-dom'
import { Routes } from '@/routes'

export const App = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  )
}
