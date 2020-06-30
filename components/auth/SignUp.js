




import React from 'react'

import { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signUp } from '../../Redux/authActions'


class SignUp extends Component {



    state = {

        email: "",
        password: "",
        firstName: "",
        lastName: ""



    }


    inputHandler = (event) => {

        this.setState({

            [event.target.name]: event.target.value


        })


    }


    handleSubmit = (event) => {

        event.preventDefault();

        this.props.signUp(this.state)



    }



    render() {

console.log(this.state)

        if (this.props.auth.uid) {

            return <Redirect to='/ReactJs-Ecommerce/' />


        }


        return (
            <div className="row  ">
                <h3 className="center">        Sign Up           </h3>
                <br /> <br />

                <form className="col s12 offset-l2" onSubmit={this.handleSubmit}>


                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_box</i>
                            <input id="icon_prefix" type="text" className="validate" name="firstName" onChange={this.inputHandler} />
                            <label htmlfor="icon_prefix">First Name</label>
                        </div>

                    </div>




                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix"> account_box </i>
                            <input id="icon_prefix" type="text" className="validate" name="lastName" onChange={this.inputHandler} />
                            <label htmlfor="icon_prefix">Last Name</label>
                        </div>

                    </div>





                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="icon_prefix" type="text" className="validate"  name="email" onChange={this.inputHandler} />
                            <label htmlfor="icon_prefix">Email</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">enhanced_encryption</i>
                            <input id="icon_prefix" type="password" className="validate" name="password" onChange={this.inputHandler} />
                            <label htmlfor="icon_prefix">Password</label>
                        </div>

                    </div>

                    <button className="btn btn-pink">       Submit         </button>
                </form>





            </div>




        )



    }





}


const mapStateToProps = (state) => {


    return {

        auth: state.firebase.auth

    }




}


const mapDispatchToProps = (dispatch) => {

    return {

        signUp: (cred) => dispatch(signUp(cred))

    }



}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);