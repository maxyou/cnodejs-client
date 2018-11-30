import Paginate from '../components/paginate'
import {paginate} from '../actions/paginate'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    paginate:state.paginate
})

const mapDispatchToProps = dispatch => ({
    changePage: (v) => dispatch(paginate(v))
})
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Paginate))