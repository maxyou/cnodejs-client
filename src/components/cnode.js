import React from 'react'

class CNode extends React.Component{

    componentDidMount(){
        this.props.httpGet('/topics')
    }

    render(){
        // console.log(this.props)
        return (
            <div>
                cnode=====
                <div>
                    {this.props.http.loading}
                    <hr/>
                    {JSON.stringify(this.props.http.topics)}
                </div>
            </div>
        )
    }
}

export default CNode