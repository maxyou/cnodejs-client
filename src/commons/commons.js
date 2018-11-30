import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 22.5px;
`

export function AvatarImg(props) {
    // console.log(props.url)
    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={props.url} alt="avatar"/>)
}