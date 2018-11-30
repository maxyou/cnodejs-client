import React from 'react'
import {FILTER} from '../reducers/filter'
import styled from 'styled-components'

const StyledDiv = styled.div` 
    margin: 5px;
    width: 80%;
    display: flex;
    background-color: ${props => props._color};

    .todo-item{
        flex: 1 1 auto;
    }

    .todo-toggle{
        flex: 0 1 auto;
    }
`  

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
                                <li key={item.id} onClick={()=>this.handleToggle(item)}>
                                <StyledDiv _color={item.toggle?'cadetblue':'cornsilk'}>
                                    <div className="todo-item">{item.todo}</div>
                                    <button className="todo-toggle">{item.toggle?'completed':'active'}</button>
                                </StyledDiv>
                                </li>
                        
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