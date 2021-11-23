function checkout(state ={basket: {cap: 0, shoe: 0, tshirt: 0}}, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        const updatedState =  {...state}
        switch (action.reqBody) {
          case 'cap':
            const capQty = state.basket.cap
            updatedState.basket = {
              ...updatedState.basket,
              cap: capQty +1,
            }
            break;
          case 'shoe':
            const shoeQty = state.basket.shoe
            updatedState.basket = {
              ...updatedState.basket,
              shoe: shoeQty +1,
            }
            break;
          case 'tshirt':
            const tshirtQty = state.basket.tshirt
            updatedState.basket = {
              ...updatedState.basket,
              tshirt: tshirtQty +1,
            }
            break;
          default:
            break;
        }
        return {...updatedState}
      case 'TOGGLE_DRAWER':
          const updateDrawer = {
              ...state, openDrawer: !state.openDrawer
          }
        return updateDrawer
      case 'LESS_ITEM':
        const minusState =  {...state}
        switch (action.reqBody) {
          case 'cap':
            const capQty = state.basket.cap
            minusState.basket = {
              ...minusState.basket,
              cap: capQty -1,
            }
            break;
          case 'shoe':
            const shoeQty = state.basket.shoe
            minusState.basket = {
              ...minusState.basket,
              shoe: shoeQty -1,
            }
            break;
          case 'tshirt':
            const tshirtQty = state.basket.tshirt
            minusState.basket = {
              ...minusState.basket,
              tshirt: tshirtQty -1,
            }
            break;
          default:
            break;
        }
          return {...minusState}
      default:
        return state
    }
  }

export default checkout