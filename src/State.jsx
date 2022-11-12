/**
 * State 
 *  - যে Data দিয়ে UI change  করা হয়, সেটাই হলো State. আর সেটা useState State Create করে।
 */

import { useState } from "react"

const State = () => {
   const [state, setState] = useState(0)
    const increment = () => {
        if (state < 10) {
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
            <h1>Count:{state}</h1>
            <div>
            <button onClick={increment} disabled={state ===10}>Increment</button>
            <button onClick={decrement} disabled={state ===0}>Decrement</button>
            </div>
            {state >= 10 && (
                <div>
                    <p>Limit Reached</p>
                </div>
           )}
        </div>
    )
}

export default State