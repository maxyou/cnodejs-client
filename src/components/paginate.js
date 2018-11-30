import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div` 
    margin: 5px;
`  

function calcButtonArray(paginate=1, ext=2, maxRight){
    // required:
    //  paginate <= maxright

    let ba = [paginate]
    for(let i = 0; i < ext; i++){
        ba.push((paginate+1)+i)
    }
    for(let i = 0; i < ext; i++){
        ba.unshift((paginate-1)-i)
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

function PageRound({paginate, ext, maxRight, nav}) {
    // console.log(data)
    const ba = calcButtonArray(paginate, ext, maxRight)
    return (
        <div>
            {ba.map((item)=><button 
                    key={item} 
                    onClick={()=>nav(item)}
                    disabled={item===paginate}
                >{item}</button>)}
        </div>
    );
}

class Paginate extends React.Component{

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.state = {
            paginate:this.props.paginate
        }
        // console.log(this.props.paginate)
        // console.log(this.state)
    }

    handleChange(paginate){
        // console.log(paginate)
        this.setState({paginate:paginate})
        this.props.changePage(paginate)
    }

    render(){
        return (
            <div>
                <StyledDiv>
                    <PageRound paginate={this.state.paginate} ext={5} maxRight={50} nav={this.handleChange}/>
                </StyledDiv>
            </div>
        )
    }
}

export default Paginate