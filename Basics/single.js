// Single Reducer

const redux = require('redux')
const createStore = redux.legacy_createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const BUY_BOTH = 'BUY_BOTH'


//ACTION
function buyCake() {
    return{
        type: BUY_CAKE,
        info: 'First redux action',
    }
}

function buyIcecream() {
    return{
        type: BUY_ICECREAM,
        info: 'Second redux action',
    }
}

function buyBoth() {
    return {
        type: BUY_BOTH,
        info: 'Third redux action' 
    }
}



// Initializing state
// (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
    numOfIcecream : 15,
    
}

const reducer = (state = initialState, action) => {
    // console.log(action.type)
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        } 

        case BUY_ICECREAM : return{
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }

        case BUY_BOTH : return{
            ...state,
            numOfCakes: state.numOfCakes - 1,
            numOfIcecream: state.numOfIcecream - 1
        }

        default: return state
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

console.log('Buying Cake')
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

console.log('Buying Icecream')
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

console.log('Buying Both')
store.dispatch(buyBoth())
store.dispatch(buyBoth())
store.dispatch(buyBoth())