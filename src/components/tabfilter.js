import React from 'react'
import {TAB_FILTER} from '../reducers/tabfilter'

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
            <div>filter as:
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.ALL)}
                    disabled={this.props.filter===TAB_FILTER.ALL}>{TAB_FILTER.ALL}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.PRIMARY)}
                    disabled={this.props.filter===TAB_FILTER.PRIMARY}>{TAB_FILTER.PRIMARY}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.SHARE)}
                    disabled={this.props.filter===TAB_FILTER.SHARE}>{TAB_FILTER.SHARE}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.ASK)}
                    disabled={this.props.filter===TAB_FILTER.ASK}>{TAB_FILTER.ASK}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.JOB)}
                    disabled={this.props.filter===TAB_FILTER.JOB}>{TAB_FILTER.JOB}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.TEST)}
                    disabled={this.props.filter===TAB_FILTER.TEST}>{TAB_FILTER.TEST}</button>
            </div>
        )
    }
}

export default TabFilter