import React, {useState,useContext} from 'react';
import { GlobalContext } from '../context/Globalstate';

function Addtransaction()
{
const [text,setText]=useState( );
const [amount,setAmount]=useState();


const {additem}=useContext(GlobalContext);

  const  onsubmit=(e) =>{

    e.preventDefault();

    const newtrans={
  id:Math.floor(Math.random()*10000000),text,
  amount:+amount 

    }

    additem(newtrans); 
  }
    return(


         <div className="adding ">

           <form onSubmit={onsubmit}>
      <table>
      <tr>
      
        <td>   Purpose of payment </td>
        <td>     <input type="text" placeholder="Reason" className="items" value={text} 
             onChange={(e) =>setText(e.target.value)}/>
              
             </td>
      </tr>       
 <tr>
          <td>  Amount of payment(-ve for spent,+ve for earned)  </td>
         <td>    <input type="number" placeholder="Amount" className="items"  value={amount} 
               onChange={(e) =>setAmount(e.target.value)}> 
               </input> 
               </td>
               </tr>
               </table>
               
               <br></br>
             
               <br></br>   
              
               
<br></br>
               <button>Add new</button>
           </form>

        </div>



    );
}

export default Addtransaction;