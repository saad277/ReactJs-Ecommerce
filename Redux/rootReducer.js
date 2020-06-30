

import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {authReducer} from './authReducer'






const rootReducer=combineReducers({


cart:cartReducer,
firestore:firestoreReducer,
firebase:firebaseReducer,
auth:authReducer



})



export default rootReducer;