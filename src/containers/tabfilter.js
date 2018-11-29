import TabFilter from '../components/tabfilter'
import {tabfilter} from '../actions/tabfilter'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    tabfilter:state.tabfilter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: (v) => dispatch(tabfilter(v))
})
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TabFilter))