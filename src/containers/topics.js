import Topics from '../components/topics'
import {httpGet, initState} from '../actions/topics'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    topics:state.topics,
    tabfilter:state.tabfilter,
    paginate:state.paginate
})

const mapDispatchToProps = dispatch => ({
    httpGet: (v) => dispatch(httpGet(v)),
    initState: () => dispatch(initState())
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics))