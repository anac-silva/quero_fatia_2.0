import { useState } from 'react'
import Header from './components/header'
import ListaProdutos from './components/section'

function App() {
  const produtos = [
    {
      nome: 'Bombom de uva',
      descricao: 'Fatia de ninho com nutella e morango.',
      valor: 'R$ 7,00',
    },
    {
      nome: 'Coxinha brigadeiro',
      descricao: 'Coxinha de morango envolto por delicioso brigadeiro feito com chocolate belga.',
      valor: 'R$ 8,00'
    },
  ]

  return (
    <section className="bg-[#DBD2B4]">
      <Header/>
      <ListaProdutos produtos={produtos}/>
      
    </section>
  )
}

export default App
