import { useEffect, useState } from "react";
import './App.css'
import axios from 'axios'


function App()
{

  const [quote,setQuote] = useState('')
  const [author,setAuthor] = useState('')
  const [btnClick,setBtnClick] = useState(0)
  const [background,setBackground] = useState('#000000')
  const [countDown,setCountDown] = useState(0)

  useEffect(() => 
  {
   
    axios.get('https://api.quotable.io/random')
    .then((data) => 
    {
      setQuote(data.data.content)
      setAuthor(data.data.author)
    })
  },[btnClick])

// for Updating Quotes

   function updateQuote()
   {
     setTimeout(() =>
     {
      if(countDown === 5)
      {
        setBtnClick(btnClick+1)
      }
     },1000)
   }
   updateQuote();
  

// For Changing Color on Every 5 sec


  function colorchange()
  {
    setTimeout(() =>
    {
      if(countDown === 5)
        {
          setBackground("#" +Math.round(Math.random()*10000000).toString(16))
          document.body.style.backgroundColor = "#" +Math.round(Math.random()*10000000).toString(16)
        }
    },1000)
  } 
  colorchange();

// countDown

   function count()
   {
     setTimeout(() => 
     {
      if(countDown === 5)
        {
          setCountDown(0)
        }
      else
      {
        setCountDown(countDown+1)
      }
     },1000)
   }
   count();


return(
  <div className="main">
   <h1 onClick={() => setCountDown(countDown+1)} >Coun Down : {countDown} </h1>
   <h1>Quotes Management System</h1>
  <div>
  <div style={{backgroundColor:background}} className="motivation"><br></br>
    <blockquote> {quote}     </blockquote>
    <cite>  -{author}   </cite> <br></br><br></br>
    <button onClick={() => setBtnClick(btnClick+1)} >  Refresh  </button> <br></br> <br></br>
    <button onClick={() => setBackground("#" +Math.round(Math.random()*10000000).toString(16))} >Change Background Color </button> <br></br> <br></br>
   </div>
  </div>
  </div>
)



}
export default App;