import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './Redux/rootReducer';

import firebaseConfig from './Firebase'

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, { useFirestoreForProfile:true, userProfile:"users"   ,attachAuthIsReady: true })

    ))


store.firebaseAuthIsReady.then(()=>{

    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


    serviceWorker.unregister();



})    

