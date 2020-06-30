
import React from 'react'

import ItemsList from './ItemsList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import '../../../src/App.css'


const Items = (props) => {


    console.log(props.auth)

    if(!props.auth.uid){

        return <Redirect to="/signin"/>


    }

    else {
    

    let list;

    if(props.items){

        list=props.items.map(x=>{


            return (        <ItemsList name={x.name} id={x.id}  price={x.price} key={x.id} image={x.image}/>                )



        })




    }

    return (

        <div className="row container card-container">


            {list}




        </div>



    )





}

}


const mapStateToProps = (state) => {



    return {

        items:state.firestore.ordered.Items,
        auth:state.firebase.auth

    }




}




export default compose(

    connect(mapStateToProps),
    firestoreConnect([{ collection: 'Items' }])
  )(Items);




   