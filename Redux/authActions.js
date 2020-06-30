






export const signIn = (credentials) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {


        const firebase = getFirebase();


        firebase.auth().signInWithEmailAndPassword(

            credentials.email,
            credentials.password).then(() => {

                dispatch({

                    type: "LOGIN_SUCCESS"

                })


            }).catch((error) => {

                dispatch({

                    type: "LOGIN_FAILURE",
                    error

                })


            })





    }







}


export const signOut = () => {



    return (dispatch, getState, { getFirebase }) => {



        const firebase = getFirebase();


        firebase.auth().signOut().then(() => {

            dispatch({

                type: "SIGN_OUT_SUCCESS"


            })


        }).catch((error) => {

            dispatch({

                type: "SIGN_OUT_FAILURE",
                error

            })


        })



    }






}



export const signUp = (cred) => {


    return (dispatch, getState, { getFirebase, getFirestore }) => {


        const firebase=getFirebase();

        const firestore=getFirestore();


        firebase.auth().createUserWithEmailAndPassword(

                cred.email,
                cred.password



        ).then((response)=>{


            return firestore.collection("users").doc(response.user.uid).set({

                    firstName:cred.firstName,
                    lastName:cred.lastName,
                    initials:cred.firstName[0] + cred.lastName[0]

            })


        }).then(()=>{

                    dispatch({

                                type:"SIGN_UP_SUCCESS"

                    })



        }).catch((error)=>{

                                dispatch({
                                                type:"SIGN_UP_FAILED",
                                                error


                                })


        })





    }


}