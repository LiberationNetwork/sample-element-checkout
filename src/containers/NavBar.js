import { connect } from 'react-redux'
import AppBar from '../components/AppBar'
import { toggleDrawer, addItem, lessItem } from '../actions/checkout'

const mapStateToProps = state => ({
    itemCount: state.checkout && state.checkout.basket && (state.checkout.basket.cap + state.checkout.basket.shoe + state.checkout.basket.tshirt),
    openDrawer: state.checkout && state.checkout.openDrawer,
    basket: state.checkout && state.checkout.basket,
    publicKey: state.checkout && state.checkout.publicKey || "qyd96gI3DDSyFbUkK3NOyUcFAOx2lPlW",
})
  
const mapDispatchToProps = dispatch => ({
    toggleDrawer: () => dispatch(toggleDrawer()),
    addItem: (reqBody) => dispatch(addItem(reqBody)),
    lessItem: (reqBody) => dispatch(lessItem(reqBody)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBar)