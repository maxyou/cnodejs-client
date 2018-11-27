import React from 'react';
import ContainerCNode from '../containers/cnode'
import { Switch, Route, Link } from 'react-router-dom'

function ContainerDetail() {
    return (
        <div>
            detail
        </div>
    );
}

class CNode extends React.Component {
    
    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={`${this.props.match.url}/`} component={ContainerCNode} />
                    <Route path={`${this.props.match.url}/topics`} component={ContainerCNode} />
                    <Route path={`${this.props.match.url}/detail`} component={ContainerDetail} />                                            
                </Switch>
            </div>
        )
    }

}

export default CNode