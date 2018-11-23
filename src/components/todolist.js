import React from 'react'
import {FILTER} from '../reducers/filter'

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
                        item => {
                            const todo = 
                                <li key={item.id}
                                    onClick={()=>this.handleToggle(item)}
                                >{item.todo}:{item.toggle.toString()}</li>
                        
                            // console.log(this.props.filter)
                            // console.log(FILTER.ALL)
                            // console.log(item.toggle)
                            if(this.props.filter===FILTER.ALL){
                                return todo
                            }else if(this.props.filter===FILTER.ACTIVE && item.toggle===false){
                                return todo
                            }else if(this.props.filter===FILTER.COMPLETED && item.toggle===true){
                                return todo
                            }else{
                                return null
                            }
                        }
                    )}
                </ul>

            </div>
        )
    }
}

export default TodoList