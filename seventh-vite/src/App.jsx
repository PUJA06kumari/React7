import './App.css'
import { useState } from 'react'

function App()
{
  const[c,setcount] = useState(0)

  function add()
  {
    if(c>=25)
    {
      alert("Count can't be greater then 25")
    }
    else
    {
      setcount (c+1)
    }
   
  }

  function sub()
  {
    if(c<=0)
    {
      alert("Count can't be less then 0")
    }
    else
    {
      setcount (c-1)
    }
   
  }

  function reset()
  {
   setcount(0)
  }

  return(
    <div className='count'>
      <p>Count : {c}</p>
      <div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default App;