import TodoList from '../components/todolist'
import {toggle} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    todos:state.todos
})

const mapDispatchToProps = dispatch => ({
    add: (v) => dispatch(toggle(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)