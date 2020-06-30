


const inistate = {

    authError:null


}


export const authReducer = (state = inistate, action) => {



    switch (action.type) {

        case "LOGIN_SUCCESS":
            console.log("Login succesful")
            return {


                ...state,
                authError:null
            }

        case "LOGIN_FAILURE":
            console.log("login error")
            alert("Invalid Email or Password")

            return{
                    ...state,
                    authError:"Error in logging"

            }
        case "SIGN_OUT_SUCCESS":
            console.log("sign out success")

            return state

        case "SIGN_OUT_FAILURE":
            console.log("Sign out failure")

        case "SIGN_UP_SUCCESS":
            console.log("Sign up success");
            return {
                        ...state,
                        authError:null

            }
        case "SIGN_UP_ERROR":
            console.log("Sign up error")

            return {
                        ...state,
                        authError:action.error.message


            }

        default:
            return state




    }








}