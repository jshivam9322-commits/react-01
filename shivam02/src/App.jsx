import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
const App = () => {
  const user = "UJJAWAL BANSAL"
  return (
    <div>
      <div>
        <h1>hello guys i am {user}</h1>
        <Card />
        <Card />
        <Navbar />
      </div>
      <Card />
      {Card()}
    </div>
  )
}

export default App
