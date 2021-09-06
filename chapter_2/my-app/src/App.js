import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  handleClick=()=>{
    try {
      const response = await axios.post('http://localhost:3000/students');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <form>
        <label>
          Name:
          <input type="text" name="Student Name" placeHolder="Enter your name" />
        </label>
          <input type="submit" value="Submit" onSubmit={handleClick} />
      </form>
    </div>
  )
}

export default App;
