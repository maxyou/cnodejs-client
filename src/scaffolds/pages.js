import React from 'react'
// import styled from 'styled-components'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import CNodeTopics from './cnode-redux'
import Todo from './todo'

// const H2Red = styled.h2`background:red;`
// const H2Green = styled.h2`background:green;`
// const H2Hover = styled.h2`:hover{color:red}`

// const HH = styled.h2.attrs({
//     colo2r: props=>props.colo3r
// })`
//     color: ${props=>props.colo2r}; //if parameter is used, props point to parameter, if not, point to component
//     border:2px solid #dede00;
// `
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            About me:
        </div>
    );
}


const DivFull = styled.div`
    height:100%;
    background-color: yellow;
`
const FlexContainer = styled.div`
    height:100%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    `
const FlexMain = styled.div`
    flex: 1 1 auto;
    overflow: scroll;
    background-color: silver;
`
const FlexBottom = styled.div`
    flex: 0 0 auto;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: skyblue;
`
class Pages extends React.Component {
    render() {
        return (
            <DivFull>
                <FlexContainer>
                    <FlexMain>
                        <Switch>
                            <Route exact path={`${this.props.match.url}/`} render={()=><Redirect to={`${this.props.match.url}/cnode`} />} />
                            <Route path={`${this.props.match.url}/home`} component={Home} />
                            <Route path={`${this.props.match.url}/about`} component={About} />
                            <Route path={`${this.props.match.url}/cnode`} component={CNodeTopics} />
                            <Route path={`${this.props.match.url}/todo`} component={Todo} />
                        </Switch>
                    </FlexMain>
                    <FlexBottom>
                        <Link to={`${this.props.match.url}/cnode`}>CNode</Link>
                        <Link to={`${this.props.match.url}/todo`}>Todo</Link>
                        <Link to={`${this.props.match.url}/about`}>Me</Link>
                    </FlexBottom>
                </FlexContainer>
            </DivFull>
        )
    }

}

export default Pages