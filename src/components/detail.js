import React from 'react'
import styled from 'styled-components'
import { AvatarImg } from '../commons/commons'
import { Switch, Route, Link } from 'react-router-dom'

function Post({data}) {
    console.log(data)
    return (
        <div>
            <div>{data.title}</div>
            <div>
                <span>CreateAt:{data.create_at}</span>{' - '}
                <span>Author:{data.author.loginname}</span>{' - '}
                <span>VisitCount:{data.visit_count}</span>{' - '}
                <span>From:{data.tab}</span>
            </div>
            <hr/>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />            
        </div>
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
        console.log('detail.props')
        console.log(this.props)
        return (
            <div>
                detail id:{this.props.match.params.id}
                <hr />
                {/* {JSON.stringify(this.props.detail)} */}

                <div>
                    {this.props.detail.data ?
                        (this.props.detail.data.data ?
                            <div>
                                <Post data={this.props.detail.data.data}/>
                            </div>
                            : null)
                        : null
                    }
                </div>
                <hr />
                <div>
                </div>

            </div>
        )
    }
}

export default Detail