import { data } from "autoprefixer";
import { children, createContext, useState } from "react";

export const CartContext = createContext()
const CartContextProvider = ({children}) => {
    const [Cartitems, setCartitems] = useState([])
    console.log(Cartitems);
    
    const Addtocart  = (Item) => {
        const arr = Cartitems
        const productindex = Cartitems.findIndex((data) => data.id == Item.id);
        console.log(productindex);
        
        if (productindex == -1) {
            Item.quantity = 1;
            arr.push(Item)
            // arr[Item].quantity = 1
        }
            else {
                arr[productindex].quantity++
            }
            setCartitems([...arr])
        } 
        const removeitemfromcart = (id) => {
            const arr = [Cartitems]
            const productindex = Cartitems.findIndex((id) => id == id)
            arr.splice(productindex, 1)
            setCartitems([...arr])
        }
        const isitemadded = (id) => {
            const productindex = Cartitems.findIndex((id) => id == id)
            if (productindex == -1) {
                return null
            }
            else {
                Cartitems[productindex]
            }
        }
    return (
        <CartContext.Provider value={{Addtocart, Cartitems, removeitemfromcart, isitemadded}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider