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
                <ul>
                    {this.props.todos.map(
                        item => (
                            <li key={item.id}>{item.todo}:{item.toggle.toString()}</li>
                        )
                    )}
                </ul>

            </div>
        )
    }
}

export default TodoList