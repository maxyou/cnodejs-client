import React, { Component } from 'react';
import Pages from './scaffolds/pages'
import Todo from './scaffolds/todo'
import CNode from './scaffolds/cnode'
import CNodeRedux from './scaffolds/cnode-redux'
import ContainerTodoAdd from './containers/todoadd'
import ContainerTodoList from './containers/todolist'
import ContainerTodoFilter from './containers/todofilter'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(
    thunkMiddleware
  )
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
                  <Route exact path="/" render={()=><Redirect to="/cnode-redux" />} />
                  <Route path="/pages" component={Pages} />
                  <Route path="/todo" component={Todo} />
                  <Route path="/cnode" component={CNode} />
                  <Route path="/cnode-redux" component={CNodeRedux} />
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
