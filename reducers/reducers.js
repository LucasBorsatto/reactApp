import { SEND_TRANSFER, SEND_TRANSFER_SUCCESS, SEND_TRANSFER_FAILURE,
		 REQUEST_TRANSFERS, REQUEST_TRANSFERS_SUCCESS, REQUEST_TRANSFERS_FAILURE } from '../actions/actions'

function transferReducer(state = {
  isFetching: false,
  error: '',
  transfers: []
}, action) {
  const newState = Object.assign({}, action)

  switch (action.type) { 
    case SEND_TRANSFER:     
          newState.isFetching = true;    
    case SEND_TRANSFER_SUCCESS: 
	        newState.isFetching = false;  
          newState.transfers = action.transfers;
    case SEND_TRANSFER_FAILURE:
			    newState.isFetching = false; 
          newState.error = action.error;
     case REQUEST_TRANSFERS:
          return Object.assign({}, state, {
            isFetching: true
          })  
    case REQUEST_TRANSFERS_SUCCESS: 
          return Object.assign({}, state, {
            isFetching: false,
            transfers: action.transfers
          })
    case REQUEST_TRANSFERS_FAILURE:
          return Object.assign({}, state, {
            isFetching: false,
            error: action.error
          })         
    default:
          return state;
  }
  return newState;
}


export default transferReducer;