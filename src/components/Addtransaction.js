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
          Purpose of payment  
            <input type="text" placeholder="Reason" className="items" value={text} 
             onChange={(e) =>setText(e.target.value)}/>
              
               <br></br>
             
           Amount of payment(-ve for spent,+ve for earned)   
             <input type="number" placeholder="Amount" className="items"  value={amount} 
               onChange={(e) =>setAmount(e.target.value)}> 
               </input> 
             
               <br></br>   
              
               
<br></br>
               <button>Add new</button>
           </form>

        </div>



    );
}

export default Addtransaction;