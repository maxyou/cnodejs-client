import React from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'
import rightArrow from '../commons/svg/right-circle.svg'

const StyledDivSpace = styled.div` 
    background: yellow;    
`  
const StyledDiv2 = styled.div` 
    background: red;
    .cn-avatar-container2{
        width: 200px;
        height: 200px;
        background: grey;
        display: flex;
        flex-direction: column;    
        align-items: center;
        justify-content:center;

        .cn-author2{
            flex: 0 1 auto;
            background: blue;
            font-size: 0.8em;   
            padding: 20px;
        }
        .cn-author22{
            flex: 0 1 auto;
            background: pink;
            font-size: 0.8em;   
        }
    }
`   
const StyledDiv = styled.div`    
    background: pink;
    .cn-ul{
        margin: 3px;
        padding: 3px;
        background: yellow;

        .cn-li{
            margin: 3px;
            padding: 3px;
            background: red;

            .cn-topic{
                margin: 3px;
                padding: 3px;
                background: grey;
                display: flex;
                flex-direction: row;
                align-items: center;                

                .cn-avatar-container{
                    flex: 0 0 auto;
                    width: 80px;
                    height: 80px;
                    background: green;
                    display: flex;
                    flex-direction: column;    
                    align-items: center;
                    justify-content:center;
                    
                    .cn-avatar{
                        flex: 0 1 auto;
                        // background: blue;
                        font-size: 0.8em;   
                        padding: 10px 0 5px;
                    }
                    .cn-author{
                        flex: 0 1 auto;
                        // background: pink;
                        font-size: 0.7em;
                        color: blue;
                    }
                    
                }
    
                .cn-title{
                    flex: 1 1 auto;
                    background: grey;
                    padding:10px;
                }
                .cn-goto-detail{
                    flex: 0 0 auto;
                    width: 60px;
                    height: 60px;
                    background: green;
                    font-size: 0.5 rem;
                }
    
            }
        
        }
    }
`

class CNode extends React.Component {

    componentDidMount() {
        this.props.httpGet('/topics')
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                {/* <StyledDiv2>
                    <div className="cn-avatar-container2">
                        <div className="cn-author2">loginname</div>
                        <div className="cn-author22">==loginname</div>
                    </div>
                </StyledDiv2>
                <StyledDivSpace>
                    space
                </StyledDivSpace> */}
                <StyledDiv>
                    {this.props.http.loading}
                    {/* <hr /> */}
                    <ul className="cn-ul">
                        {this.props.http.topics.map((item) => <li className="cn-li" key={item.id}>
                            <div className="cn-topic">
                                <div className="cn-avatar-container">
                                    {/* <AvatarImg className="cn-avatar" url={item.author.avatar_url} /> */}
                                    <div className="cn-avatar"><AvatarImg url={item.author.avatar_url} /></div>
                                    <div className="cn-author">{item.author.loginname}</div>
                                </div>
                                <div className="cn-title">{item.title}</div>
                                {/* <div className="cn-goto-detail">
                                </div> */}
                                    <img src={rightArrow} className="cn-goto-detail" alt="rightArrow" />
                            </div>
                        </li>)}
                    </ul>
                    {/* {JSON.stringify(this.props.http.topics)} */}
                </StyledDiv>
            </div>
        )
    }
}

export default CNode