import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages/Home'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
  
    <Home/>
  )
}
