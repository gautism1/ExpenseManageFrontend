import React,  { useContext }  from 'react';
import { GlobalContext } from '../context/Globalstate';
import {Transaction} from './Transaction';
 
  const  Expenselist= () =>
{
  const {transactions} =useContext( GlobalContext );
   console.log(transactions)
    return(
         <div className="expenses">
         <h3>History</h3>
       <ul>
         {transactions.map(transaction =>  
         ( <Transaction key={transaction.id} transaction={transaction}/>  ) )
         }        
        </ul>
        </div>
    );
}


export  default Expenselist;