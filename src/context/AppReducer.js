export default (state,action)=> {
    switch(action.type)
    {
        case 'delete_this_id':
           return {

               ...state,
               transactions:state.transactions.filter(transaction => transaction.id !==action.payload)
           }
           case 'add this':
           return {
                ...state,
                transactions:[action.payload,...state.transactions]
           }
        default:
            return state;
    }
}     