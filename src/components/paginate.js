import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div` 
    margin: 5px;
`  

function calcButtonArray(current=1, ext=2, maxRight){
    // required:
    //  current <= maxright

    let ba = [current]
    for(let i = 0; i < ext; i++){
        ba.push((current+1)+i)
    }
    for(let i = 0; i < ext; i++){
        ba.unshift((current-1)-i)
    }
    // console.log(ba)
    while(1){
        if(ba[0] < 1){
            ba.shift()
            let addRight = ba[ba.length - 1]+1
            if(addRight <= maxRight){
                ba.push(addRight)
            }
        }else{
            break
        }
    }
    // console.log(ba)
    while(1){
        if(ba[ba.length - 1] > maxRight){
            ba.pop()
            let addLeft = ba[0] - 1
            if(addLeft >= 1){
                ba.unshift(addLeft)
            }
        }else{
            break
        }
    }
    // console.log(ba)
    return ba
}

function PageRound({current, ext, maxRight, nav}) {
    const ba = calcButtonArray(current, ext, maxRight)
    console.log(current)
    console.log(ext)
    console.log(maxRight)
    console.log(ba)
    return (
        <div>
            {ba.map((item)=><button 
                    key={item} 
                    onClick={()=>nav(item)}
                    disabled={item===current}
                >{item}</button>)}
        </div>
    );
}

class Paginate extends React.Component{

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.state = {
            current : props.paginate.current,
            ext : 5
        }
        // console.log(this.props.paginate)
        // console.log(this.state)
    }

    handleChange(current){
        // console.log(paginate)
        this.setState({current:current})
        this.props.changePage(current)
    }

    render(){
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <StyledDiv>
                    <PageRound current={this.state.current} ext={this.state.ext} 
                        maxRight={this.props.paginate.maxPaginate} nav={this.handleChange}/>
                </StyledDiv>
            </div>
        )
    }
}

export default Paginate