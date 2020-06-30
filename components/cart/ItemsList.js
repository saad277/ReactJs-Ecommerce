




import React from 'react'

import { Component } from 'react'
import Items from './Items'
import '../../../src/App.css'

import {addToCart} from '../../Redux/cartActions'

import { connect } from 'react-redux'


const ItemList = (props) => {



    return (




        <div className="col s12 m4 l2 offset-l1">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} className="phone-card" />

                    <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>props.addToCart(props.id,props.name,props.image,props.price)} ><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                    <p> {props.name} </p>
                    <p>   <b>  {props.price} $  </b>            </p>
                </div>
            </div>
        </div>











    )



}


const mapDispatchToProps = (dispatch) => {


    return {

          addToCart:(id,name,image,price)=> dispatch (    addToCart(id,name,image,price)             )


    }




}

export default connect(null,mapDispatchToProps)(ItemList);