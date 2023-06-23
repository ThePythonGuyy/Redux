const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.legacy_createStore

const initialState = {
  name: "Rahul",
  address: {
    street: "123 abc colony",
    city: "Chennai",
    state: "TN",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

const action = (payload = "Chennai") => {
  return {
    type: STREET_UPDATE,
    payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return {
        ...state,
        address: {
          ...state.address,
          city: action.payload,
        },
      };

      default: return state;
  }
};

const immerReducer = (state = initialState, action) => {
    switch (action.type) {
      case STREET_UPDATE:
        return produce(state, (draft) => {
            draft.address.city = action.payload
        })
  
        default: return state;
    }
  };



const store = createStore(immerReducer)
console.log(store.getState())
store.dispatch(action('Mumbai'))
console.log(store.getState())