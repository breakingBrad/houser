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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case `${SOMETHING}_FULFILLED`:
    //   return action.payload.something;
    default:
      return state;
  }
}