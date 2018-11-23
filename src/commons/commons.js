import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 80px;
    height: 80px;
`

export function AvatarImg(props) {
    // console.log(props.url)
    return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
}