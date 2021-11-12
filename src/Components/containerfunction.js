import React from "react";
import {MdDelete} from "react-icons/md";
export function Alltasks(props){
    return (
        <div>
            
           {props.taskofarray.map((element,index)=><div className='middlediv'> <div key={index} className='taskdiv'>{element}
           </div><div key={index*4+2}  onClick={()=>{
               props.delmethod(element);
           }} ><MdDelete/></div></div>)}
        </div>
    )
}