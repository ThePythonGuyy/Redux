// Multiple Reducer

const redux = require('redux')

const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
const bindActionCreators = redux.bindActionCreators

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'



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





// Initializing state
// (previousState, action) => newState

const initialStateCake = {
    numOfCakes: 10,
}

const initialStateIcecream = {
    numOfIcecream : 15,
}



const CakeReducer = (state = initialStateCake, action) => {
    // console.log(action.type)
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        } 

        default: return state
    }
}

const IcecreamReducer = (state = initialStateIcecream, action) => {
    // console.log(action.type)
    switch(action.type) {
        case BUY_ICECREAM : return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        } 

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer
})

const store = createStore(rootReducer);
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

const actions = bindActionCreators({buyCake, buyIcecream}, store.dispatch)

console.log('Buying Cake')
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
actions.buyCake()

console.log('Buying Icecream')
// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
actions.buyIcecream()

unsubscribe()