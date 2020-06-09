import React, {useState,useContext} from 'react';
import { GlobalContext } from '../context/Globalstate';

function Addtransaction()
{
const [text,setText]=useState(" ");
const [amount,setAmount]=useState(0);


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
           Enter the text
             <input type="text" placeholder="  " className="items" value={text} 
             onChange={(e) =>setText(e.target.value)}/>

            Enter Amount       
             <input type="number" placeholder="  "className="items"  value={amount} 
               onChange={(e) =>setAmount(e.target.value)}>
               </input>
               <br></br>
               Mode of payment 
               <br></br>   
              Cash  <input type="radio" name="mode" value="cash"></input>
              Card <input type="radio" name="mode" value="card"></input>  
               
<br></br>
               <button>Add new</button>
           </form>

        </div>



    );
}

export default Addtransaction;