import Detail from '../components/detail'
import {httpGet, initState} from '../actions/detail'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    detail:state.detail
})

const mapDispatchToProps = dispatch => ({
    httpGet: (v) => dispatch(httpGet(v)),
    initState: () => dispatch(initState())
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail))