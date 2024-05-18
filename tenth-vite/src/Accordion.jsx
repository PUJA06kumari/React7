import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) =>
{
    
    return(
        <div>
            <h1>React Accordion</h1>
        <div className="accordion">
            {props.accordionData.map((obj) =>
            (
                <AccordionItem title = {obj.title} content = {obj.content} />
            )
            )}
        </div>
        </div>
        
    )
}
export default Accordion;