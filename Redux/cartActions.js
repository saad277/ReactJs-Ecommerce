








export const addToCart = (id, name, image, price) => {



    return {

        type: "ADD_TO_CART",
        id: id,
        name: name,
        image: image,
        price: price


    }





}


export const removeItem = (id) => {


    return {

        type: "REMOVE_ITEM",
        id: id

    }


}


export const AddQuantity = (id) => {


    return {

        type: "ADD_QUANTITY",
        id: id

    }



}


export const SubQuantity = (id) => {


    return {
        
        type: "SUB_QUANTITY",
        id: id

    }


}


export const addOrder=(items,email,total)=>{


    return (dispatch,getState,{getFirebase,getFirestore})=>{



        const firestore=getFirestore();


        firestore.collection("orders").add({

            items:items,
            email:email,
            total:total


        }).then(()=>{


                dispatch({

                        type:"Ordering",
                        items,
                        email,
                        total


                })


        }).catch((error)=>{

            dispatch({

                type:"Inserting Error",
                        error

            })
                        


        })




    }




}