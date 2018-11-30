import React from 'react';
import Paginate from '../containers/paginate'
import TabFilter from '../containers/tabfilter'
import Topics from '../containers/topics'
import Detail from '../containers/detail'
import { Switch, Route, Link } from 'react-router-dom'

function ContainerTopics() {
    return (
        <div>
            <TabFilter />
            <Paginate />
            <Topics />
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
                    <Route exact path={`${this.props.match.url}/`} component={ContainerTopics} />
                    <Route path={`${this.props.match.url}/topics`} component={ContainerTopics} />
                    <Route path={`${this.props.match.url}/detail/:id`} component={Detail} />
                </Switch>
            </div>
        )
    }

}

export default CNode