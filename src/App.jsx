import React from 'react'
import Product from './components/Product'
import Person from './components/Person'
const App = () => {
  return (
    <div>
      <Person name="Arto Hellas" age={22} />
      <Product name="iphone" price={50000} />
    </div>
  )
}

export default App
