import './App.css'
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Counter Application</h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
         
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count -1)}
        >
          Decrement
         
        </button>
        <p> Count is {count}</p>

        <button
          type="button"
          className="counter"
          onClick={() => setCount(0)}
        >
         Reset
         
        </button>
      </section>

      
      

      
    </>
  )
}

export default Counter
