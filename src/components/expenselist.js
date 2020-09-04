import React,  { useContext ,useEffect}  from 'react';
import { GlobalContext } from '../context/Globalstate';
import {Transaction} from './Transaction';
 
  const  Expenselist= () =>
{
  const {transactions} =useContext( GlobalContext );
  const {getTransaction} = useContext(GlobalContext);
 
  useEffect(() => {
    getTransaction();
  },[]);
  return(
         <div className="expenses">   History 
         <h3><span className="reason"> Reason</span > 
             <span className="amount">Amount  </span></h3>
       <ul>
         {transactions.map( (transaction, index) =>  
         ( <Transaction key={index} transaction={transaction}/>  ) )
         }        
        </ul>
        </div>
    );
} 
export  default Expenselist;