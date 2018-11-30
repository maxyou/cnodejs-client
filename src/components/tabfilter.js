import React from 'react'
import {TAB_FILTER, tabfilterStr} from '../reducers/tabfilter'

class TabFilter extends React.Component{

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(v){
        this.props.changeFilter(v)
    }

    render(){
        return (
            <div>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.ALL)}
                    disabled={this.props.tabfilter===TAB_FILTER.ALL}>{tabfilterStr(TAB_FILTER.ALL)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.PRIMARY)}
                    disabled={this.props.tabfilter===TAB_FILTER.PRIMARY}>
                    {/* <Link to={{pathname:this.props.match.url, search:"?tab=primary"}}> */}
                    {tabfilterStr(TAB_FILTER.PRIMARY)}
                    {/* </Link> */}
                    </button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.SHARE)}
                    disabled={this.props.tabfilter===TAB_FILTER.SHARE}>{tabfilterStr(TAB_FILTER.SHARE)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.ASK)}
                    disabled={this.props.tabfilter===TAB_FILTER.ASK}>{tabfilterStr(TAB_FILTER.ASK)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.JOB)}
                    disabled={this.props.tabfilter===TAB_FILTER.JOB}>{tabfilterStr(TAB_FILTER.JOB)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.TEST)}
                    disabled={this.props.tabfilter===TAB_FILTER.TEST}>{tabfilterStr(TAB_FILTER.TEST)}</button>
            </div>
        )
    }
}

export default TabFilter