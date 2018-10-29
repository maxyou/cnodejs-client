import TodoFilter from '../components/todofilter'
import {filter} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    filter:state.filter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: (v) => dispatch(filter(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)