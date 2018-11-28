import React from 'react'
import styled from 'styled-components'
import {AvatarImg} from '../commons/commons'
import { Switch, Route, Link } from 'react-router-dom'

class Detail extends React.Component {

    componentDidMount() {
        this.props.httpGet(`/topic/${this.props.match.params.id}`)
    }
    
    render() {
        console.log('detail.props')
        console.log(this.props)
        return (
            <div>
                detail id:{this.props.match.params.id}
                <hr/>
                {/* {JSON.stringify(this.props.detail)} */}

                <div>
                    {this.props.detail.data?
                        (this.props.detail.data.data?
                            <div dangerouslySetInnerHTML={{__html:this.props.detail.data.data.content}}>
                                
                            </div>
                            :null)
                        :null
                    }
                </div>
                <hr/>
                <div>
                </div>

            </div>
        )
    }
}

export default Detail