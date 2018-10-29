import TodoFilter from '../components/todofilter'
import {filter} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    todos:state.todos
})

const mapDispatchToProps = dispatch => ({
    add: (v) => dispatch(filter(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)