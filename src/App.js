import React, { Component } from 'react';
import Pages from './scaffolds/pages'
import Todo from './scaffolds/todo'
import ContainerTodoAdd from './containers/todoadd'
import ContainerTodoList from './containers/todolist'
import ContainerTodoFilter from './containers/todofilter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import { HashRouter, Route, Redirect } from 'react-router-dom'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Provider store={store}>
            <div>
                {/* <Link to="/">to /</Link>{'  '}
                <Link to="/about">to about</Link>{'  '}
                <Link to="/topics">to topics</Link> */}

                <Route exact path="/" render={()=><Redirect to="/pages" />} />
                <Route path="/pages" component={Pages} />
                <Route path="/todo" component={Todo} />

              {/* <ContainerTodoAdd />
              <ContainerTodoList />
              <ContainerTodoFilter /> */}
            </div>
          </Provider>
        </HashRouter>

      </div>
    );
  }
}

export default App;
