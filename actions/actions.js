import fetch from 'isomorphic-fetch'
import { showLoading } from 'react-redux-loading-bar'

export const SEND_TRANSFER = 'SEND_TRANSFER'
export const SEND_TRANSFER_SUCCESS = 'SEND_TRANSFER_SUCCESS'
export const SEND_TRANSFER_FAILURE = 'SEND_TRANSFER_FAILURE'
export const REQUEST_TRANSFERS = 'REQUEST_TRANSFERS'
export const REQUEST_TRANSFERS_SUCCESS = 'REQUEST_TRANSFERS_SUCCESS'
export const REQUEST_TRANSFERS_FAILURE = 'REQUEST_TRANSFERS_FAILURE'

export function save(transfer) {  
  var all = JSON.parse(localStorage.getItem('transfer')) || [];
  all.push(transfer); 
  const data = JSON.stringify(all);
  return fetch(localStorage.setItem('transfer', data));
}

export function sendTransfer(transfer) {  
  return function (dispatch) {
    dispatch(showLoading())
    return save(transfer).then(
        data => dispatch(sendTransferSuccess(data)),
        error => dispatch(sendTransferFailure(error))
      )
  };
}

export function sendTransferSuccess(newTransfer) {  
  return {
    type: "SEND_TRANSFER_SUCCESS",
    transfers: newTransfer
  };
}

export function sendTransferFailure(error) { 
  return {
    type: SEND_TRANSFER_FAILURE,
    error: error
  };
}

function requestPosts1() {
  return {
    type: REQUEST_TRANSFERS
  }
}

function receiveTransfers(json) {
  const data = JSON.parse(json)
  return {
    type: REQUEST_TRANSFERS_SUCCESS,
    transfers: data
  }
}

export function requestTransfers() {
  return dispatch => {
    dispatch(requestPosts1())
    return dispatch(receiveTransfers(localStorage.getItem('transfer')))
  }
}

export function fetchTransfers() { 
  return (dispatch, getState) => {
      return dispatch(requestTransfers())
  }
}
