import React, { Component } from 'react'
// import styled from 'styled-components'
import { Switch, Redirect, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const H2Red = styled.h2`background:red;`
const H2Green = styled.h2`background:green;`

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
            <H2Red>About</H2Red>
        </div>
    );
}
function Topics() {
    return (
        <div>
            <H2Green>Topics</H2Green>
        </div>
    );
}

const DivFull = styled.div`
    height:100%;
    background-color: yellow;
`
const FlexContainer = styled.div`
    height:100%;
    display: flex;
    flex-direction: column
`
const FlexMain = styled.div`
    flex: 1 1 auto;
    background-color: grey;
`
const FlexBottom = styled.div`
    flex: 0 1 auto;
    display: flex;
    justify-content: space-around;
`
class Pages extends React.Component {
    render() {
        return (
            <DivFull>
                <FlexContainer>
                    <FlexMain>
                        {/* <Link to={`${this.props.match.url}/`}>to home</Link>{'  '} */}
                        {/* <Route exact path={`${this.props.match.url}/`} render={()=><Redirect to={`${this.props.match.url}/topics`} />} /> */}
                        <Switch>
                            <Route exact path={`${this.props.match.url}/`} component={Home} />
                            <Route path={`${this.props.match.url}/home`} component={Home} />
                            <Route path={`${this.props.match.url}/about`} component={About} />
                            <Route path={`${this.props.match.url}/topics`} component={Topics} />
                        </Switch>
                    </FlexMain>
                    <FlexBottom>
                        <Link to={`${this.props.match.url}/about`}>to about</Link>
                        <Link to={`${this.props.match.url}/topics`}>to topics</Link>
                    </FlexBottom>
                </FlexContainer>
            </DivFull>
        )
    }

}

export default Pages