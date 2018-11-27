import CNode from '../components/cnode'
import {httpGet} from '../actions/http'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    http:state.http
})

const mapDispatchToProps = dispatch => ({
    httpGet: (v) => dispatch(httpGet(v))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CNode))