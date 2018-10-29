import React, { Component } from 'react'

class TodoList extends React.Component{

    constructor(props){
        super(props)
        this.state = {value:''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(e){
        this.setState({value:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.value)
        this.props.add(this.state.value)
    }

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" 
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />Modify
            </form>
        </div>
        )
    }
}

export default TodoList