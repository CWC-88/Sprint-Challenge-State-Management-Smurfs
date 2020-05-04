
 const initialState =  {
    smurfs: [],
    fetchingSmurfs: false,
    fetched: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  }
 
 const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'FETCHING_SMURFS':
       return Object.assign({}, state, {fetchingSmurfs: true})
     case 'FETCHED':
       return Object.assign({}, state, {fetchingSmurfs: false, fetched: true, smurfs: action.payload})
     case 'ERROR':
       return Object.assign({}, state, {error: action.payload});
     case 'ADDING_SMURF':
       return Object.assign({}, state, {fetchingSmurfs: true, fetched: false})
     case 'ADDED':
       return Object.assign({}, state, {fetchingSmurfs: false, fetched: true, smurfs: action.payload})
     case 'DELETING_SMURF':
       return Object.assign({}, state, {fetchingSmurfs: true, fetched: false})
     case 'DELETED':
       return Object.assign({}, state, {fetchingSmurfs: false, fetched: true, smurfs: action.payload})
     default:
         return state;
   }
 }
 
 export default smurfReducer;
 
 
