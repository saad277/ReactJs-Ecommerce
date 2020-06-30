




import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import { signOut } from '../../Redux/authActions'






const SignedInlink = (props) => {

    console.log(props)
    

    return (

        <ul className="right">

            <li>  <NavLink to="/items">         Items          </NavLink>                               </li>
            <li>  <NavLink to="/cart">         Cart                                                 </NavLink>           </li>

            <li> <a onClick={props.signOut}>       Logout        </a>                                          </li>

            <li>  <NavLink to="/" className="btn btn-floating pink lighten-1">   {props.initials}   </NavLink>    </li>





        </ul>

    )





}


const mapDispatchToProps = (dispatch) => {



    return {

        signOut: () => dispatch(signOut())

    }




}

export default connect(null, mapDispatchToProps)(SignedInlink);