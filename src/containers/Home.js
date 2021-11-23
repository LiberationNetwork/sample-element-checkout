import { connect } from 'react-redux'
import { addItem } from '../actions/checkout'
import Home from '../components/Home'

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = dispatch => ({
    addItem: (reqBody) => dispatch(addItem(reqBody)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)