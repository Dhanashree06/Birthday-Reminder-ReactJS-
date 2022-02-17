import './App.css';
import React,{useState} from 'react';
import ListComponent from './ListComponent';
import Data from './Data';

function App() {
  const[people,setPeople] =useState(Data)
  return (
    <div className="App">
      
       <h1>Birthday Reminder</h1>    

        <div className='Container'>
          <h2> {people.length} Birthday's Today</h2> 
          
          <ListComponent people={people}/>
          
          <button onClick={()=>setPeople([])} className='Button'>Clear All</button>
          
        </div>  

    </div>
   
  );
}

export default App;
