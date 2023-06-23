import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (payload=1) => {
    return {
        type: BUY_ICECREAM,
        payload,
    }
}