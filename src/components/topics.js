import React from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'
import {tabfilterQueryStr} from '../reducers/tabfilter'
import rightArrow from '../commons/svg/right-circle.svg'
import { Link } from 'react-router-dom'

// const StyledDivSpace = styled.div` 
//     background: yellow;    
// `  
// const StyledDiv2 = styled.div` 
//     background: red;
//     .cn-avatar-container2{
//         width: 200px;
//         height: 200px;
//         background: grey;
//         display: flex;
//         flex-direction: column;    
//         align-items: center;
//         justify-content:center;

//         .cn-author2{
//             flex: 0 1 auto;
//             background: blue;
//             font-size: 0.8em;   
//             padding: 20px;
//         }
//         .cn-author22{
//             flex: 0 1 auto;
//             background: pink;
//             font-size: 0.8em;   
//         }
//     }
// `   
const StyledDiv = styled.div`    
    // background: pink;
    // margin: 10px;
    .cn-ul{
        // margin: 0px;
        padding: 0px;
        // background: yellow;

        .cn-li{
            list-style-type: none;
            margin: 10px;
            // padding: 3px;
            // background: red;

            .cn-topic{
                // margin: 3px;
                // padding: 3px;
                background: #eeeeee;
                display: flex;
                flex-direction: row;
                align-items: center;                

                .cn-avatar-container{
                    flex: 0 0 auto;
                    width: 80px;
                    height: 80px;
                    // background: green;
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
                    // background: grey;
                    padding:10px;
                }
                .cn-goto-detail{
                    flex: 0 0 auto;
                    width: 50px;
                    height: 50px;
                    margin-right:10px;
                    opacity: 0.3;
                    // background: green;
                    font-size: 0.5 rem;
                }
    
            }
        
        }
    }
`

class Topics extends React.Component {

    constructor(props){
        super(props)

        // console.log('----constructor----')
        // console.log(this.props.paginate)
        // console.log(this.props.tabfilter)
        
    }

    httpUpdate(){
        this.props.httpGet('/topics' 
        + tabfilterQueryStr(this.props.tabfilter)
        + '&&page=' + this.props.current
        + '&&limit=20')
    }

    componentDidMount() {
        // this.props.httpGet('/topics' + tabfilterQueryStr(this.props.tabfilter))
        this.httpUpdate()
    }
    
    componentDidUpdate(prevProps){
        // console.log('----componentDidUpdate----')
        // console.log(this.props.paginate)
        // console.log(prevProps.paginate)
        // console.log(this.props.tabfilter)
        // console.log(prevProps.tabfilter)
        if(this.props.tabfilter!==prevProps.tabfilter
            || this.props.current!==prevProps.current
            ){
            // this.props.httpGet('/topics' 
            //     + tabfilterQueryStr(this.props.tabfilter)
            //     + '&&page=' + this.props.paginate)
            this.props.initState()
            this.httpUpdate()
            // console.log('componentDidUpdate')
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <StyledDiv>
                    <ul className="cn-ul">
                        {
                            this.props.topics.data?

                                this.props.topics.data.map((item) => <li className="cn-li" key={item.id}>
                                    <div className="cn-topic">
                                        <div className="cn-avatar-container">
                                            {/* <AvatarImg className="cn-avatar" url={item.author.avatar_url} /> */}
                                            <div className="cn-avatar"><AvatarImg url={item.author.avatar_url} /></div>
                                            <div className="cn-author">{item.author.loginname}</div>
                                        </div>
                                        <div className="cn-title">{item.title}</div>
                                        <Link to={`${this.props.match.url}/detail/${item.id}`}>
                                            <img src={rightArrow} className="cn-goto-detail" alt="rightArrow" />
                                        </Link>
                                    </div>
                                </li>)
                            
                            :null
                        }
                    </ul>
                    {/* {JSON.stringify(this.props.http.topics)} */}
                </StyledDiv>
            </div>
        )
    }
}

export default Topics