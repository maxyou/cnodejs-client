import TabFilter from '../components/tabfilter'
import {tabfilter} from '../actions/tabfilter'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    tabfilter:state.tabfilter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: (v) => dispatch(tabfilter(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabFilter)