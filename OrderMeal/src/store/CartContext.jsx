import { createContext, useState, useReducer } from "react";

const CartContext = createContext({
    items : [],
    addItem : (item) => {},
    removeItem : (item) => {},
    isOpen : false,
    totalAmount : 0
});

export const CartContextProvider = ({children}) => {
    
    const [cart, dispatchCart] = useReducer((state,action)=>{
        const idx = state.items.findIndex(item=>item.id===action.item.id);

        if(action.type==="ADD_ITEM"){
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

    const totalAmount = cart.items.reduce((acc,cur) => acc+(cur.price*cur.count), 0);

    const cartContext = {
        items : cart.items,
        totalAmount,
        addItem,
        removeItem
    };

    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
};

export default CartContext;

