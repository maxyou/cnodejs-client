import React, { Component } from 'react';
import ContainerTodoAdd from './containers/todoadd'
import ContainerTodoList from './containers/todolist'
import ContainerTodoFilter from './containers/todofilter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <ContainerTodoAdd />
            <ContainerTodoList />
            <ContainerTodoFilter />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
