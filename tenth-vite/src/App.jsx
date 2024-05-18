import React from "react"
import Accordion from "./Accordion";
function App()
{

const accordionData = [
  {
  title : 'Section 1',
  content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas illo natus delectus, consequuntur accusantium quaerat placeat nihil iusto nemo beatae vel? Molestiae doloremque amet vel, assumenda officia tempora eveniet?`
 },
 {
  title : 'Section 2',
  content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas illo natus delectus, consequuntur accusantium quaerat placeat nihil iusto nemo beatae vel? Molestiae doloremque amet vel, assumenda officia tempora eveniet?`
 },
 {
  title : 'Section 3',
  content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas illo natus delectus, consequuntur accusantium quaerat placeat nihil iusto nemo beatae vel? Molestiae doloremque amet vel, assumenda officia tempora eveniet?`
 },
 {
  title : 'Section 4',
  content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas illo natus delectus, consequuntur accusantium quaerat placeat nihil iusto nemo beatae vel? Molestiae doloremque amet vel, assumenda officia tempora eveniet?`
 },
 {
  title : 'Section 5',
  content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas illo natus delectus, consequuntur accusantium quaerat placeat nihil iusto nemo beatae vel? Molestiae doloremque amet vel, assumenda officia tempora eveniet?`
 },
]

  return(
   <div>
    <Accordion  accordionData = {accordionData} />
   </div>
  )
}
export default App;