import React from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'
import { Switch, Route, Link } from 'react-router-dom'

class Detail extends React.Component {

    componentDidMount() {
        this.props.httpGet(`/topics/${this.props.match.params.id}`)
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                detail id:{this.props.match.params.id}
                <hr/>
                {JSON.stringify(this.props.detail)}
            </div>
        )
    }
}

export default Detail