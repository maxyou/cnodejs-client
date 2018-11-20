import React, { Component } from 'react';
import Pages from './scaffolds/pages'
import Todo from './scaffolds/todo'
import CNode from './scaffolds/cnode'
import ContainerTodoAdd from './containers/todoadd'
import ContainerTodoList from './containers/todolist'
import ContainerTodoFilter from './containers/todofilter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const DivFull = styled.div`
    height:100%;
    background-color: green;
`
class App extends Component {
  render() {
    return (
      <DivFull>
        <HashRouter>
          <Provider store={store}>
            <DivFull>
                {/* <Link to="/">to /</Link>{'  '}
                <Link to="/about">to about</Link>{'  '}
                <Link to="/topics">to topics</Link> */}
                <Switch>
                  <Route exact path="/" render={()=><Redirect to="/cnode" />} />
                  <Route path="/pages" component={Pages} />
                  <Route path="/todo" component={Todo} />
                  <Route path="/cnode" component={CNode} />
                </Switch>
              {/* <ContainerTodoAdd />
              <ContainerTodoList />
              <ContainerTodoFilter /> */}
            </DivFull>
          </Provider>
        </HashRouter>

      </DivFull>
    );
  }
}

export default App;
