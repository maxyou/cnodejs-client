import React, { Component } from 'react'
import {FILTER} from '../reducers/filter'

class CNode extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.httpGet('/topics')
    }

    render(){
        console.log(this.props)
        // console.log(this.props.loading)
        // console.log(this.props.topics)
        return (
            <div>
                cnode=====
                <div>
                    {this.props.cnode.loading}
                    <hr/>
                    {JSON.stringify(this.props.cnode.topics)}
                </div>
            </div>
        )
    }
}

export default CNode