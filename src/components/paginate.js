import React from 'react'
import {TAB_FILTER, tabfilterStr} from '../reducers/tabfilter'
import { Switch, Route, Link } from 'react-router-dom'

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
    // console.log(data)
    const ba = calcButtonArray(current, ext, maxRight)
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
            current:1
        }
        // this.state = {...this.props.current}
        // console.log(this.state)
    }

    handleChange(current){
        // this.props.changeFilter(v)
        console.log(current)
        this.setState({current:current})
    }

    render(){
        return (
            <div>
                current:{this.state.current}
                <hr/>
                <PageRound current={this.state.current} ext={3} maxRight={100} nav={this.handleChange}/>
                <hr/>
                {/* <button 
                    onClick={()=>this.handleChange(TAB_FILTER.ALL)}
                    disabled={this.props.tabfilter===TAB_FILTER.ALL}>{tabfilterStr(TAB_FILTER.ALL)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.PRIMARY)}
                    disabled={this.props.tabfilter===TAB_FILTER.PRIMARY}>
                    <Link to={{pathname:this.props.match.url, search:"?tab=primary"}}>
                    {tabfilterStr(TAB_FILTER.PRIMARY)}
                    </Link>
                    </button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.SHARE)}
                    disabled={this.props.tabfilter===TAB_FILTER.SHARE}>{tabfilterStr(TAB_FILTER.SHARE)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.ASK)}
                    disabled={this.props.tabfilter===TAB_FILTER.ASK}>{tabfilterStr(TAB_FILTER.ASK)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.JOB)}
                    disabled={this.props.tabfilter===TAB_FILTER.JOB}>{tabfilterStr(TAB_FILTER.JOB)}</button>
                <button 
                    onClick={()=>this.handleChange(TAB_FILTER.TEST)}
                    disabled={this.props.tabfilter===TAB_FILTER.TEST}>{tabfilterStr(TAB_FILTER.TEST)}</button> */}
            </div>
        )
    }
}

export default Paginate