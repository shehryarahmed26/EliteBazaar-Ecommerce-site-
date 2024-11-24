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
        const decreasequantity  = (id) => {
            const arr = Cartitems
            const productindex = Cartitems.findIndex((data) => data.id == id);
            if (arr[productindex].quantity > 0) {
                arr[productindex].quantity--           
                setCartitems([...arr])
            }
            } 
        const removeitemfromcart = (id) => {
            const arr = Cartitems
            const productindex = Cartitems.findIndex((data) => data.id == id)
            console.log('remove', productindex);
            
            arr.splice(productindex, 1)
            setCartitems([...arr])
        }
        const addquantity = (item) => {
            item.quantity++
        }
        const isitemadded = (id) => {
            const productindex = Cartitems.findIndex((data) => data.id == id)
            console.log('Addtocart>>', productindex);
            
            if (productindex == -1) {
                return null
            }
            else {
                return Cartitems[productindex]
            }
        }
    return (
        <CartContext.Provider value={{Addtocart, Cartitems, removeitemfromcart, isitemadded, addquantity, decreasequantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider