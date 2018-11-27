import React from 'react';
import ContainerTopics from '../containers/topics'
import ContainerDetail from '../containers/detail'
import { Switch, Route, Link } from 'react-router-dom'

// function ContainerDetail(props) {
//     return (
//         <div>
//             detail:{props.match.params.id}
//         </div>
//     );
// }

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
                    <Route path={`${this.props.match.url}/detail/:id`} component={ContainerDetail} />                                            
                </Switch>
            </div>
        )
    }

}

export default CNode