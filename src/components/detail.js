import React, {Fragment} from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'

const StyledTopic = styled.div` 
    margin: 5px;
    padding:5px;
    background-color:#eeeeee;

    .topic-title{
        font-size: 1.2em;
    }
    span{
        font-size: 0.8em;
        color: blue;
    }
`
const StyledReply = styled.div` 
    
    margin: 5px;
    padding:5px;
    display: flex;
    align-items: flex-start;
    background-color:#eeeeee;
    
    .cn-avatar{
        // background-color:#eeeeee;
        flex: 0 1 auto;
        font-size: 0.8em;   
        padding: 2px;
    }
    
    .cn-reply{
        // background-color:#eeeeee;
        flex: 1 1 auto;
        // background: blue;
        margin-left:5px;
        margin-right:5px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;

        .cn-reply-name{
            flex: 0 1 auto;
            // background: yellow;
            font-size: 0.8em;   
            color: blue;
        }
        .cn-reply-content{
            flex: 1 1 auto;
            // background: pink;
            font-size: 0.8em;   
        }
    }
`
function Reply({item}){
    return(
        <StyledReply >
            <div className="cn-avatar"><AvatarImg url={item.author.avatar_url} /></div>
            <div className="cn-reply">
                <div className="cn-reply-name">
                    {item.author.loginname}
                </div>
                <div className="cn-reply-content">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
            </div>
        </StyledReply>
    )
}

function FormateTime(t){
    let td = new Date(t)
    let str = td.getFullYear()+'-'+
            (td.getMonth()+1)+'-'+
            td.getDate()+' '+
            td.getHours()+':'+
            td.getMinutes()
    
            return str
}

function Topic({data}) {
    // console.log(data)
    return (
        <Fragment>
            <StyledTopic>
                <div className="topic-title">{data.title}</div>
                <div>
                    <span>{data.author.loginname}</span>{' '}
                    <span>{FormateTime(data.create_at)}</span>{' '}
                    {/* <span>{data.visit_count}read</span>{' '}
                    <span>{data.tab}</span> */}
                </div>
                <hr/>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />            
            </StyledTopic>
            {data.replies.map((item)=><Reply key={item.id} item={item}></Reply>)}
        </Fragment>
    );
}

class Detail extends React.Component {

    componentDidMount() {
        this.props.httpGet(`/topic/${this.props.match.params.id}`)
    }

    componentWillUnmount() {
        this.props.initState()
    }

    render() {
        // console.log('detail.props')
        // console.log(this.props)

        if(this.props.detail.data && this.props.detail.data.data){
            return (
                <Fragment>
                    <Topic data={this.props.detail.data.data}/>
                </Fragment>
            )
        }else{
            return null
        }
    }
}

export default Detail