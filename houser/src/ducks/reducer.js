
const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: '',
};

const UPDATE_STEP_ONE = "UPDATE_STEP_ONE"

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STEP_ONE:
      return Object.assign({}, state, { name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip })
    default:
      return state;
  }
}


export function stepOneBuilder(name, address, city, state, zip) {
  return {
    type: UPDATE_STEP_ONE,
    payload: {
      name,
      address,
      city,
      state,
      zip
    }
  }
}