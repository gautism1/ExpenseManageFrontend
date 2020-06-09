import React  from 'react';
import '../App.css'; 

 export const Transaction =( { transaction})=>
 {
   const sign=transaction.amount>0?'+':'-';
     return (

            <li className= {transaction.ammount<0? 'minus': ' plus'}> 
            {transaction.text}  {sign}  {Math.abs(transaction.amount)}Rs.
            <button>  &#9986; 
            </button>
          </li> 

     )
 }