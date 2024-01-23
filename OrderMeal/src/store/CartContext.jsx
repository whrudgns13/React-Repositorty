import { createContext, useReducer } from "react";

const CartContext = createContext({
    items : [],
    addItem : (item) => {},
    removeItem : (item) => {},
    clearCart : () =>{},
    totalAmount : 0,
});

export const CartContextProvider = ({children}) => {
    
    const [cart, dispatchCart] = useReducer((state,action)=>{

        if(action.type==="ADD_ITEM"){
            const idx = state.items.findIndex(item=>item.id===action.item.id);
            const updateItems = [...state.items];
            if(idx>-1){
                updateItems[idx] = {
                    ...updateItems[idx],
                    count : updateItems[idx].count+1 
                };
            }else{
                updateItems.push({...action.item, count : 1})
            }

            return {
                ...state,
                items : updateItems
            };
        }

        if(action.type==="REMOVE_ITEM"){
            const idx = state.items.findIndex(item=>item.id===action.item.id);
            const updateItems = [...state.items];
            
            if(updateItems[idx].count===1){
                updateItems.splice(idx,1);
            }else{
                updateItems[idx] = {
                    ...updateItems[idx],
                    count : updateItems[idx].count-1
                }
            }

            return {
                ...state,
                items : updateItems
            };
        }

        if(action.type==="CLEAR_CART"){
            return {items : []};
        }

        return state;
    },{
        items : []
    });

    const addItem = (item) => {
        dispatchCart({item, type : 'ADD_ITEM'})
    };

    const removeItem = (item) => {
        dispatchCart({item, type : 'REMOVE_ITEM'})
    };

    const clearCart = (item) => {
        dispatchCart({item, type : 'CLEAR_CART'})
    };

    const totalAmount = cart.items.reduce((acc,cur) => acc+(cur.price*cur.count), 0);

    const cartContext = {
        items : cart.items,
        totalAmount,
        addItem,
        removeItem,
        clearCart
    };

    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
};

export default CartContext;

