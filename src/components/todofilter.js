import React from 'react'
import {FILTER} from '../reducers/filter'

class TodoFilter extends React.Component{

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
                    onClick={()=>this.handleChange(FILTER.ALL)}
                    disabled={this.props.filter===FILTER.ALL}>{FILTER.ALL}</button>
                <button 
                    onClick={()=>this.handleChange(FILTER.ACTIVE)}
                    disabled={this.props.filter===FILTER.ACTIVE}>{FILTER.ACTIVE}</button>
                <button 
                    onClick={()=>this.handleChange(FILTER.COMPLETED)}
                    disabled={this.props.filter===FILTER.COMPLETED}>{FILTER.COMPLETED}</button>
            </div>
        )
    }
}

export default TodoFilter