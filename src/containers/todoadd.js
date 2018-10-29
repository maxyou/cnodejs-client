import TodoAdd from '../components/todoadd'
import {add} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    todos:state.todos
})

const mapDispatchToProps = dispatch => ({
    add: (v) => dispatch(add(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAdd)