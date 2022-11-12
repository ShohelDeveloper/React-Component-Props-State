import { useState } from "react"

const ProductListItem = ({productName,stock}) => {
    const [state, setState] = useState(0)
    const increment = () => {
        if (state < stock) {
            setState(state+1)
        }
    }

    const decrement = () => {
        if (state > 0) {
            setState(state-1)
        }
    }
    return (
        <div>
          
            <p>{ productName}</p>
            <p>{state} / { stock}</p>
       <div>
       <button onClick={increment} disabled={state ==stock}>Increment</button>
       <button onClick={decrement} disabled={state ===0}>Decrement</button>
       </div>
   </div>
    )
}


const MultipleState = () => {
   
    return (
     
        <div>
          <ProductListItem productName="Mouse" stock="5"/>
            <ProductListItem productName="Printer" stock="17"/>
        
        </div>
    )
}

export default MultipleState