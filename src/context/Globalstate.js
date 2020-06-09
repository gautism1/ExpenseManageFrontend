import React, { createContext , useReducer } from'react';
import AppReducer from './AppReducer';
//initial state
const initialstate={
  transactions:[
    
  ]
};
export const GlobalContext=createContext(initialstate);
//provider component
export const GlobalProvider=  ({children})  =>  
{
const [state,dispatch]=useReducer(AppReducer,initialstate);

// actions performed
function deletetrans(id)
{
  dispatch({

    type:'delete_this_id',
    payload:id
  });
}
function additem(transaction)
{
  dispatch({

    type:'add this',
    payload:transaction
  });


}
return (   
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deletetrans,
        additem
    }}>
    {children}
    </GlobalContext.Provider>     
);
}
