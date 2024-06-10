import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext()

export const CartProvider = ({children}) => {

   const initialState = {
    cartItems : [
        // {
        //     "id": 1,
        //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        //     "price": 109.95,
        //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        //     "category": "men's clothing",
        //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        //     "rating": {
        //       "rate": 3.9,
        //       "count": 120
        //     }
        //   },
         
    ],
   }

 const [state , dispatch] = useReducer (CartReducer , initialState)

    return (
        <CartContext.Provider value={{...state , cartDispatch: dispatch}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;