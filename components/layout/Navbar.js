

import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {

    console.log(props.auth)

    const links=props.auth.uid? <SignedInLinks initials={props.profile.initials} /> : <SignedOutLinks/>


    return (

        <nav className="nav-wrapper grey darken-3">

            <div className="container">

                <Link to="/ReactJs-Ecommerce/" className="brand-logo">    S-Mobiles    </Link>
               
               {links}




            </div>



        </nav>


    )




}


const mapStateToProps = (state) => {

    console.log(state)

    return {


        auth: state.firebase.auth,
        profile:state.firebase.profile

    }

}


export default connect(mapStateToProps)(Navbar);