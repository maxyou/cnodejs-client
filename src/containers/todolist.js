import TodoList from '../components/todolist'
import {toggle} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    todos:state.todos,
    filter:state.filter
})

const mapDispatchToProps = dispatch => ({
    toggle: (v) => dispatch(toggle(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)