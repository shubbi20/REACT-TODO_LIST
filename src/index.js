import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Upper} from './Components/App';


class Todo extends React.Component{
render(){
  return(
 <div className="todobox">
   <div className='container'>
    <Upper/>

  </div>

 </div>

  )
}

}

ReactDOM.render(
  <Todo/>,
  document.getElementById('root')
);
