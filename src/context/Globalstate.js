import React, { createContext , useReducer } from'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//initial state
const initialstate={
  transactions:[],
  error:null,
  loading:true
};
export const GlobalContext=createContext(initialstate);
//provider component

export const GlobalProvider=  ({children})  =>  
{
const [state,dispatch]=useReducer(AppReducer,initialstate);

async function getTransaction()
{
  try{
    const res=await axios.get(`/api/v1/transactions`);
    dispatch({
      type:'get_transaction',
      payload:res.data.data
    });
  }
  catch(err)
  {
    console.log(err)
     dispatch({
      type:'transaction_error',
      payload:err.res
    });
  }
} 
 async function deletetrans(id)
{
  try{
  
  axios.delete(`/api/v1/transactions/${id}`)
   .then((data)=>{
 console.log("after success")
    // getTransaction();

dispatch({
    type:'delete_this_id',
    payload:id
  });


   }).catch((err)=>{
     console.log("Errorrrrrrr")
     alert("Something went wrong , Please check backend")
   });

}
catch(err)
{
  dispatch({
    type:'Transaction_error',
    payload:err.response.data.error
  });
}
}
 async function additem(transaction)
{
  axios.post(`/api/v1/transactions`,transaction)
  .then((res)=>{
  console.log("After adding>>>",res.data.data)
  
dispatch({
    type:'add_this',
    payload:res.data.data
  });
  })
  .catch((err)=>{
    alert("Something went wrong in addition")
  })



  
}

return (   
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading,
        getTransaction,
        deletetrans,
        additem
    }}>
    {children}
    </GlobalContext.Provider>     
);
}
