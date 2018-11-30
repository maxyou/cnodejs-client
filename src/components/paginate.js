import React from 'react'

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
        // this.state = {...this.props.paginate}
        console.log(this.props.paginate)
        console.log(this.state)
    }

    handleChange(paginate){
        // this.props.changeFilter(v)
        console.log(paginate)
        this.setState({paginate:paginate})
        this.props.changePage(paginate)
    }

    render(){
        return (
            <div>
                paginate:{this.state.paginate}
                <hr/>
                <PageRound paginate={this.state.paginate} ext={3} maxRight={100} nav={this.handleChange}/>
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