import React from 'react';
import './App.css';
import Income from'./components/income';
import Expenselist from'./components/expenselist';
import  Addtransaction from'./components/Addtransaction';
function App() {
  return (
    <div className="App">
     <h2> Expense Manager</h2>
     <Income/>
     <Expenselist/>
     <Addtransaction/>
    </div>
  );
}

export default App;
