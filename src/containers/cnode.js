import CNode from '../components/cnode'
import {httpGet} from '../actions/cnode'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    loading:state.loading,
    topics:state.topics
})

const mapDispatchToProps = dispatch => ({
    httpGet: (v) => dispatch(httpGet(v))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CNode)