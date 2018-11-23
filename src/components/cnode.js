import React from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'

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

                .cn-avatar{
                    flex: 0 0 auto;
                    margin: 3px;
                    padding: 3px;
                    background: grey;
                }
    
                .cn-title{
                    flex: 1 1 auto;
                    margin: 3px;
                    padding: 3px;
                    background: grey;
                }
    
                .cn-author{
                    flex: 0 0 auto;
                    margin: 3px;
                    padding: 3px;
                    background: green;
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
                cnode=====
                <StyledDiv>
                    {this.props.http.loading}
                    <hr />
                    <ul className="cn-ul">
                        {this.props.http.topics.map((item) => <li className="cn-li" key={item.id}>
                            <div className="cn-topic">
                                <AvatarImg className="cn-avatar" url={item.author.avatar_url} />
                                <div className="cn-author">{item.author.loginname}</div>
                                <div className="cn-title">{item.title}</div>
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