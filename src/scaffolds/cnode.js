import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Header = styled.div`
    background-color:grey;
`

class CNode extends React.Component {

    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        axios.get('/topics')
            .then(
                res=>{
                    if(res.status==200){
                        this.setState({data:res.data})
                    }
                    // console.log(res)
                }
            )
    }

    render() {
        return (
            <div>
                <Header>cnode</Header>
                {JSON.stringify(this.state.data)}
            </div>
        )
    }
}

export default CNode