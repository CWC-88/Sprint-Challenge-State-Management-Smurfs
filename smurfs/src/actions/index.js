import axios from 'axios';



export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';





export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs')

  return (dispatch) => {
    dispatch({
      type: 'FETCHING_SMURFS'
    })
    request.then(response => {
      dispatch({
        type: 'FETCHED',
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: 'ERROR',
        payload: error.message
      })
    })
  }
}

export const addSmurf = (smurf) => {
  const request = axios.post('http://localhost:3333/smurfs', smurf)

  return (dispatch) => {
    dispatch({
      type: 'ADDING_SMURF'
    })
    request.then(response => {
      dispatch({
        type: 'ADDED',
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: 'ERROR',
        payload: error.message
      })
    })
  }
}

export const delSmurf = (id) => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`)

  return (dispatch) => {
    dispatch({
      type: 'DELETING_SMURF'
    })
    request.then(response => {
      dispatch({
        type: 'DELETED',
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: 'ERROR',
        payload: error.message
      })
    })
  }
}
