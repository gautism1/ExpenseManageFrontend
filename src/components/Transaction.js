import React ,{useContext}  from 'react';
import '../App.css'; 
import { GlobalContext } from '../context/Globalstate';
 export const Transaction =({transaction})=>
 {
const {deletetrans}=useContext(GlobalContext)
  // const sign=transaction.amount>0?'+':'-';
 
     return (
            <li className= {transaction.amount<0? 'minus': ' plus'}> 
             
            <span className="reason"> {transaction.text} </span> 
             <span className="amount">  { (transaction.amount)}Rs.</span>    
             <span className="date">  { (transaction.createdAt)}Rs.</span>    
                
            <button onClick={()=> deletetrans(transaction._id)}> Close 
            </button>
          </li> 
     );
 }