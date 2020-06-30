



import "../../../src/App.css"


import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { removeItem, AddQuantity, SubQuantity, addOrder } from '../../Redux/cartActions'

import { Redirect } from 'react-router-dom'



const cartAdded = (props) => {


  
    

    // orderHandler=()=>{

    //  props.addOrder(props.cartItems,props.auth.email,props.totalPrice)



    // }







    if (!props.auth.uid) {

        return <Redirect to="/signin" />


    }



    let cartItems;



    if (props.cartItems) {



        cartItems = props.cartItems.map(x => {


            return (



                <div className="collection-item avatar cart" key={x.id}>

                    <div className="item-img ">

                        <img src={x.image} />

                    </div>

                    <div className="item-desc">

                        <span className="title">    {x.name}              </span>

                        <p>  <b> Price :   {x.price} $  </b>       </p>

                        <p>  <b> Quantity :  {x.quantity}              </b>                   </p>





                        <button><i className="material-icons" onClick={() => props.AddQuantity(x.id)}>arrow_drop_up</i></button>
                        <button ><i className="material-icons" onClick={() => props.SubQuantity(x.id)}>arrow_drop_down</i></button>

                        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

                            <button className="waves-effect waves-light btn pink remove" onClick={() => props.removeItem(x.id)}>Remove</button>

                    </div>






                </div>





            )


        })

    }



    return (

        <div className="container">


            <h1>      Current Purchase        {props.totalPrice}  $     </h1>

            {cartItems}



            <a className="btn" ><i className="material-icons right">shopping_cart</i>Order</a>


        </div>




    )






}



const mapStateToProps = (state) => {


    return {

        cartItems: state.cart.cartAddedItems,
        totalPrice: state.cart.total,
        auth: state.firebase.auth,



    }



}


const mapDispatchToProps = (dispatch) => {

    return {

        removeItem: (id) => dispatch(removeItem(id)),
        AddQuantity: (id) => dispatch(AddQuantity(id)),
        SubQuantity: (id) => dispatch(SubQuantity(id)),
        addOrder: (items, email, total) => dispatch(addOrder(items, email, total))

    }



}

export default connect(mapStateToProps, mapDispatchToProps)(cartAdded);
