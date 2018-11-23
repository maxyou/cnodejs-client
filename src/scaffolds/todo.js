import React from 'react';
import ContainerTodoAdd from '../containers/todoadd'
import ContainerTodoList from '../containers/todolist'
import ContainerTodoFilter from '../containers/todofilter'

class Todo extends React.Component {
    render() {
        return (
            <div>
                
              <ContainerTodoAdd />
              <ContainerTodoList />
              <ContainerTodoFilter />
                
            </div>
        )
    }

}

export default Todo