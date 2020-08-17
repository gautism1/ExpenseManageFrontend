import React,  { useContext ,useEffect}  from 'react';
import { GlobalContext } from '../context/Globalstate';
import {Transaction} from './Transaction';
 
  const  Expenselist= () =>
{
  const {transactions,getTransaction} =useContext( GlobalContext );

useEffect(()=>
{
  console.log(getTransaction());
  getTransaction().then((res)=>{
    console.log('response', res)
  })
} ,[transactions]
);

   console.log('>>>>>',transactions);
    return(
         <div className="expenses">   History 
         <h3><span className="reason"> Reason</span >    <span className="amount">Amount  </span></h3>
       <ul>
         {transactions.map(transaction =>  
         ( <Transaction key={transaction.id} transaction={transaction}/>  ) )
         }        
        </ul>
        </div>
    );
}


export  default Expenselist;