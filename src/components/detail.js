import React from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'
import { Switch, Route, Link } from 'react-router-dom'

class Detail extends React.Component {

    componentDidMount() {
        this.props.httpGet('/topics')
        // console.log(this.props)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Detail