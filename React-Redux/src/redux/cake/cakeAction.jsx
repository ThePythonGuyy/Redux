import {BUY_CAKE} from './cakeTypes'

export const buyCake = (payload=1) => {
    return {
        type: BUY_CAKE,
        payload,
    }
}