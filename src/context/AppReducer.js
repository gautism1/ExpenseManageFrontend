export default (state,action)=> {
    switch(action.type)
    {
        case 'get_transaction':
          return { ...state,
           loading:false,
           transactions:action.payload
          }
        case 'delete_this_id':
           return {

               ...state,
               transactions:state.transactions.filter(transaction => transaction._id !==action.payload)
           }
           case 'add this':
           return {
                ...state,
                transactions:[...state.transactions,action.payload]
           }
           case 'tansaction_error':
           console.log("action payload",action.payload)
           return {
               ...state ,
               error:action.payload
           }
        default:
            return state;
    }   
}     