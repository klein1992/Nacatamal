import { CartItem } from "./CartItem"
import { CART_ITEMS } from "../cart_items";

export const CartItemsContainer = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {CART_ITEMS.map((item, index) => (
                <CartItem item={item} key={index} />
            ))}
        </div>
    )
}