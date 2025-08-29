import { useState } from 'react'
import Header from './components/header'
import ListaProdutos from './components/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ListaProdutos />
    </>
  )
}

export default App
