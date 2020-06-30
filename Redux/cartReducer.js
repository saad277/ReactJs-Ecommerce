




const istate = {



    cartAddedItems: [],
    total: 0

}




const cartReducer = (state = istate, action) => {


    console.log(action)


    switch (action.type) {

        case "ADD_TO_CART":
            console.log("Adding ")
            console.log(state.cartAddedItems)
            let addedItem = {
                id: action.id,
                name: action.name,
                image: action.image,
                price: action.price,
                quantity: 1







            }

            let existedItem = state.cartAddedItems.find(x => {

                return x.id == action.id

            })

            console.log(existedItem)

            console.log(addedItem.quantity)



            if (existedItem) {

                console.log("Existing")

                console.log(typeof (existedItem.quantity))



                existedItem.quantity = existedItem.quantity + 1

                console.log(existedItem.quantity)

                return {

                    ...state,
                    total: state.total + addedItem.price

                }


            } else {

                console.log("Not Existing")
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price

                return {

                    ...state,
                    cartAddedItems: [...state.cartAddedItems, addedItem],
                    total: newTotal
                }




            }

        case "REMOVE_ITEM":
            let itemToRemove = state.cartAddedItems.find(x => {

                return action.id == x.id


            })

            console.log(typeof (itemToRemove.price))




            let newitems = state.cartAddedItems.filter(x => {


                return action.id !== x.id



            })

            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)

            console.log(newTotal)

            return {

                ...state,
                total: newTotal,
                cartAddedItems: newitems

            }


        case "ADD_QUANTITY":
            let currentItem = state.cartAddedItems.find(x => {

                return action.id == x.id


            })

            currentItem.quantity = currentItem.quantity + 1

            console.log(currentItem.quantity)

            let newTotal1 = state.total + currentItem.price

            return {

                ...state,
                total: newTotal1
            }

        case "SUB_QUANTITY":
            let currentItem1 = state.cartAddedItems.find(x => {

                return action.id == x.id

            })

            console.log(currentItem1.quantity)

            if (currentItem1.quantity === 1) {

                let newitems2 = state.cartAddedItems.filter(x => {

                    return x.id != action.id
                })

                let newTotal2 = state.total - currentItem1.price

                return {

                    ...state,
                    cartAddedItems: newitems2,
                    total: newTotal2
                }

            }

            else {

                currentItem1.quantity = currentItem1.quantity -1
                let newTotal3=state.total - currentItem1.price

                return {
                        ...state,
                        total:newTotal3

                }
            }


    }



    return state




}


export default cartReducer;