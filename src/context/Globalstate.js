import React, { createContext , useReducer } from'react';

import AppReducer from './AppReducer';
//initial state

const initialstate={
  transactions:[
   {id :1,text:'flower',amount:-20},
   {id :2,text:'CAneen',amount:300},
   {id :3,text:'biscuits',amount:-10},
   {id :4,text:'poty',amount:-150}
  ]
};

export const GlobalContext=createContext(initialstate);
//provider component

export const GlobalProvider=  ({children})  =>  
{

const [state,dispatch]=useReducer(AppReducer,initialstate);

return (   
    <GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
    {children}
    </GlobalContext.Provider>     
);
}
