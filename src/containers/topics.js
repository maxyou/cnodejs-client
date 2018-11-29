import Topics from '../components/topics'
import {httpGet} from '../actions/topics'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    topics:state.topics,
    tabfilter:state.tabfilter
})

const mapDispatchToProps = dispatch => ({
    httpGet: (v) => dispatch(httpGet(v))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics))