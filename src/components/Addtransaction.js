import React, {useState} from 'react';

function Addtransaction()
{
const [text,setText]=useState("");
const [amount,setAmount]=useState(0);

    return(

         <div className="adding ">

           <form>
           Enter the text
             <input type="text" placeholder="  " className="items" value={text} 
             onChange={(e) =>setText(e.target.value)}/>

            Enter Amount       
             <input type="number" placeholder="  "className="items"  value={amount} 
               onChange={(e) =>setAmount(e.target.value)}>
               </input>
               
               <button>Add the expense now</button>
           </form>

        </div>



    );
}

export default Addtransaction;