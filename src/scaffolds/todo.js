import React from 'react';
import ContainerTodoAdd from '../containers/todoadd'
import ContainerTodoList from '../containers/todolist'
import ContainerTodoFilter from '../containers/todofilter'
import styled from 'styled-components'

const StyledDiv = styled.div` 
    margin: 5px;
`  
class Todo extends React.Component {
    render() {
        return (
            <div>
            <StyledDiv>
            
              <ContainerTodoAdd />
              <ContainerTodoList />
              <ContainerTodoFilter />
                
            </StyledDiv>
            </div>
        )
    }

}

export default Todo