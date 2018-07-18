
const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mortgage: 0,
  rent: 0,
};

const UPDATE_STEP_ONE = "UPDATE_STEP_ONE"
const UPDATE_STEP_TWO = "UPDATE_STEP_TWO"
const UPDATE_STEP_THREE = "UPDATE_STEP_THREE"
const CANCEL = "CANCEL"

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STEP_ONE:
      return Object.assign({}, state, { name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip })
    case UPDATE_STEP_TWO:
      return Object.assign({}, state, { img: action.payload.img })
    case UPDATE_STEP_THREE:
      return Object.assign({}, state, { mortgage: action.payload.mortgage, rent: action.payload.rent })
    case CANCEL:
      return Object.assign({}, state, { name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip, img: action.payload.img, mortgage: action.payload.mortgage, rent: action.payload.rent })
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

export function stepTwoBuilder(img) {
  return {
    type: UPDATE_STEP_TWO,
    payload: {
      img
    }
  }
}

export function stepThreeBuilder(mortgage, rent) {
  return {
    type: UPDATE_STEP_THREE,
    payload: {
      mortgage,
      rent
    }
  }
}

export function cancel() {
  return {
    type: CANCEL,
    payload: initialState
  }
}