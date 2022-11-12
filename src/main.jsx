import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ComponentState'
import State from './State'
import MultipleState from './MultipleState'
 import Product from './Product'
// below we use this production level

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
    <State />
    <MultipleState />
    <Product/>
  </React.StrictMode>
)

// now we use below system for development purpos

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

