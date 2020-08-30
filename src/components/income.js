import React,{ useContext} from 'react';
 import '../App.css';
import { GlobalContext } from '../context/Globalstate';
const Income=()=>
{
const {transactions} =useContext( GlobalContext );

const amounts=transactions.map(transaction=>transaction.amount)

const total =amounts.reduce((acc,item)=> (acc+=item),0).toFixed(2);

const earned=amounts.filter(item=> item >0)
                   .reduce((acc,item) =>(acc+=item),0)
                    .toFixed(2);

const spent= earned-total 
               
    return(
         <div className="income">  
           <div className="items a">
               Now i have<h2>${total}</h2>
          </div>    
           <div className="items b">
                Total earned<h2>${earned} </h2>
          </div>   
           <div className="items c">
                Total i spent<h2>$ {spent} </h2>
          </div>       
          </div>
    );
}

export default Income;