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
// actions performed
async function getTransaction()
{
  try{
    const res=await axios.get(`/api/v1/transactions`);
    console.log(">>>",res.data);
    dispatch({
      type:'get_transaction ',
      payload:res.data.data
    });
  }
  catch(err)
  {
    console.log(err)
     dispatch({
      type:' transaction_error ',
      payload:err.res
    });
  }
} 
 async function deletetrans(id)
{
  try{
    await axios.delete(`/api/v1/transaction/${id}`);  
  dispatch({
    type:'delete_this_id',
    payload:id
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

  const res=await axios.post(`/api/v1/transactions`,transaction);
  console.log("After adding>>>",res)

  dispatch({

    type:'add_this',
    payload:res
  });
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
