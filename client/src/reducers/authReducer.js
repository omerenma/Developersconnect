// The payload comming from the register reducer is added to the empty
// user object user ={}
import isEmpty from '../validation/is-empty'
import { SET_CURRENT_USER } from '../actions/types'

// App state
const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case SET_CURRENT_USER :
    return{
       ...state,
       isAuthenticated: !isEmpty(action.payload),
       user: action.payload
    }
      default:
    return state

  }

}