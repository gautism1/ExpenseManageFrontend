import React, {useState} from 'react';

function Addtransaction()
{
const [text,setText]=useState(" ");
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