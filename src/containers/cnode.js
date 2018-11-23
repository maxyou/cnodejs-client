import CNode from '../components/cnode'
import {httpGet} from '../actions/cnode'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    http:state.http
})

const mapDispatchToProps = dispatch => ({
    httpGet: (v) => dispatch(httpGet(v))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CNode)