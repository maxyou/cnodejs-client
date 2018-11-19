import React, { Component } from 'react'
// import styled from 'styled-components'
import { Redirect, Route, Link } from 'react-router-dom'

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
            <h2>About</h2>
        </div>
    );
}
function Topics() {
    return (
        <div>
            <h2>Topics</h2>
        </div>
    );
}
class Pages extends React.Component {
    render() {
        return (
            <div>
                
                {/* <Link to={`${this.props.match.url}/`}>to home</Link>{'  '} */}
                <Link to={`${this.props.match.url}/about`}>to about</Link>{'  '}
                <Link to={`${this.props.match.url}/topics`}>to topics</Link>{'  '}
                
                {/* <Route exact path={`${this.props.match.url}/`} render={()=><Redirect to={`${this.props.match.url}/topics`} />} /> */}
                <Route path={`${this.props.match.url}/about`} component={About} />
                <Route path={`${this.props.match.url}/topics`} component={Topics} />
                
            </div>
        )
    }

}

export default Pages