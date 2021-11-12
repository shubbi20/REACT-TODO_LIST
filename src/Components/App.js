import React from 'react';
import { useState } from 'react';
import {Alltasks} from './containerfunction';
import '../index.css';

export function Upper(){

const[text, setText]=useState("");
const[taskarray, setTaskarray]= useState([]);
const changeText=(event)=>{
     event.preventDefault();
     setText(event.target.value);
}

const submitTask=(event)=>{
    if(!text.trim()){
        event.preventDefault();
        alert('add something');
    }else{
    event.preventDefault();
    setTaskarray(currentArray => [...currentArray, text]);
    setText("");
    }
}
const deleten =(element)=>{
    
// const array1= taskarray.filter((ele)=>element!==ele);
setTaskarray((taskarray)=>{ return taskarray.filter((ele)=>{return ele!==element 
});
});
}

    return(
        <div>
          <div className='heading'>TODO-LIST</div>
          <form className='formsec'>
             <input type='text' className='textsec' value={text} placeholder='today task' onChange={changeText}/> 
             <input type='submit' className='textsubmit' value="ADD" onClick={submitTask} />
  
          </form>
          <Alltasks taskofarray={taskarray} delmethod={deleten}/>
           
        </div>
        
    )
}