import Detail from '../components/detail'
import {httpGet} from '../actions/detail'
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
)(Detail))