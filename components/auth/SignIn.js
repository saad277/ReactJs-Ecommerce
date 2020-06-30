




import React from 'react'

import { Component } from 'react'

import {signIn} from '../../Redux/authActions'

import { connect } from 'react-redux'

import {Redirect} from 'react-router-dom'



class SignIn extends Component {



    state={

            email:"",
            passowrd:""


    }


    inputHandler=(event)=>{


        this.setState({

                [event.target.name]:event.target.value

        })


    }

    handleSubmit=(event)=>{

        event.preventDefault();
        this.props.signIn(this.state)


    }

    render() {



        console.log(this.state)

        if(this.props.auth.uid){

            return <Redirect to="/ReactJs-Ecommerce/" />


        }


        return (
            <div className="row  ">

                <h3 className="center">        Sign In            </h3>
                <br /> <br />

                <form className="col s12 offset-l2" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i class="material-icons prefix">email</i>
                            <input id="icon_prefix" type="text" name="email" className="validate" onChange={this.inputHandler} />
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


const mapStateToProps=(state)=>{


return {

    auth:state.firebase.auth

}



}


const mapDispatchToProps = (dispatch) => {

    return {

        signIn: (cred) => dispatch(signIn(cred))

    }



}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);