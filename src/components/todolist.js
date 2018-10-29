import React, { Component } from 'react'

class TodoList extends React.Component{

    constructor(props){
        super(props)

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(item){
        this.props.toggle(item)
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.todos.map(
                        item => (
                            <li key={item.id}
                                onClick={()=>this.handleToggle(item)}
                            >{item.todo}:{item.toggle.toString()}</li>
                        )
                    )}
                </ul>

            </div>
        )
    }
}

export default TodoList